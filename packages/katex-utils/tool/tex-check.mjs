#!/usr/bin/env zx
/* eslint-disable max-len, no-console */

// region ZX Util
$.verbose = false;

const join = path.join;
const filename = path.basename(__filename);

function exist(path) {
  return fs.existsSync(path);
}

function isDir(path) {
  return exist(path) && fs.lstatSync(path).isDirectory();
}

function isFile(path) {
  return exist(path) && fs.lstatSync(path).isFile();
}

async function iterateDir(path, fn) {
  if (!isDir(path)) {
    return;
  }

  for (const file of fs.readdirSync(path)) {
    await fn(file);
  }
}

function read(path) {
  return fs.readFileSync(path, { encoding: 'utf8' });
}

function readJson(path) {
  return fs.readJSONSync(path);
}

function write(p, content) {
  const dir = path.dirname(p);
  if (!exist(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  return fs.writeFileSync(p, content);
}

function writeJson(path, json) {
  return write(path, JSON.stringify(json, null, 2));
}

function remove(path) {
  if (!exist(path)) {
    return;
  }

  if (fs.lstatSync(path).isDirectory()) {
    return fs.rmSync(path, { force: true, recursive: true });
  } else {
    return fs.rmSync(path, { force: true });
  }
}

function addLine(str, added, backward = false) {
  if (backward) {
    return added + '\n' + str;
  } else {
    return str + '\n' + added;
  }
}

function addLineToFile(path, added, backward = false) {
  return write(path, addLine(read(path), added, backward));
}

const _printTag = '' || filename;

function print(...args) {
  echo(`\x1B[35m[${_printTag}]`, ...args, '\x1B[0m');
}

function printSuccess(...args) {
  echo(`\x1B[36m\x1B[46m✅  [${_printTag}]`, ...args, '\x1B[0m');
}

function printError(...args) {
  echo(`\x1B[31m\x1b[43m⚠️ [${_printTag}]`, ...args, '\x1B[0m');
}

async function input(message) {
  if (message) {
    return question(message + ': ');
  } else {
    return stdin();
  }
}

async function fixLint(path) {
  await $`yarn prettier ${path} --write --loglevel silent`;
  await $`yarn eslint ${path} --fix --quiet --max-warnings 100`;
}

const HEADING = `// @ts-nocheck
/* eslint-disable */
/**
 * Generated file. Don't modify manually.
 */
 `;

// endregion

// start

const cw_original = console.warn;
console.warn = (...args) => {
  if (typeof args[0] === 'string') {
    if (args[0].startsWith('No character metrics for ')) return;
  }
  cw_original(...args);
};

/** @type {{id: number; task_id: number; problem_tex: string; solution_tex: string; answer: number; answer_type: string;}[]}  */
const problems = require('./data/all.json');

const util = require('../dist/index.js');

printSuccess(problems.length);

// problems.splice(10000);

/** @type {{problem_id: number; task_id; number; type: 'problem' | 'solution'; msg: string}[]} */
const errors = [];

/**
 *
 * @param {number} id
 * @param {number} task_id
 * @param {'problem' | 'solution'} type
 * @param {string} msg
 */
function addError(id, task_id, type, msg) {
  printError(id, task_id, type, msg);
  errors.push({ problem_id: id, task_id, type, msg });
}

const tKey = {};

function measureStart(name) {
  print(`=====Measure Start [${name}]=======`);
  tKey[name] = Date.now();
}

function measureEnd(name) {
  print(`=====Measure End [${name}]==[${Date.now() - tKey[name]}ms]=======`);
}

let index = -1;

/**
 * @param {string} html
 * @return {string[]}
 */
const parseImageUris = (html) => {
  const regex = /<img.*?src="(.*?)".*?>/gi;

  let match;
  const ret = [];
  while ((match = regex.exec(html))) {
    ret.push(match[1]);
  }
  return ret;
};

const downloadImageAndGetByte = (uri) => {
  return fetch(uri)
    .then((r) => r.blob())
    .then((blob) => blob.size);
};

const checkImageIsDownloadable = async (uri) => {
  const ret = await fetch(uri, { method: 'HEAD' });
  return ret.ok;
};

const CHECK_IMAGE_DOWNLOADABLE = false;
const CHECK_TEX_SYNTAX = true;

const processing = async () => {
  for (const { id, task_id, problem_tex, solution_tex, answer, answer_type } of problems) {
    index += 1;
    if (index % 2000 === 0) {
      print(`Processing: ${index}th`);
    }

    if (CHECK_TEX_SYNTAX) {
      try {
        util.formatKatexToHtmlStringWithOptions(problem_tex, {
          convertMarkUp: false,
          injectPhantomBoxClasses: false,
          convertTable: false,
          throwOnKaTexError: true,
        });
      } catch (e) {
        if (e.name === 'ParseError') {
          addError(id, task_id, 'problem', `TeX 문법 오류, ${e}`);
        } else {
          addError(id, task_id, 'problem', '알 수 없는 오류');
        }
      }

      try {
        util.formatKatexToHtmlStringWithOptions(solution_tex, {
          convertMarkUp: false,
          injectPhantomBoxClasses: false,
          convertTable: false,
          throwOnKaTexError: true,
        });
      } catch (e) {
        if (e.name === 'ParseError') {
          addError(id, task_id, 'solution', `TeX 문법 오류, ${e}`);
        } else {
          addError(id, task_id, 'solution', '알 수 없는 오류');
        }
      }
    }

    if (/\[정답\](\d+)/.test(solution_tex)) {
      const answerInTex = /\[정답\](\d+)/.exec(solution_tex)[1];
      if (Number(answerInTex) !== answer) {
        addError(
          id,
          task_id,
          'solution',
          `정답이 solution_tex에 있는 것과 일치하지 않음, Tex 내 정답: [${answerInTex}], 문제의 정답: [${answer}]`,
        );
      }
    }

    if (/\[테이블\]/.test(problem_tex)) {
      addError(id, task_id, 'problem', '[테이블] 문법은 문제에서 지원되지 않습니다');
    }
    if (/\[테이블\]/.test(solution_tex)) {
      addError(id, task_id, 'solution', '[테이블] 문법은 문제에서 지원되지 않습니다');
    }
    if (/\[들여쓰기(\d+)?\]/.test(problem_tex)) {
      addError(id, task_id, 'problem', '[들여쓰기] 문법은 문제에서 지원되지 않습니다');
    }
    if (/\[들여쓰기(\d+)?\]/.test(solution_tex)) {
      addError(id, task_id, 'solution', '[들여쓰기] 문법은 문제에서 지원되지 않습니다');
    }

    if (CHECK_IMAGE_DOWNLOADABLE) {
      const problemImages = parseImageUris(problem_tex);
      for (const img of problemImages) {
        try {
          const isDownloadable = await checkImageIsDownloadable(img);

          if (!isDownloadable) {
            addError(id, task_id, 'problem', `이미지를 다운로드 할 수 없습니다`);
          }

          // const byte = await downloadImageAndGetByte(img);
          // const kb = byte / 1024;
          // console.log(img, Math.round(kb) + 'kb');
        } catch (e) {
          addError(id, task_id, 'problem', `이미지를 검사하던 중 문제가 발생했습니다. ${e}`);
        }
      }

      const solutionImages = parseImageUris(solution_tex);
      for (const img of solutionImages) {
        try {
          const isDownloadable = await checkImageIsDownloadable(img);

          if (!isDownloadable) {
            addError(id, task_id, 'solution', `이미지를 다운로드 할 수 없습니다`);
          }

          // const byte = await downloadImageAndGetByte(img);
          // const kb = byte / 1024;
          // console.log(img, Math.round(kb) + 'kb');
        } catch (e) {
          addError(id, task_id, 'solution', `이미지를 검사하던 중 문제가 발생했습니다. ${e}`);
        }
      }
    }
  }
};

measureStart('processing');
await processing();
measureEnd('processing');
printSuccess(`Done, error: ${errors.length}, Saved to data/result.json`);

writeJson('./tool/data/result.json', errors);

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

/** @type {{id: number; tex: string; task_id: number;}[]}  */
const hints = require('./hints.json');
const util = require('../../dist/index.js');

printSuccess(hints.length);

/** @type {{problem_id: number; task_id; number; type: 'problem' | 'solution'; msg: string}[]} */
const errors = [];

/**
 *
 * @param {number} id
 * @param {number} task_id
 * @param {string} msg
 */
function addError(id, task_id, msg) {
  printError(id, msg);
  errors.push({ hint_id: id, task_id, msg });
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

const CHECK_TEX_SYNTAX = true;

const processing = async () => {
  for (const { id, tex, task_id } of hints) {
    index += 1;
    if (index % 2000 === 0) {
      print(`Processing: ${index}th`);
    }

    if (CHECK_TEX_SYNTAX) {
      try {
        util.formatKatexToHtmlStringWithOptions(tex, {
          convertMarkUp: false,
          injectPhantomBoxClasses: false,
          convertTable: false,
          throwOnKaTexError: true,
        });
      } catch (e) {
        if (e.name === 'ParseError') {
          addError(id, task_id, `TeX 문법 오류, ${e}`);
        } else {
          addError(id, task_id, '알 수 없는 오류');
        }
      }
    }

    const regex = () => /(reason)|(translation)|(interpretation)|(hint)|(original)|(mathematical)|(korea)/i;
    const match = regex().exec(tex);
    if (match) {
      addError(id, task_id, `영어 포함 ${match[0]}`);
    }
  }

  // Length Check
  let h = [...hints];
  h = h.sort((a, b) => b.tex.length - a.tex.length).filter((h) => h.tex.length >= 250);
  h.forEach((h) => {
    addError(h.id, h.task_id, `길이가 깁니다 ${h.tex.length}`);
  });

  // h = [...hints].filter((h) => /입니다/i.test(h.tex));
  // h.forEach((h) => {
  //   addError(h.id, `입니다 라는 단어가 들어갑니다`);
  // });
};

measureStart('processing');
await processing();
measureEnd('processing');
print(`Done, error: ${errors.length}, Saved to result.json`);
if (!errors.length) {
  printSuccess('No Error!');
}

writeJson('tool/hint_check/result.json', errors);

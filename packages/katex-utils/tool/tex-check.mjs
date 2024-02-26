#!/usr/bin/env zx
/* eslint-disable max-len */

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

const json = require('./data/all.json');
const KaTeXUtil = require('../dist/index.js');

printSuccess(json.length);

const errors = [];
for (const { id, task_id, problem_tex, solution_tex } of json) {
  if (id % 1000 === 0) {
    print(id);
  }

  try {
    KaTeXUtil.formatKatexToHtmlStringWithOptions(problem_tex, {
      convertMarkUp: true,
      injectPhantomBoxClasses: true,
      convertTable: true,
      throwOnKaTexError: true,
    });
  } catch (e) {
    printError(id, task_id, 'proble');
    errors.push({ id, task_id, e, type: 'problem' });
  }

  try {
    KaTeXUtil.formatKatexToHtmlStringWithOptions(solution_tex, {
      convertMarkUp: true,
      injectPhantomBoxClasses: true,
      convertTable: true,
      throwOnKaTexError: true,
    });
  } catch (e) {
    printError(id, task_id, 'solution');
    errors.push({ id, task_id, e, type: 'solution' });
  }
}

printSuccess(`Done, error: ${errors.length}`);

writeJson('./tool/data/result.json', errors);

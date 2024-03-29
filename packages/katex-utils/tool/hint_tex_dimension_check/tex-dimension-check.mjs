#!/usr/bin/env zx
/* eslint-disable max-len */

// region ZX Util
import fs from 'fs-extra';
import puppeteer from 'puppeteer';

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

// you should require when possible(optimized in js)
function readJsonSlow(path) {
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

const tKey = {};

function measureBegin(name = '⏳') {
  print(`=======Start [${name}=======`);
  tKey[name] = Date.now();
}

function measureEnd(name = '⏳') {
  print(`=======End [${name}]==[${(Date.now() - tKey[name]).toLocaleString().split('.')[0]}ms]=======`);
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
const browser = await puppeteer.launch();
const page = await browser.newPage();

/** @type {{id: number; tex: string; task_id: number;}[]}  */
const hints = require('./hints.json');

const util = require('../../dist/index.js');

async function checkWidth(id, tex, screenshot = false) {
  const onlyEquations = tex
    .split('$')
    .map((t, i) => (i % 2 === 1 ? `$${t}$` : ''))
    .join('\n');
  const html = util.formatKatexToHtmlStringWithOptions(onlyEquations, {
    convertMarkUp: false,
    injectPhantomBoxClasses: false,
    convertTable: false,
    throwOnKaTexError: true,
  });

  await page.setContent(html);

  // Load style
  await page.addStyleTag({
    path: 'dist/mathking-katex.css',
  });
  await page.addStyleTag({
    content: '._cms_content-frame { border: 1px solid black; }',
  });
  await page.evaluateHandle('document.fonts.ready');

  // Set screen size
  await page.setViewport({ width: 800, height: 2000 });

  const element = await page.$('._cms_content-frame');

  if (element) {
    const box = await element.boundingBox();

    if (screenshot) {
      await page.screenshot({
        path: `tool/data/${id}.png`,
        type: 'png',
        fullPage: false,
        omitBackground: false,
        optimizeForSpeed: true,
      });
    }
    return box.width;
  } else {
    // printError(id, 'failed');
  }
  return 0;
}

const cw_original = console.warn;
console.warn = (...args) => {
  if (typeof args[0] === 'string') {
    if (args[0].startsWith('No character metrics for ')) return;
  }
  cw_original(...args);
};

let result = [];
let i = -1;

async function go() {
  for (const p of hints) {
    i++;
    const { id, task_id, tex } = p;
    const width = await checkWidth(`${id}-${task_id}-p`, tex, false);

    result.push({
      hint: {
        id,
        task_id,
      },
      width,
    });
    console.log(i);
  }
}

await go();

result.sort((a, b) => {
  return b.width - a.width;
});
console.log(result.length);

writeJson(`tool/hint_tex_dimension_check/measure-result.json`, result);

printSuccess('Done');
await page.close();
await browser.close();

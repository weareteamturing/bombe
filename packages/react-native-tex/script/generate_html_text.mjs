#!/usr/bin/env zx
/* eslint-disable */

// region ZX Util
$.verbose = false;
const join = path.join;
const filename = path.basename(__filename);
function exist(path) {
  return fs.existsSync(path);
}
function read(path) {
  return fs.readFileSync(path, { encoding: 'utf8' });
}
function readJson(path) {
  return fs.readJSONSync(path);
}
function write(path, content) {
  return fs.writeFileSync(path, content);
}
function writeJson(path, json) {
  return write(path, JSON.stringify(json, null, 2));
}
function remove(path) {
  return fs.rmSync(path, { force: true });
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
// endregion

await $`pwd`;
const srcDir = argv.src;
const inputs = ['LaTexHtml', 'TexFeedbackHtml'];

async function go(input) {
  const htmlFile = join(srcDir, input + '.html');
  const tsFile = join(srcDir, input + 'Text.ts');
  try {
    const previousContent = read(tsFile);

    remove(tsFile);

    const htmlContent = read(htmlFile).replaceAll('99999px', '${fontSize}px');

    let content = '';
    content = addLine(content, '/* eslint-disable */');
    content = addLine(content, 'const text = ({ fontSize }: { fontSize: number } = { fontSize: 13 }) => String.raw`');
    content = addLine(content, htmlContent.trim());
    content = addLine(content, '`');
    content = addLine(content, 'export default text;');
    content = content.trim();
    write(tsFile, content);
    printSuccess(tsFile);

    if (previousContent !== content) {
      print(`${tsFile} file content has benn changed!`);
    }
  } catch (e) {
    printError(`❌ ${tsFile}`, e);
  }
}

for (const input of inputs) {
  await go(input);
}

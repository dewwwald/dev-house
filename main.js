#!/usr/bin/env node
const commander = require('commander');

function argsList(val) {
  return val.split(',');
}

function trim (value) {
  return value.trim();
}

function main() {
  commander
    .option('-n, --npm-run', 'Prepends npm run to task list')
    .option('-t, --task-list <task-list>', 'The list of commands to run', argsList)
    .parse(process.argv);

  run(commander);
}

function run(program) {
  const ENVS = '';
  const tasks = program.taskList.slice().map((task) => {
    if (program.npmRun) {
      return trim(`${ENVS} npm run ${task}`);
    }
    return trim(`${ENVS} ${task}`);
  });
}

main();

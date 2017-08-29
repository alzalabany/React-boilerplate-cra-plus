#!/usr/bin/env node

const nodePlop = require('node-plop');
// load an instance of plop from a plopfile
const plop = nodePlop('./generators');

const params = [];
process.argv.forEach((val) => {
  if (val.indexOf('/') > -1) return;
  params.push(val);
});

const basicAdd = plop.getGenerator(params[0]);
basicAdd.runActions({
  name: 'add'
}).then(function (results) {
  // do something after the actions have run
  console.log(results);
});

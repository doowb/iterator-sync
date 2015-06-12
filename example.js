var fs = require('fs');
var iterator = require('./');
var stack = [
  function (fp) { return fs.readFileSync(fp, 'utf8'); },
  function (contents) { return JSON.parse(contents); }
];
var readJSON = iterator(stack);
var pkg = readJSON('./package.json');
console.log(pkg);

'use strict';

var argv = require('minimist')(phantom.args),
    fs = require('fs'),
    pagegen = require('./pagegen');

var sourceFileName,
    sourceFileContent,
    svgFileName,
    svgFileContent;

console.log(JSON.stringify(argv));

if (typeof argv.i === 'string') {
    // sourceFileName = fs.absolute(argv.i);
    sourceFileName = argv.i;
    console.log(sourceFileName);
    sourceFileContent = fs.read(sourceFileName);
    console.log('read data:', sourceFileContent);
}

pagegen();

if (typeof argv.s === 'string') {
    svgFileName = argv.s;
    svgFileContent = sourceFileContent;
    fs.write(svgFileName, svgFileContent, 'w');
}

phantom.exit();

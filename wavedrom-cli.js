#!/usr/bin/env node
'use strict';

var fs = require('fs-extra');
var yaml = require('yaml');
var yargs = require('yargs');
var onml = require('onml');

var wavedrom = require('wavedrom');
var def = require('wavedrom/skins/default.js');
var narrow = require('wavedrom/skins/narrow.js');
var lowkey = require('wavedrom/skins/lowkey.js');

var skins = Object.assign({}, def, narrow, lowkey);

var argv = yargs
    .option('input', {describe: 'path to the source', alias: 'i'})
    .option('svg',   {describe: 'path to the generated SVG', alias: 's'})
    .option('png',   {describe: 'path to the generated PNG', alias: 'p'})
    .version()
    .demandOption(['input'])
    .help()
    .argv;

var fileName;

fileName = argv.input;
fs.readFile(fileName, {encoding: 'utf8'}, function (err, body) {
    var source = yaml.parse(body);
    var res = wavedrom.renderAny(0, source, skins);
    var svg = onml.s(res);
    if (argv.svg) {
      fs.outputFile(argv.svg, svg, function (err) {
        if (err) { throw new Error(err); }
      });
    }
    if (argv.png) {
      var svg2img = require('svg2img');
      svg2img(svg, function(err, buf) {
        fs.outputFile(argv.png, buf);
      });
    }
    if (!(argv.svg || argv.png)) {
      console.log(svg);
    }
});

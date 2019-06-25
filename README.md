[![NPM version](https://img.shields.io/npm/v/wavedrom-cli.svg)](https://www.npmjs.org/package/wavedrom-cli)
[![Build Status](https://travis-ci.org/wavedrom/cli.svg?branch=master)](https://travis-ci.org/wavedrom/cli)

# wavedrom-cli

WaveDrom command-line interface

## Install

Require `node.js` >=8

```sh
npm i wavedrom-cli --save-dev
```

## Use

### Options

```
-i <input wavedrom source filename>
-p file.png <output PNG image file name>
-s <output SVG image file name>
```

### Example

```sh
wavedrom-cli -i test/src/step4.js -p step4.png -s step4.svg
```
### Export with Inkscape

[Inkscape](https://inkscape.org) is awesome SVG editor that can be used to convert SVG to many other formats: PDF, PS, EPS, EMF, WMF, PNG. etc. It can be chained with `wavedrom-cli` to output those formats. Here is an example:

```sh
wavedrom-cli -i test/src/step4.js | inkscape --file - --export-pdf step4.pdf
```

## License

MIT [LICENSE](./LICENSE).

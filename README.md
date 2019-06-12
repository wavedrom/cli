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

## License

MIT [LICENSE](./LICENSE).

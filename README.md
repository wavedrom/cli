[![Build Status](https://travis-ci.org/wavedrom/cli.svg?branch=master)](https://travis-ci.org/wavedrom/cli)
[![Build status](https://ci.appveyor.com/api/projects/status/anen4s0shxsq5wj4?svg=true)](https://ci.appveyor.com/project/drom/cli)

# wavedrom-cli

WaveDrom command-line interface using PhantomJS

## Install

```sh
npm i wavedrom-cli --save-dev
```

## Use

### Options

```
-i <input wavedrom source filename>
-p <output PNG image file name>
-s <output SVG image file name>
```

### Example

```sh
phantomjs ./node_modules/.bin/wavedrom -i test/src/step4.js -p step4.png -s step4.svg
```

## Dependencies

Requires [PhantomJS](http://phantomjs.org/) v2 to run.

[PhantomJS build instructions](http://phantomjs.org/build.html)

## License

MIT [LICENSE](https://github.com/wavedrom/cli/blob/master/LICENSE).

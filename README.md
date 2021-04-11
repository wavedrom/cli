[![NPM version](https://img.shields.io/npm/v/wavedrom-cli.svg)](https://www.npmjs.org/package/wavedrom-cli)
[![Linux](https://github.com/wavedrom/cli/actions/workflows/linux.yml/badge.svg)](https://github.com/wavedrom/cli/actions/workflows/linux.yml)

# wavedrom-cli

WaveDrom command-line interface

## Usage

### Export SVG

```sh
npx wavedrom-cli -i mywave.json5 -s mywave.svg
```

### Export PNG

```sh
npx wavedrom-cli -i mywave.json5 -p mywave.png
```

### Export with Inkscape

[Inkscape](https://inkscape.org) is awesome SVG editor that can be used to convert SVG to many other formats: PDF, PS, EPS, EMF, WMF, PNG. etc. It can be chained with `wavedrom-cli` to output those formats. Here is an example:

```sh
npx wavedrom-cli -i mywave.json5 | inkscape --file - --export-pdf mywave.pdf
```

### Options

```
  --input, -i  path to the source                                     [required]
  --svg, -s    path to the generated SVG
  --png, -p    path to the generated PNG
  --version    Show version number                                     [boolean]
  --help       Show help                                               [boolean]
```

## License

MIT [LICENSE](./LICENSE).

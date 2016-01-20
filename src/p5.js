/* foot begin */

// some parameters
var lane = {
    xs     : 10,    // tmpgraphlane0.width
    ys     : 10,    // tmpgraphlane0.height
    xg     : 120,   // tmpgraphlane0.x
    // yg     : 0,     // head gap
    yh0    : 0,     // head gap title
    yh1    : 0,     // head gap
    yf0    : 0,     // foot gap
    yf1    : 0,     // foot gap
    y0     : 5,     // tmpgraphlane0.y
    yo     : 30,    // tmpgraphlane1.y - y0;
    tgo    : -10,   // tmptextlane0.x - xg;
    ym     : 150,    // tmptextlane0.y - y0
    xlabel : 6,     // tmptextlabel.x - xg;
    xmax   : 1,
    scale  : 1,
    head   : {},
    foot   : {}
};

// add div into body
var div = document.createElement('div');
div.id = 'a0';
document.body.appendChild(div);

// added waveform
module.exports.renderWaveForm(
  0,
  { signal:
    [
        { name: "clk",     wave: "p....." },
        { name: "Data",    wave: "x345x.",  data: ["head", "body", "tail"] },
        { name: "Request", wave: "01..0." }
    ]
  },
  'a',
  lane
);

var svgcontent_0 = document.getElementById('svgcontent_0');
var ser = new XMLSerializer();
var svg = '<?xml version="1.0" standalone="no"?>\n'
    + '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">\n'
    + '<!-- Created with WaveDrom -->\n'
    + ser.serializeToString(svgcontent_0);

return '{ "width": ' + svgcontent_0.getAttribute('width')
    + ', "height": ' + svgcontent_0.getAttribute('height')
    + ', "svg": ' + JSON.stringify(svg)
    + '}';

}

// console.log(JSON.stringify(typeof argumist()));

var argv = argumist()(system.args);

var sourceFileName,
    sourceFileContent;

if (typeof argv.i === 'string') {
    sourceFileName = argv.i;
    sourceFileContent = fs.read(sourceFileName);
}

page.content = '<!DOCTYPE html><meta charset="utf-8"><body></body></html>';

page.includeJs('http://wavedrom.com/skins/default.js', function () {
    var svgFileName,
        svgFileContent,
        pngFileName,
        pngFileContent,
        report;

    report = page.evaluate(pagegen);
    report = JSON.parse(report);
    page.viewportSize = { width: report.width, height: report.height };


    if (typeof argv.s === 'string') {
        svgFileName = argv.s;
        svgFileContent = sourceFileContent;
        fs.write(svgFileName, report.svg, 'w');
    }

    if (typeof argv.p === 'string') {
        pngFileName = argv.p;
        page.render(pngFileName);
    }

    phantom.exit();
})

/* foot end */

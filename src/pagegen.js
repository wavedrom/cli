'use strict';

var page = require('webpage').create();

// var wavedrom = require('wavedrom');

function pagegen () {
    page.viewportSize = { width: 400, height : 400 };
    page.content = '<!DOCTYPE html><meta charset="utf-8"><head><script src="http://wavedrom.com/skins/default.js" type="text/javascript"></script><script src="http://wavedrom.com/WaveDrom.js" type="text/javascript"></script></head><body><div id="a0"></div></body></html>';
    page.evaluate(function() {

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
        // var div = document.createElement('div');
        // div.id = 'a0';
        // document.body.appendChild(div);

        // added waveform
        WaveDrom.renderWaveForm(
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
    });
//     page.viewportSize = { width: 400, height : 400 };
//     page.content = '<html><body><canvas id="surface"></canvas></body></html>';
//     page.evaluate(function() {
//         var el = document.getElementById('surface'),
//             context = el.getContext('2d'),
//             width = window.innerWidth,
//             height = window.innerHeight,
//             cx = width / 2,
//             cy = height / 2,
//             radius = width  / 2.3,
//             imageData,
//             pixels,
//             hue, sat, value,
//             i = 0, x, y, rx, ry, d,
//             f, g, p, u, v, w, rgb;
//
//         el.width = width;
//         el.height = height;
//         imageData = context.createImageData(width, height);
//         pixels = imageData.data;
//
//         for (y = 0; y < height; y = y + 1) {
//             for (x = 0; x < width; x = x + 1, i = i + 4) {
//                 rx = x - cx;
//                 ry = y - cy;
//                 d = rx * rx + ry * ry;
//                 if (d < radius * radius) {
//                     hue = 6 * (Math.atan2(ry, rx) + Math.PI) / (2 * Math.PI);
//                     sat = Math.sqrt(d) / radius;
//                     g = Math.floor(hue);
//                     f = hue - g;
//                     u = 255 * (1 - sat);
//                     v = 255 * (1 - sat * f);
//                     w = 255 * (1 - sat * (1 - f));
//                     pixels[i] = [255, v, u, u, w, 255, 255][g];
//                     pixels[i + 1] = [w, 255, 255, v, u, u, w][g];
//                     pixels[i + 2] = [u, u, w, 255, 255, v, u][g];
//                     pixels[i + 3] = 255;
//                 }
//             }
//         }
//
//         context.putImageData(imageData, 0, 0);
//         document.body.style.backgroundColor = 'white';
//         document.body.style.margin = '0px';
//     });

    page.render('colorwheel.png');
}

module.exports = pagegen;

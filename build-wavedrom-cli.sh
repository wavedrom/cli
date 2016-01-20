#!/bin/sh
cd src
../node_modules/.bin/browserify --standalone argumist ./p2_src.js > ./p2.js
../node_modules/.bin/browserify --standalone WaveDrom ./p4_src.js > ./p4.js
cat ./p1.js ./p2.js ./p3.js ./p4.js ./p5.js > ../bin/wavedrom-cli.js

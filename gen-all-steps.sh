#!/bin/sh
unset QT_QPA_PLATFORM
phantomjs/bin/phantomjs bin/wavedrom-cli.js -i test/src/step1.js -p test/res/step1.png -s test/res/step1.svg
phantomjs/bin/phantomjs bin/wavedrom-cli.js -i test/src/step2.js -p test/res/step2.png -s test/res/step2.svg
phantomjs/bin/phantomjs bin/wavedrom-cli.js -i test/src/step3.js -p test/res/step3.png -s test/res/step3.svg
phantomjs/bin/phantomjs bin/wavedrom-cli.js -i test/src/step4.js -p test/res/step4.png -s test/res/step4.svg
phantomjs/bin/phantomjs bin/wavedrom-cli.js -i test/src/step5.js -p test/res/step5.png -s test/res/step5.svg
phantomjs/bin/phantomjs bin/wavedrom-cli.js -i test/src/step6.js -p test/res/step6.png -s test/res/step6.svg
phantomjs/bin/phantomjs bin/wavedrom-cli.js -i test/src/step7.js -p test/res/step7.png -s test/res/step7.svg
phantomjs/bin/phantomjs bin/wavedrom-cli.js -i test/src/step1.js -p test/res/step1.pdf
phantomjs/bin/phantomjs bin/wavedrom-cli.js -i test/src/step2.js -p test/res/step2.pdf
phantomjs/bin/phantomjs bin/wavedrom-cli.js -i test/src/step3.js -p test/res/step3.pdf
phantomjs/bin/phantomjs bin/wavedrom-cli.js -i test/src/step4.js -p test/res/step4.pdf
phantomjs/bin/phantomjs bin/wavedrom-cli.js -i test/src/step5.js -p test/res/step5.pdf
phantomjs/bin/phantomjs bin/wavedrom-cli.js -i test/src/step6.js -p test/res/step6.pdf
phantomjs/bin/phantomjs bin/wavedrom-cli.js -i test/src/step7.js -p test/res/step7.pdf

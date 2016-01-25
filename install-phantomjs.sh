#!/bin/bash

echo ${TRAVIS_OS_NAME}
which unzip

if [[ $TRAVIS_OS_NAME == 'osx' ]]; then
    wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-macosx.zip
    unzip phantomjs-2.1.1-macosx.zip
    ln -s phantomjs-2.1.1-macosx phantomjs
else
    wget https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
    tar -xvjf phantomjs-2.1.1-linux-x86_64.tar.bz2
    ln -s phantomjs-2.1.1-linux-x86_64 phantomjs
fi

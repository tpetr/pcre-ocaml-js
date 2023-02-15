#!/bin/bash -eu

PCRE_VERSION="8.45"

export EM_CACHE="$(pwd)/.emscripten-cache"

curl -L "https://sourceforge.net/projects/pcre/files/pcre/${PCRE_VERSION}/pcre-${PCRE_VERSION}.tar.gz/download" | tar xvz

pushd pcre-${PCRE_VERSION}

emconfigure ./configure --enable-utf8

patch Makefile ../makefile-wasm.patch -o Makefile.wasm

V=1 emmake make -f Makefile.wasm libpcre.js

popd

cp pcre-${PCRE_VERSION}/libpcre.{js,wasm} ./

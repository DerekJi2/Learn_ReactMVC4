#!/bin/sh

mkdir -p src

mkdir -p dist

npm init

npm install typescript webpack awesome-typescript-loader source-map-loader --save-dev

npm install jquery --save

npm install @types/jquery --save   

tar zxvf  sbin/init_package.tar.gz

webpack
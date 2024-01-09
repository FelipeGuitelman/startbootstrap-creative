'use strict';
const autoprefixer = require('autoprefixer')
const fs = require('fs');
const packageJSON = require('../package.json');
const upath = require('upath');
const postcss = require('postcss')
const sass = require('sass');
const sh = require('shelljs');

const stylesPath = '../src/scss/styles.scss';
//const destPath = upath.resolve(upath.dirname(__filename), '../dist/css/styles.css');

module.exports = function renderSCSS() {
    console.log('css');
};
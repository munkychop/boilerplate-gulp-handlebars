'use strict';

const _gulp = require('gulp');
const _sass = require('gulp-sass');
const _autoprefixer = require('autoprefixer');
const _sourcemaps = require('gulp-sourcemaps');
const _postcss = require('gulp-postcss');
const _cssnano = require('cssnano');
const _rename = require('gulp-rename');
const _utils = require('./utils');

const _paths = {
  srcDir : 'src/scss/',
  distDir : 'dist/css/',
  srcFile : 'app.scss',
  distFile : 'app.css'
};

const _sassDevOptions = {
  outputStyle : 'expanded',
  precision : 10,
  sourceMap : true
};

const _sassDistOptions = {
  outputStyle : 'compressed',
  precision : 10,
  sourceMap : false
};

const _postcssDevProcessors = [
  _autoprefixer({browsers: ['ios >= 9']})
];

const _postcssDistProcessors = [
  _autoprefixer({browsers: ['ios >= 9']}),
  _cssnano()
];

const _compile = {
  dev : function () {
    return _gulp.src(`${_paths.srcDir}${_paths.srcFile}`)
      .pipe(_sourcemaps.init())
      .pipe(_sass(_sassDevOptions).on('error', _sass.logError))
      .pipe(_postcss(_postcssDevProcessors))
      .pipe(_rename(_paths.distFile))
      .pipe(_sourcemaps.write('.'))
      .pipe(_gulp.dest(_paths.distDir))
      .pipe(_utils.browserSync.stream({match: '**/*.css'}));
  },

  dist : function () {
    return _gulp.src(`${_paths.srcDir}${_paths.srcFile}`)
      .pipe(_sass(_sassDistOptions).on('error', _sass.logError))
      .pipe(_postcss(_postcssDistProcessors))
      .pipe(_rename(_paths.distFile))
      .pipe(_gulp.dest(_paths.distDir))
      .pipe(_utils.browserSync.stream({match: '**/*.css'}));
  }
};

const _tasks = {
  dev : 'css:dev',
  dist : 'css:dist'
};

_gulp.task(_tasks.dev, _compile.dev);
_gulp.task(_tasks.dist, _compile.dist);

module.exports = {
  tasks : _tasks,
  compile : _compile,
  paths : _paths
};

'use strict';

const _gulp = require('gulp');
const _utils = require('./utils');

const _paths = {
  srcDir : 'src/markup/',
  distDir : 'dist/',
  srcFile : 'index.html'
};

function copyMarkup () {
  return _gulp.src(`${_paths.srcDir}${_paths.srcFile}`)
    .pipe(_gulp.dest(`${_paths.distDir}`))
    .pipe(_utils.browserSync.stream());
}

const _compile = {
  dev : copyMarkup,
  dist : copyMarkup
};

const _tasks = {
  dev : 'markup:dev',
  dist : 'markup:dist'
};

_gulp.task(_tasks.dev, _compile.dev);
_gulp.task(_tasks.dist, _compile.dist);

module.exports = {
  tasks : _tasks,
  compile : _compile,
  paths : _paths
};

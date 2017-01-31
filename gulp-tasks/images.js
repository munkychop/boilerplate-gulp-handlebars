'use strict';

const _gulp = require('gulp');
const _utils = require('./utils');

const _paths = {
  srcDir : 'src/img/',
  distDir : 'dist/img/'
};

function copyImages () {
  return _gulp.src(`${_paths.srcDir}**/*.*`)
    .pipe(_gulp.dest(`${_paths.distDir}`))
    .pipe(_utils.browserSync.stream());
}

const _compile = {
  dev : copyImages,
  dist : copyImages
};

const _tasks = {
  dev : 'images:dev',
  dist : 'images:dist'
};

_gulp.task(_tasks.dev, _compile.dev);
_gulp.task(_tasks.dist, _compile.dist);

module.exports = {
  tasks : _tasks,
  compile : _compile,
  paths : _paths
};

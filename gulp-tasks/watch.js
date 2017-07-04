'use strict';

const _gulp = require('gulp');
const _css = require('./css');
const _js = require('./js');
const _markup = require('./markup');
const _utils = require('./utils');

function watchCss () {
  return _gulp.watch(`${_css.paths.srcDir}**/*.scss`, [_css.tasks.dev]);
}

function watchJs () {
  return _gulp.watch([`${_js.paths.srcDir}**/*.js`, `${_markup.paths.srcDir}**/*.hbs`], [_js.tasks.dev]);
}

function watchMarkup () {
  return _gulp.watch(`${_markup.paths.srcDir}**/*.html`, [_markup.tasks.dev]);
}

_gulp.task('watch', () => {
  _utils.browserSync.init({
    server: {
      baseDir: './dist'
    },
    notify: false
  });

  watchCss();
  watchJs();
  watchMarkup();
});

_gulp.task('watch:js', watchJs);
_gulp.task('watch:css', watchCss);
_gulp.task('watch:markup', watchMarkup);

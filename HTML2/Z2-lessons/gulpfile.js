'use strict'
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const clean = require('gulp-clean');
const cleanCSS = require('gulp-clean-css');


function startSass() {
  return gulp.src('./src/sass/**/*.scss')
  .pipe(sass())
  .pipe(cleanCSS())
  .pipe(gulp.dest('./dist/css'))
}
function watchSass() {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'))
}
function cloneHtml() {
  return gulp.src('./src/views/**/*.html')
  .pipe(gulp.dest('./dist'))
}
function cleanFile () {
  return gulp.src('dist', {read: false})
      .pipe(clean());
};

gulp.task('sass', startSass)
gulp.task('watch', watchSass)
gulp.task('clone', cloneHtml)
gulp.task('clean', cleanFile)
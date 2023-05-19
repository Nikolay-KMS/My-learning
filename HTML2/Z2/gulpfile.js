const gulp = require("gulp");
const clean = require("gulp-clean");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const paths = {
  styles: {
    src: './src/**/*.scss',
    dest: './dist'
    
  },
  js: {
    src: './src/**/*.js',
    dest: './dist'
  }  
}


function cleanAll() {
  return gulp.src('./dist/')
    .pipe(clean(), {read: false})
}
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass())
    // .pipe(autoprefixer({
    //   cascade: false
    // }))
    // .pipe(cleanCSS())
    .pipe(rename({
      basename: 'style',
      suffix:'.min'
    }))
    .pipe(gulp.dest(paths.styles.dest))
}
function js() {
  return gulp.src(paths.js.src)
    // .pipe(sass())
    // .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest))
}
function watch() {
  gulp.watch(paths.styles.src, styles)
}


gulp.task('styles', styles)
gulp.task('watch', watch)
gulp.task('default', gulp.series(styles, watch))


gulp.task('dev', gulp.series(cleanAll))
gulp.task('build', gulp.series(cleanAll, styles))

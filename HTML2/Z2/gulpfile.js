const gulp = require("gulp");
const clean = require("gulp-clean");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const concat = require ("gulp-concat");
const uglify = require('gulp-uglify');
// const imagemin = require("gulp-imagemin");
const browserSync = require('browser-sync').create();

const paths = {
  styles: {
    src: './src/**/*.scss',
    dest: './dist'    
  },
  scripts: {
    src: (['src/js/menu.js', './src/**/file1.js']),
    dest: './dist/js'
  },
  img: {
    src: './src/img/**/*',
    dest: './dist/img'
  },
  html: {
    src: './src/*.html',
    dest: './dist'
  },
}

function cleanAll() {
  return gulp.src('./dist/')
    .pipe(clean(), {read: false})
}
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'style',
      suffix:'.min'
    }))
    .pipe(gulp.dest(paths.styles.dest))
    // .pipe(reload({stream: true}));
};
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(concat("scripts.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browserSync.stream());
};
async function img() {
  const imagemin = await import('gulp-imagemin');
  const imagePlugins = [
    imagemin.gifsicle({interlaced: true}),
    imagemin.mozjpeg({quality: 75, progressive: true}),
    imagemin.optipng({optimizationLevel: 5}),
  ];
  return gulp.src(paths.img.src)
    .pipe(imagemin.default(imagePlugins))
    .pipe(gulp.dest(paths.img.dest));
}
function cloneHtml() {
  return gulp.src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
}
function watchAll() {
  gulp.watch(paths.styles.src, styles)
  gulp.watch(paths.scripts.src, scripts )
  gulp.watch(paths.html.src, cloneHtml )
};
function serverRun() { 
  browserSync.init({
      server: "./dist"
  })
  gulp.watch(paths.html.dest).on('change', browserSync.reload);
  gulp.watch(paths.styles.dest).on('change', browserSync.reload);
  gulp.watch(paths.scripts.dest).on('change', browserSync.reload);
};
gulp.task('build', gulp.series(cleanAll, gulp.parallel(styles, scripts, img, cloneHtml)))
gulp.task('dev', gulp.parallel (serverRun, watchAll))

// gulp.task('clean', cleanAll)
// gulp.task('create', gulp.parallel (cloneHtml, styles, scripts, img));
gulp.task('default', gulp.parallel (serverRun, watchAll));




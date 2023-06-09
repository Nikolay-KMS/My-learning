
'use strict'
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();

gulp.task('sass', function () {
    return gulp.src("./sass/**/*.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
});

gulp.task('server', function () {
    gulp.watch("./sass/**/*.scss", gulp.series(['sass'])).on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./js/**/*.js").on('change', browserSync.reload);

    browserSync.init({
        server: {
            routes: {
                "/products": "./products.html",
                "/product": "./single-product.html"
            },
            index: "products.html"
        }
    });
})

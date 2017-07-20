'use strict';
const gulp = require('gulp'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    cleanCSS = require('gulp-clean-css'),
    jsmin = require('gulp-jsmin'),
    ect = require('gulp-ect-simple');


gulp.task('default', ['generate-pages', 'compile-assets'], () => {
    gulp.watch('sass/**/*.scss', ['compile-assets']);
    gulp.watch('scripts/**/*.js', ['compile-assets']);
    gulp.watch('images/**/*.*', ['compile-assets']);
    gulp.watch('./**/*.ect', ['generate-pages']);
});

gulp.task('compile-assets', function() {
    gulp
        .src(['sass/**/*.scss'])
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('./docs/'));

    gulp
        .src(['scripts/**/*.js'])
        .pipe(concat('script.js'))
        .pipe(jsmin())
        .pipe(gulp.dest('./docs/'));
    gulp
        .src(['images/**/*'])
        .pipe(gulp.dest('./docs/images'));
});
gulp.task('generate-pages', function() {
    gulp.src('./index.ect')
        .pipe(ect({
            options: {
                root: './',
                ext: '.ect'
            },
        }))
        .pipe(gulp.dest('./docs/'));
});

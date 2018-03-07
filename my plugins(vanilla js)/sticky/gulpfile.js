'use strict';

const gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    atImport = require("postcss-import"),
    csso = require('postcss-csso'),
    precss = require('precss'),
    cssnext = require('postcss-cssnext'),
    short = require('postcss-short'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    uglify = require('gulp-uglify'),
    babelify = require('babelify'),
    browserify = require('gulp-browserify'),
    pug = require('gulp-pug');


gulp.task('css', function() {

    let processors = [
        precss,
        atImport,
        cssnext,
        short,
        csso
    ];

    return gulp.src('src/assets/main.css')
        .pipe(postcss(processors))
        .pipe(rename({
            extname: '.css',
            suffix: '.min'
        }))
        .pipe(gulp.dest('./dist/style/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function buildHTML() {
    return gulp.src('src/layout/*.pug')
        .pipe(pug({
            pretty: '\t'
        }))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});



gulp.task('js', function() {
    return gulp.src('src/js/main.js')
        .pipe(browserify({
            debug: true,
            transform: [babelify.configure({
                presets: ['es2015']
            })]
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('browser-sync', function() {

    browserSync({
        server: {
            baseDir: './dist'
        },
        notify: false
    });
});

gulp.task('watch', ['browser-sync'], function() {

    gulp.watch('src/**/*.css', ['css']);
    gulp.watch('src/**/*.pug', ['html']);
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('dist/*.html', browserSync.reload);
});
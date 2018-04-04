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
    pug = require('gulp-pug'),
    plumber = require('gulp-plumber'),
	sourcemaps = require('gulp-sourcemaps'),
	mixins = require('postcss-mixins');


gulp.task('css', function() {

    let processors = [
        precss,
        atImport,
        cssnext,
        short,
        csso,
		mixins
    ];

    return gulp.src('src/assets/main.css')
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(postcss(processors))
		.pipe(rename({
			extname: '.css',
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('./dist/style/maps'))
        .pipe(gulp.dest('./dist/style/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('html', function buildHTML() {
    return gulp.src('src/layout/*.pug')
        .pipe(plumber())
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
		.pipe(sourcemaps.init())
		.pipe(plumber())
		.pipe(browserify({
			debug: true,
			transform: [babelify.configure({
				presets: ['es2015']
			})]
		}))
		.pipe(uglify())
		.pipe(rename({
			extname: '.js',
			suffix: '.min'
		}))
		.pipe(sourcemaps.write('./dist/js/maps'))
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
    gulp.watch('src/**/*.css', [('css')]);
    gulp.watch('src/**/*.pug', [('html')]);
    gulp.watch('src/**/*.js', [('js')]);
    gulp.watch('dist/*.html', browserSync.reload);
});
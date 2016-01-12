'use strict';

var gulp = require('gulp');
var config = require('./gulp/config');
var clean = require('gulp-clean');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyhtml = require('gulp-minify-html');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var fileinclude = require('gulp-file-include');

var reload = browserSync.reload;


// Test run for gulp
gulp.task('clean', function() {

	return gulp.src(config.base, {read: false})
	.pipe(clean())

});


// Compress all images
gulp.task('images', function() {

	return gulp.src(config.images.src)
		.pipe(imagemin())
		.pipe(gulp.dest(config.base + config.images.folder));

});


// Compress and combine JS files
gulp.task('js', function() {

	return gulp.src(config.js.src)
	.pipe(uglify())
	.pipe(rename(config.js.destFile))
	.pipe(gulp.dest(config.base + config.js.folder))

});


// Compress HTML
gulp.task('html', function() {
	
	// Fileinclude
	return gulp.src(config.html.src)
	    .pipe(fileinclude({
	    	prefix: '@@',
	    	basepath: '@root'
	    }))
	    .pipe(gulp.dest(config.base));
	

	return gulp.src(config.html.src)
	.pipe(minifyhtml())
	.pipe(gulp.dest(config.base))

});


// Compress Css
gulp.task('sass', function() {

	return gulp.src(config.sass.src)
	.pipe(sass({outputStyle: 'compressed'}))
	.pipe(autoprefixer({

		browsers: ['> 1%', 'last 2 versions'],
		cascade: false

	}))
	.pipe(rename(config.sass.destFile))
	.pipe(gulp.dest(config.base + config.sass.folder))

});



// Static server
gulp.task('browser-sync', function() {
   
    browserSync.init({
        server: {
            baseDir: config.base
        }
    });

});




// Watch task
gulp.task('watch', function() {

	gulp.watch([config.html.watch], ['html', reload]);
	gulp.watch([config.sass.watch], ['sass', reload]);
	gulp.watch(config.js.watch, ['browserify', reload]);
	gulp.watch(config.images.watch, ['images', reload]);
	gulp.watch(config.misc.src, ['misc:copy', reload]);

});


// Usable Tasks
gulp.task('server', ['clean'], function() {

	return runSequence(
		['html', 'sass', 'images'],
		'js',
		'browser-sync',
		'watch'
	);

});


// start de server opnieuw op na een error (sluit nu af)



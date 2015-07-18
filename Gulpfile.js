var gulp = require("gulp");
var $ = require("gulp-load-plugins")();
var stylish = require('jshint-stylish');

var jsFileGlob = './src/**';

gulp.task('js:lint', function() {
  return gulp.src(jsFileGlob)
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('js:build', ['js:lint'], function() {
  return gulp.src(jsFileGlob)
    .pipe($.watch(jsFileGlob))
    .pipe($.babel())
    .pipe(gulp.dest('./dist.'));
});

gulp.task('default', ['js:build']);
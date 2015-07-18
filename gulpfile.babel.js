import gulp from 'gulp';
import stylish from 'jshint-stylish';
const $ = require("gulp-load-plugins")();
const glob = './src/**/*';

gulp.task('js:lint', function() {
  return gulp.src(glob)
    .pipe($.watch(glob))
    .pipe($.changed(glob))
    // .pipe($.jshint())
    // .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('js:build', function() {
  return gulp.src(glob)
    .pipe($.watch(glob))
    .pipe($.changed(glob))
    .pipe($.babel())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['js:build']);
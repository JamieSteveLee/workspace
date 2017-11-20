var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var gutil = require('gulp-util');

gulp.task('styles', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('.'))
});

gulp.task('scripts', function() {
  return gulp.src(['js/*.js'])
    .pipe(uglify().on('error', gutil.log))
    .pipe(concat('scripts.min.js'))
    .pipe(gulp.dest('.'));
});

gulp.task('watch',function() {
    gulp.watch('scss/**/*.scss',['styles']);
    gulp.watch('js/**/*.js',['scripts']);
});

gulp.task('default', ['watch', 'scripts', 'styles']);
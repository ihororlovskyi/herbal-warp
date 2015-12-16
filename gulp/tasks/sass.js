var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var config = require('../config').sass;

gulp.task('sass', function() {
  return gulp.src(config.src)
    .pipe(sass())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(minifyCss())
    .pipe(concat('main.css'))
    .pipe(gulp.dest(config.dest));
});

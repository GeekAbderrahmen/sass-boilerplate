// Load plugins
var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify');

// styles task (compile sass to css)
gulp.task('styles', function() {
  return sass('styles/style.scss', { style: 'expanded' })
    .pipe(gulp.dest('styles'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(cssnano())
    .pipe(gulp.dest('styles'))
    .pipe(notify({ message: 'Styles task complete' }));
});

// default task (watch styles then call styles)
gulp.task('default', ['styles'], function(){
    gulp.watch('styles/**/*.scss', ['styles']);
});

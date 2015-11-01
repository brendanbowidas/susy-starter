var gulp = require('gulp'),
 sass = require('gulp-sass'),
 sourcemaps = require('gulp-sourcemaps');
// styles task
gulp.task('styles', function() {
    gulp.src('./scss/**/*.scss')
    // Initializes sourcemaps
        .pipe(sourcemaps.init())
        .pipe(sass({
        errLogToConsole: true
    }))
    // Writes sourcemaps into the CSS file
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./css'));
});

gulp.task('default', ['styles'], function() {
    gulp.watch('./scss/**/*.scss', ['styles']);
});

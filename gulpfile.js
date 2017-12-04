const gulp = require('gulp');
const pug = require('gulp-pug');
const stylus = require('gulp-stylus');

gulp.task('pug', () => {
    gulp.src('src/**/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist/'));
});

gulp.task('stylus', () => {
    gulp.src('src/assets/css/**/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('dist/assets/css/'));
});

gulp.task('js', () => {
    gulp.src('src/assets/js/**/*.js')
        .pipe(gulp.dest('dist/assets/js/'));
});

gulp.task('watch', ['pug', 'stylus', 'js'], () => {
    gulp.watch('src/**/*.pug', ['pug']);
    gulp.watch('src/assets/**/*.styl', ['stylus']);
    gulp.watch('src/assets/**/*.js', ['js']);
});

gulp.task('default', ['watch']);
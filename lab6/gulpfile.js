const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');

const path = {
    scss: './sass/**/*.scss',
    folders: {
        css: './css'
    }
};

gulp.task('default', function() {
    watch(path.scss, function() {
        gulp.start('sass');
    });
});

gulp.task('sass', function() {
    return gulp.src(path.scss)
        .pipe(sass())
        .pipe(gulp.dest(path.folders.css));
});

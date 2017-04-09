const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');

const path = {
    scss: './sass/**/*.scss',
    css: './css/**/*.css',
    folders: {
        css: './css'
    }
};

gulp.task('default', function () {
    watch(path.scss, function () {
        gulp.start(['sass']);
    });
});

gulp.task('sass', function () {
    return gulp.src(path.scss)
        .pipe(sass())
        .pipe(gulp.dest(path.folders.css));
});

gulp.task('autoprefix', function () {
    return gulp.src(path.css)
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(gulp.dest(path.folders.css));
});

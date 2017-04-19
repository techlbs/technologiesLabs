const gulp = require('gulp');
const sass = require('gulp-sass');
const watch = require('gulp-watch');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');

const path = {
    scss: './sass/**/*.scss',
    css: './css/**/*.css',
    html: './**/*.html',
    folders: {
        css: './css'
    }
};

gulp.task('default', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    watch(path.html, function() {
        browserSync.reload();
    });
    watch(path.scss, function () {
        gulp.start(['sass']);
    });
});

gulp.task('sass', function () {
    return gulp.src(path.scss)
        .pipe(sass())
        .pipe(gulp.dest(path.folders.css))
        .pipe(browserSync.reload());

});

gulp.task('autoprefix', function () {
    return gulp.src(path.css)
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(gulp.dest(path.folders.css));
});

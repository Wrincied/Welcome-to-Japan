const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();


function js() {
    return gulp.src('src/js/index.js')
    .pipe(gulp.dest('./public/js'))
    .pipe(browserSync.stream());
}

function fonts() {
    return gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('./public/fonts'));
}

function img() {
    return gulp.src('src/img/*')
        .pipe(gulp.dest('./public/img'))
}

function styles() {
    return gulp.src('src/scss/main.scss')
        .pipe(sass())
        // .pipe(cssnano())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./public/css'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
           baseDir: "./public",
           index: "../index.html",
        }
    });
    fonts();
    styles();
    js();
    gulp.watch('src/js/**/*.js', js);
    gulp.watch('src/scss/**/*.scss', styles);
    gulp.watch(['src/img/**/*.png', 'src/img/**/*.jpg']);
    gulp.watch('index.html').on('change', browserSync.reload);
}

exports.watch = watch;
exports.fonts = fonts;
exports.js = js;
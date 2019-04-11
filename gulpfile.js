const { src, dest, series, watch } = require('gulp');
const replace = require('gulp-replace');
const sass = require('gulp-sass');
const clean = require('gulp-clean');

const php = require('gulp-connect-php');
const browserSync = require('browser-sync');

function replaceRoutes() {
    return src(['src/**/*', '!./src/scss/**/*'])
    .pipe(replace('#/','/'))
    .pipe(replace('include("\/','include("'))
    .pipe(dest('./dist/'))
    .pipe(browserSync.stream());
}

function replaceRoutesCss() {
    return src('./dist/css/**/*')
    .pipe(replace('#/','/'))
    .pipe(dest('./dist/css/'))
}

function compileSass() {
    return src('./src/scss/main.scss')
    .pipe(sass())
    .pipe(dest('./dist/css'))
    .pipe(browserSync.stream());
}

function cleanFolders() {
    return src('./dist/scss', {read: false})
    .pipe(clean())
}

function phpServer() {
    php.server({base:'./dist'}, function() {
        browserSync({
            proxy: '127.0.0.1:8000',
            baseDir: './dist',
            notify: false
        });
    });
}

function reload(cb) {
    browserSync.reload();
    cb();
  }

watch('src/**/*', series(replaceRoutes,compileSass, cleanFolders, replaceRoutesCss, reload));

exports.default = series(replaceRoutes,compileSass, cleanFolders, replaceRoutesCss, phpServer);
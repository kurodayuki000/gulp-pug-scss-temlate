const {src, dest, watch, series, parallel} = require('gulp');
const rename = require('gulp-rename');
const imageResize = require('gulp-image-resize');
const imagemin = require("gulp-imagemin");
const loadPlugins = require('gulp-load-plugins');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const pug = require( 'gulp-pug' );
const browserSync = require('browser-sync');
const server = browserSync.create();
const babel = require('gulp-babel');
const If = require('gulp-if');
const isProd = process.env.NODE_ENV === "production";

function icon() {
    return src('./**.png')
        .pipe(imageResize({
            width: 900,
            height: 900,
            crop: true,
            upscale: false
        }))
        .pipe(imagemin())
        .pipe(rename({
            prefix: 'hello-'
        }))
        .pipe(dest('./dist/assets/img'));
}

function styles() {
    return src('./src/assets/scss/*.scss')
    .pipe(If(!isProd, (sourcemaps.init)()))
    .pipe(sass())
    .pipe(postcss([
        autoprefixer()
    ]))
    .pipe(If(!isProd, (sourcemaps.write)('.')))
    .pipe(dest('./dist/assets/css'))
}

function markups() {
    return src('./src/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(dest( './dist/' ) );
}

function startAppserver() {
    server.init({
        server: {
            baseDir: './dist'
        }
    });
    watch('./src/assets/**/*.scss', styles);
    watch('./src/assets/**/*.scss').on('change', server.reload);
    watch('./src/**/*.pug', markups);
    watch('./src/**/*.pug').on('change', server.reload);
    watch('./src/assets/js/*.js', scripts);
    watch('./src/assets/js/*.js').on('change', server.reload);
}

function scripts() {
    return src('./src/assets/js/*.js')
        .pipe(If(!isProd, (sourcemaps.init)()))
        .pipe(babel())
        .pipe(If(!isProd, (sourcemaps.write)('.')))
        .pipe(dest('./dist/assets/js'))

}

const serve = series(parallel(markups, styles, series(scripts)), startAppserver);

exports.icon = icon;
exports.styles = styles;
exports.markups = markups;
exports.scripts = scripts;
exports.serve = serve;
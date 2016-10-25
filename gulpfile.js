'use strict';

const browserSync = require('browser-sync').create();
const bundleBuilder = require('gulp-bem-bundle-builder');
const bundlerFs = require('gulp-bem-bundler-fs');
const concat = require('gulp-concat');
const debug = require('gulp-debug');
const del = require('del');
const flatten = require('gulp-flatten');
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

const builder = bundleBuilder({
  levels: [
    'blocks',
    'design/blocks'
  ],
  techMap: {
    js: ['js'],
    css: ['scss', 'css'],
    image: ['jpg', 'png']
  }
});

gulp.task('blocks', function() {
  return bundlerFs('pages/*')
    .pipe(builder({
      css: bundle => bundle.src('css')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat(bundle.name + '.css'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/' + bundle.name)),

      js: bundle => bundle.src('js')
        .pipe(concat(bundle.name + '.js'))
        .pipe(gulp.dest('dist/' + bundle.name)),

      image: bundle => bundle.src('image')
        .pipe(flatten())
        .pipe(gulp.dest('dist/' + bundle.name + '/images'))
    }))
    .pipe(debug());
});


gulp.task('clean', function() {
  return del('dist/*');
});

gulp.task('html', function() {
  return gulp.src('pages/**/*.html')
    .pipe(flatten())
    .pipe(gulp.dest('dist'))
    .pipe(debug());
});

gulp.task('build', gulp.series(
  'clean',
  gulp.parallel('blocks', 'html')
));

gulp.task('watch', function() {
  gulp.watch('blocks/**/*.*', gulp.series('blocks'));
  gulp.watch('pages/**/*.html', gulp.series('html'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'dist',
    port: isDevelopment ? 3000 : 8080,
    notify: false,
    open: false,
    ui: false,
    logPrefix: "grove",
    tunnel: false,
  });

  browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));
gulp.task('prod', gulp.series('build', 'serve'));

gulp.task('default', gulp.series(isDevelopment ? 'dev' : 'prod'));

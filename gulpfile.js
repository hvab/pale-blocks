'use strict';

const browserSync = require('browser-sync').create();
const bundleBuilder = require('gulp-bem-bundle-builder');
const bundlerFs = require('gulp-bem-bundler-fs');
const concat = require('gulp-concat');
const csso = require('gulp-csso');
const debug = require('gulp-debug');
const del = require('del');
const flatten = require('gulp-flatten');
const gulp = require('gulp');
const gulpIf = require('gulp-if');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

const processors = [
  require('postcss-nested'),
  require('postcss-color-function'),
  require('autoprefixer')()
];

// Build dist
const layer1 = bundleBuilder({
  levels: [
    'blocks'
  ],
  techMap: {
    css: ['post.css', 'css']
  }
});

gulp.task('buildLayer1', function() {
  return bundlerFs('bundles/blocks')
    .pipe(layer1({
      css: bundle => bundle.src('css')
        .pipe(postcss(processors))
        .pipe(concat(bundle.name + '.css'))
        .pipe(gulp.dest('bundles/blocks'))
        .pipe(csso())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('bundles/blocks'))
    }))
    .pipe(debug());
});

const layer2 = bundleBuilder({
  levels: [
    'blocks',
    'design/blocks'
  ],
  techMap: {
    css: ['post.css', 'css']
  }
});

gulp.task('buildLayer2', function() {
  return bundlerFs('bundles/pale-blocks')
    .pipe(layer2({
      css: bundle => bundle.src('css')
        .pipe(postcss(processors))
        .pipe(concat(bundle.name + '.css'))
        .pipe(gulp.dest('bundles/pale-blocks'))
        .pipe(csso())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('bundles/pale-blocks'))
    }))
    .pipe(debug());
});

gulp.task('buildDist', gulp.parallel('buildLayer1', 'buildLayer2'));

// Development
const builder = bundleBuilder({
  levels: [
    'blocks',
    'design/blocks'
  ],
  techMap: {
    css: ['post.css', 'css']
  }
});

gulp.task('buildCss', function() {
  return bundlerFs('bundles/*')
    .pipe(builder({
      css: bundle => bundle.src('css')
        .pipe(gulpIf(isDevelopment, sourcemaps.init()))
        .pipe(postcss(processors))
        .pipe(concat(bundle.name + '.css'))
        .pipe(gulpIf(isDevelopment, sourcemaps.write('.')))
        .pipe(gulpIf(!isDevelopment, csso()))
        .pipe(gulp.dest('dist'))
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
  gulp.parallel('buildCss', 'html')
));

gulp.task('watch', function() {
  gulp.watch([
    'blocks/**/*.*',
    'design/**/*.*',
    'bundles/**/*.*'
  ], gulp.series('buildCss'));
  gulp.watch('pages/**/*.html', gulp.series('html'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'dist',
    port: isDevelopment ? 3000 : 8080,
    notify: false,
    open: false,
    ui: false,
    tunnel: false,
  });

  browserSync.watch('dist/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev', gulp.series('build', gulp.parallel('watch', 'serve')));
gulp.task('prod', gulp.series('build', 'serve'));

gulp.task('default', gulp.series(isDevelopment ? 'dev' : 'prod'));

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
const sourcemaps = require('gulp-sourcemaps');

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';

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
        .pipe(postcss([
          require('postcss-import')(),
          require('postcss-for'),
          require('postcss-simple-vars')(),
          require('postcss-calc')(),
          require('postcss-nested'),
          require('postcss-color-function'),
          require('autoprefixer')()
        ]))
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

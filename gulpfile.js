const { src, dest, watch, parallel, series } = require('gulp');
const scss    = require('gulp-sass');
const concat  = require('gulp-concat');
const browserSync  = require('browser-sync').create();
const uglify       = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const imagemin     = require('gulp-imagemin');
const del          = require('del');

function browsersync(){
  browserSync.init({
    server: {
      baseDir: 'src/'
    }
  });
}

function clean(){
  return del('dist')
}

function scripts(){
  return src([
    'src/js/form.js',
    'src/js/vanilla-tilt.min.js',
    'src/js/translate.js',
    'src/js/script.js',
  ])
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(dest('src/js'))
    .pipe(browserSync.stream())
}

function styles() {
  return src('src/scss/style.scss')
    .pipe(scss({outputStyle: 'compressed'}))
    .pipe(concat('style.min.css'))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 10 version'],
      grid: true
    }))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream())
}

function images(){
  return src('src/img/**/*')
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
          plugins: [
              {removeViewBox: true},
              {cleanupIDs: false}
          ]
      })]
    ))
    .pipe(dest('dist/img'))
}

function build(){
  return src([
    'src/css/style.min.css',
    'src/fonts/**/*',
    'src/js/script.min.js',
    'src/*.html'
  ], {base: 'src'})
  .pipe(dest('dist'))
}

function watching(){
  watch(['src/scss/**/*.scss'], styles);
  watch(['src/js/**/*.js', '!src/js/script.min.js'], scripts);
  watch(['src/*.html']).on('change', browserSync.reload);
  watch(['src/*.php']).on('change', browserSync.reload);
}

exports.scripts = scripts;
exports.styles = styles;
exports.watching = watching;
exports.browsersync = browsersync;
exports.clean = clean;
exports.images = images;

exports.build = series(clean, images, build);
exports.default = parallel(styles, scripts, browsersync, watching);
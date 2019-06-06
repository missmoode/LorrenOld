const {src, dest, parallel, series} = require('gulp')
const babel = require('gulp-babel')
const del = require('del')
const {existsSync} = require('fs')
const {exec} = require('child_process')

function clean(cb) {
  del('./build');

  setTimeout(cb, 1000);
}

function javascript(cb) {
  src('./app/**/*.js', {sourcemaps: true})
    .pipe(babel({
      plugins: ['react-require', 'transform-runtime', 'transform-async-to-generator'],
      presets: ['env', 'react', 'stage-2']
    }))
    .pipe(dest('build'), {sourcemaps: true})

  cb();
}

function assets(cb) {
  src('./app/**/*.!(js)')
    .pipe(dest('build'))

  cb();
}


exports.build = series(clean, parallel(javascript, assets))
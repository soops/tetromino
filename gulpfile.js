var gulp = require('gulp');
var wiredep = require('wiredep').stream;

// set up wiredep with index.html
gulp.task('wiredep', function() {
  gulp.src('blockrain.html')
    .pipe(wiredep({}))
    .pipe(gulp.dest(''));
  gulp.src('tetris.html')
    .pipe(wiredep({}))
    .pipe(gulp.dest(''));
})

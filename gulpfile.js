var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload
gulp.task('sass', function () {
  console.log("Compiling SASS...");
  return gulp.src('./app/styles/**/*.sass')
    .pipe(sass()).on('error', sass.logError)
    .pipe(gulp.dest('./app/styles/'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
  gulp.watch('./app/styles/**/*.sass', ['sass']);
  gulp.watch('./app/**/*.html', reload);
})

gulp.task('serve', function(){
  browserSync.init({
        server: "./app",
        notify: false, ui: false
    });
})

gulp.task('default', ['serve', 'sass', 'watch']);

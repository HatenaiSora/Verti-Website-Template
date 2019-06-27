var gulp = require("gulp");
var jshint = require("gulp-jshint");
var sourcemaps = require('gulp-sourcemaps');
var sass = require("gulp-sass");

gulp.task("parseJS",function(done){
    return gulp.src("js/*.js")
    .pipe(jshint())
    .pipe(jshint.reporter("default"))
});




gulp.task("watch", function() {
    gulp.watch("scss/**/*.scss", gulp.series("sass"));
  });


  gulp.task('sass', function() {
     return gulp.src('scss/main.scss')
           .pipe(sourcemaps.init())
           .pipe(sass({errLogToConsole: true}))
           .pipe(sass({
            outputStyle: 'expanded',
            sourceComments: 'map'
          }))
           .pipe(sourcemaps.write())
           .pipe(gulp.dest('css'))
  })
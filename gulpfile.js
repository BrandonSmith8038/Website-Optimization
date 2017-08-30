const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const cssMin = require('gulp-clean-css');
var htmlmin = require('gulp-htmlmin');
var sourcemaps = require('gulp-sourcemaps');


/*
-- Top Level Functions --
gulp.task - Define Task
gulp.src - Point to files to us
gulp.dest - Points to folder to output
gulp.watch - Watch files and folders for changes
        
*/

//Logs Message
gulp.task('message', function () {
    console.log("Gulp Is Running");
})

//Copy All HTML Files
gulp.task('htmlMin', function () {
    gulp.src('src/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('dist'));
});

//Optimize Images
gulp.task('imageMin', function () {
    gulp.src('src/img/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            verbose: true
        }))
        .pipe(gulp.dest('dist/img'))
    gulp.src('src/views/images/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            optimizationLevel: 5,
            verbose: true
        }))
        .pipe(gulp.dest('dist/views/images'))
});

//Minify Js
gulp.task('minifyJs', function () {
    gulp.src('src/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/js'))
    gulp.src('src/views/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/views/js'))
});

//Minify Css
gulp.task('minifyCss', function () {
    gulp.src('src/css/*.css')
        .pipe(cssMin(function (details) {
            console.log(details.name + ': Before ' + details.stats.originalSize);
            console.log(details.name + ': After ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('dist/css'))
    gulp.src('src/views/css/*.css')
        .pipe(cssMin(function (details) {
            console.log(details.name + ': Before ' + details.stats.originalSize);
            console.log(details.name + ': After ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('dist/views/css'))
});

gulp.task('default', ['message', 'htmlMin', 'imageMin', 'minifyJs', 'minifyCss']);

gulp.task('watch',function(){
    gulp.watch('src/js/*.js', ['minifyJs']);
    gulp.watch('src/views/js/*.js', ['minifyJs']);
    gulp.watch('src/css/*.css', ['minifyCss']);
    gulp.watch('src/views/css/*.css', ['minifyCss']);
    gulp.watch('src/*.html', ['htmlMin']);
    gulp.watch('src/img/*', ['imageMin']);
    gulp.watch('src/viewsimages/*', ['imageMin']);
});
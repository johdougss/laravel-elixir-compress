
var elixir = require('laravel-elixir');
var htmlmin = require('gulp-htmlmin');
var gulp = require('gulp');

elixir.extend('compress', function () {
    // to compress the HTML that gets generated by your Blade template files.
    new elixir.Task('compress', function () {
        var opts = {
            collapseWhitespace: true,
            removeAttributeQuotes: true,
            removeComments: true,
            minifyJS: true
        };
        return gulp.src('./storage/framework/views/**/*')
            .pipe(htmlmin(opts))
            .pipe(gulp.dest('./storage/framework/views/'))
            .pipe(new elixir.Notification('Compress Complete!'));
    })

});




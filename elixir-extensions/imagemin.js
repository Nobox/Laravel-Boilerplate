var gulp     = require('gulp'),
    changed  = require('gulp-changed'),
    imagemin = require('gulp-imagemin')
;

var Elixir = require('laravel-elixir'),
    $      = Elixir.Plugins,
    config = Elixir.config
;

Elixir.extend('imagemin', function(src, output, options) {
    config.imagemin = {
        folder: 'img',
        outputFolder: 'img',
        pluginOptions: {
            progressive: true
        }
    };

    new Elixir.Task('imagemin', function() {
        var paths = new Elixir.GulpPaths()
            .src(src || config.get('assets.imagemin.folder'))
            .output(output || config.get('public.imagemin.outputFolder'));

        // Fancy paths log
        this.log(paths.src.path, paths.output.path);

        // Error handler
        var errorHandler = function(e) {
            new Elixir.Notification().error(e, 'ImageMin failed!');
            this.emit('end');
        };

        return gulp.src(paths.src.path)
            .pipe(changed(paths.output.path))
            .pipe(imagemin(options || config.imagemin.pluginOptions))
            .on('error', errorHandler)
            .pipe(gulp.dest(paths.output.path))
    })
    .watch(config.get('assets.imagemin.folder') + '/**/*')
});

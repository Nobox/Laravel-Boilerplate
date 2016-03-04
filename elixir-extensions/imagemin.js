const gulp = require('gulp');
const changed = require('gulp-changed');
const imagemin = require('gulp-imagemin');

const Elixir = require('laravel-elixir');
const config = Elixir.config;

/*
 |----------------------------------------------------------------
 | ImageMin
 |----------------------------------------------------------------
 |
 | This task passes all project images through imagemin optimizer.
 |
 | @see https://github.com/sindresorhus/gulp-imagemin
 */

Elixir.extend('imagemin', (src, output, options) => {
  config.imagemin = {
    folder: 'img',
    outputFolder: 'img',
    pluginOptions: {
      progressive: true,
    },
  };

  new Elixir.Task('imagemin', function imageminTask() {
    const paths = new Elixir.GulpPaths()
      .src(src || config.get('assets.imagemin.folder'))
      .output(output || config.get('public.imagemin.outputFolder'));

    // Fancy paths log
    this.log(paths.src.path, paths.output.path);

    // Error handler
    const errorHandler = function errorHandler(e) {
      new Elixir.Notification().error(e, 'ImageMin failed!');
      this.emit('end');
    };

    return gulp.src(paths.src.path)
      .pipe(changed(paths.output.path))
      .pipe(imagemin(options || config.imagemin.pluginOptions))
      .on('error', errorHandler)
      .pipe(gulp.dest(paths.output.path));
  })
  .watch(`${config.get('assets.imagemin.folder')}/**/*`);
});

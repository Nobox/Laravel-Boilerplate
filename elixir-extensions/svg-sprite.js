const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

const Elixir = require('laravel-elixir');
const config = Elixir.config;

/*
 |----------------------------------------------------------------
 | SVG Sprite
 |----------------------------------------------------------------
 |
 | This task passes individual SVG files
 | through svg-sprite.
 |
 | @see https://github.com/jkphl/svg-sprite
 */

Elixir.extend('svgSprite', (src, output, options) => {
  config.svgSprite = {
    folder: 'svg',
    outputFolder: 'svg',
    pluginOptions: {
      mode: {
        symbol: {
          dest: '.',
          sprite: 'sprite.svg',
        },
      },
    },
  };

  new Elixir.Task('svgSprite', function svgSpriteTask() {
    const paths = new Elixir.GulpPaths()
      .src('**/*.svg', src || config.get('assets.svgSprite.folder'))
      .output(output || config.get('public.svgSprite.outputFolder'));

    // Fancy paths log
    this.log(paths.src, paths.output);

    // Error handler
    const errorHandler = function errorHandler(e) {
      new Elixir.Notification().error(e, 'SVG Sprite failed!');
      this.emit('end');
    };

    return gulp.src(paths.src.path)
      .pipe(svgSprite(options || config.svgSprite.pluginOptions))
      .on('error', errorHandler)
      .pipe(gulp.dest(paths.output.path))
      .pipe(new Elixir.Notification('SVG sprites generated'));
  })
  .watch(`${config.get('assets.svgSprite.folder')}/**/*.svg`);
});

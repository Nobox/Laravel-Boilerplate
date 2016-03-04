const gulp = require('gulp');
const spritesmith = require('gulp.spritesmith');

const Elixir = require('laravel-elixir');
const config = Elixir.config;

/*
 |----------------------------------------------------------------
 | Spritesmith
 |----------------------------------------------------------------
 |
 | Create sprite image and stylesheet with spritesmith.
 |
 | @see https://github.com/otouto/gulp-spritesmith
 */

Elixir.extend('spritesmith', (src, output, options) => {
  config.spritesmith = {
    folder: 'img/sprite',
    outputFolder: 'img',
    pluginOptions: {
      cssName: '_tools.sprite.scss',
      imgName: 'sprite.png',
      retinaImgName: 'sprite@2x.png',
      retinaSrcFilter: ['*@2x.png'],
    },
  };

  new Elixir.Task('spritesmith', function spritesmithTask() {
    const paths = new Elixir.GulpPaths()
      .src(src || '*.png', config.get('assets.spritesmith.folder'))
      .output(output || config.get('public.spritesmith.outputFolder'));

    // Fancy log
    this.log(paths.src.path, paths.output.baseDir);

    // Prepend spritesmith folder to retina filter glob
    const retinaSrcFilter = config.spritesmith.pluginOptions.retinaSrcFilter.toString();
    config.spritesmith.pluginOptions.retinaSrcFilter = [
      `${config.get('assets.spritesmith.folder')}/${retinaSrcFilter}`,
    ];

    // Start stream
    const spriteData = gulp.src(paths.src.path)
      .pipe(spritesmith(options || config.spritesmith.pluginOptions));

    // Output sprite images
    spriteData.img
        .pipe(gulp.dest(paths.output.baseDir));

    // Output sprite stylesheet
    spriteData.css
        .pipe(gulp.dest(config.get('assets.css.sass.folder')));

    // Return stream for sequential order in Elixir mix
    return spriteData;
  })
  .watch(`${config.get('assets.spritesmith.folder')}/*.png`);
});

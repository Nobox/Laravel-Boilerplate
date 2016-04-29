'use strict';

const elixir = require('laravel-elixir');
const config = elixir.config;
require('laravel-elixir-modernizr');
require('./elixir-extensions/imagemin');
require('./elixir-extensions/svg-sprite');
require('./elixir-extensions/spritesmith');

// Set SASS options
config.css.sass.pluginOptions = {
  includePaths: [
    './node_modules',
    `${config.publicPath}/bower_components`,
  ],
  outputStyle: 'expanded',
};

// Add IE9 support to autoprefixer options.
config.css.autoprefix.options = {
  browsers: ['ie >= 9', 'last 2 versions'],
  cascade: false,
};

// Enable watchify polling for our NFS-mounted VMs.
config.js.browserify.watchify.options.poll = true;

// Mix it
elixir((mix) => {
  mix
    // Optimize project images
    .imagemin()

    // Create optimized SVG spritesheet
    .svgSprite()

    // Create optimized SVG spritesheet
    .spritesmith()

    // Compile main SASS stylesheet
    .sass('styles.scss')

    // Pass JS code through Browserify and create bundle
    .browserify('entry.js', `${config.get('public.js.outputFolder')}/bundle.js`)

    // Custom modernizr build
    .modernizr(null, null, {
      excludeTests: ['hidden'],
      options: ['setClasses'],
    })

    // Cache-busting like a boss
    .version([
      'js/bundle.js',
      'css/styles.css',
      'svg/sprite.svg',
      'js/vendor/modernizr-custom.js',
    ])
  ;
});

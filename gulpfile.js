var elixir = require('laravel-elixir');
require('laravel-elixir-modernizr');
require('./elixir-extensions/imagemin');
require('./elixir-extensions/svg-sprite');
require('./elixir-extensions/spritesmith');

// Set SASS options
config.css.sass.pluginOptions = {
    includePaths: [
        './node_modules',
        config.publicPath + '/bower_components'
    ],
};

// Add IE9 support to autoprefixer options.
config.css.autoprefix.options = {
    browsers: ['ie >= 9', 'last 2 versions'],
    cascade: false
};

// Mix it
elixir(function(mix) {
    mix
        // Compile main SASS stylesheet
        .sass('styles.scss')

        // Optimize project images
        .imagemin()

        // Create optimized SVG spritesheet
        .svgSprite()

        // Create optimized SVG spritesheet
        .spritesmith()

        // Custom modernizr build
        .modernizr(null, null, {
            excludeTests: ['hidden'],
            options: ['setClasses']
        })

        // Cache-busting like a boss
        .version([
            'css/styles.css',
            'svg/sprite.svg',
            'js/vendor/modernizr-custom.js'
        ])
});

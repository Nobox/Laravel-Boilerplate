var elixir = require('laravel-elixir');
require('./elixir-extensions/imagemin');

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

        // Cache-busting like a boss
        .version([
            'css/styles.css',
        ])
});

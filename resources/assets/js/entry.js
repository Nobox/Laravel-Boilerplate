import $ from 'jquery';
import loadJS from 'fg-loadjs';
import Modernizr from 'modernizr';
import attachFastClick from 'fastclick';
import svg4everybody from 'svg4everybody';
import initSite from './site';

// Disable touch events 300ms delay
attachFastClick(document.body);

// Enable external content for SVGs
svg4everybody();

// HTML5 input placeholder polyfill
if (! Modernizr.placeholder) {
  loadJS('/bower_components/jquery-placeholder/jquery.placeholder.min.js', () => {
    $('input, textarea').placeholder();
  });
}

// HTML5 <picture> and srcset polyfill
// and download LazySizes
if (! Modernizr.srcset || ! Modernizr.picture) {
  loadJS('/bower_components/picturefill/dist/picturefill.min.js', () => {
    loadJS('/bower_components/lazysizes/lazysizes.min.js');
  });
} else {
  loadJS('/bower_components/lazysizes/lazysizes.min.js');
}

// Start site
initSite();

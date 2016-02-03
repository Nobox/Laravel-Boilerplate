import analyticsHelpers from './lib/analytics-helpers';

/**
 * Import view modules
 */
import initIndex from './views/index';

/**
 * Associate view modules with their
 * respective named routes
 * @type {Object}
 */
var routes = {
    'index': initIndex,
};

/**
 * Initialize site-wide logic
 * @return {undefined}
 */
function initSite() {
    var currentRoute = $('body').data('route');

    // Initialize view module using current route
    if (routes[currentRoute]) {
        var view = routes[currentRoute];
        view();
    }

    // Bind analytic helper events
    analyticsHelpers();
}

export default initSite;

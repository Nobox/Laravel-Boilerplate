import $ from 'jquery';
import analyticsHelpers from './lib/analytics-helpers';

/**
 * Import view modules
 */
import initIndex from './views/index';

/**
 * Associate view modules with their
 * respective Laravel named routes
 * @type {Object}
 */
const routes = {
  index: initIndex,
};

/**
 * Initialize site-wide logic
 * @return {undefined}
 */
function initSite() {
  const currentRoute = $('body').data('route');

  // Initialize view module using current route
  if (routes[currentRoute]) {
    const view = routes[currentRoute];
    view();
  }

  // Bind analytic helper events
  analyticsHelpers();
}

export default initSite;

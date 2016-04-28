import $ from 'jquery';

/**
 * Send event to Google
 * @param {String} category Event category
 * @param {String} action   Event action
 * @param {String} label    Event label
 * @param {String} value    Event value
 * @return {undefined}
 */
function gaEvent(category, action, label, value = null) {
  if (category !== null && label !== null) {
    window.ga('send', 'event', category, action, label, value);
  } else {
    console.warn(`Category and label are required for GA event bound on: ${this}`);
  }
}

/**
 * Helper to get and use DOM data for ga call
 * @param  {String} type Type of event action, click or hover
 * @return {undefined}
 */
function gaHelper(e) {
  const $this = $(this);
  const category = $this.data('ga-category');
  const action = $this.data('ga-action');
  const label = $this.data('ga-label');
  const value = $this.data('ga-value');

  gaEvent(category, action || e.type, label, value);
}

/**
 * Bind analytics helper events. Use event
 * namespace and delegated to document.
 * @return {undefined}
 */
function analyticsHelpers() {
  const $document = $(document);

  // Click helper
  $document.on('click.analytics', '.js-ga-event', gaHelper);

  // Hover helper
  $document.on('mouseover.analytics', '.js-ga-hover-event', gaHelper);
}

// Export
export default analyticsHelpers;

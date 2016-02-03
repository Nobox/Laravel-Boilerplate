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

    if (category != null && label != null) {
        ga('send', 'event', category, action, label, value);
    } else {
        console.warn('Category and label are required for GA event bound on: ' + this);
    }

}

/**
 * Bind analytics helper events. Use event
 * namespace and delegated to document.
 * @return {undefined}
 */
function analyticsHelpers() {
    var $document = $(document);

    // Click helper
    $document.on('click.analytics', '.js-ga-event', function (e) {
        var $this = $(this),
            category = $this.data('ga-category'),
            action = $this.data('ga-action'),
            label = $this.data('ga-label'),
            value = $this.data('ga-value')
        ;

        gaEvent(category, action || 'click', label, value);
    });

    // Hover helper
    $document.on('mouseover.analytics', '.js-ga-hover-event', function (e) {
        var $this = $(this),
            category = $this.data('ga-category'),
            action = $this.data('ga-action'),
            label = $this.data('ga-label'),
            value = $this.data('ga-value')
        ;

        gaEvent('send', 'event', category, action || 'hover', label, value);
    });
}

// Export
export default analyticsHelpers;

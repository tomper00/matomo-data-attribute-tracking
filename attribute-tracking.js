// Data-attribute tracking by
// Tomas Persson - Digitalist.se 
// This script will send events directly to Matomo (will not use TagManager)
/**
Usage:
Add this script to any page where you have the Matomo script running.

The script will catch clicks on elements with the data attribute data-event-category or data-event-include

**/

//Get Matomo 
var _paq = window._paq = window._paq || [];

// Send data to Matomo function
function sendEventData(elem) {
    let action = "";
    if(elem.getAttribute('data-event-action') != null)
        action = elem.getAttribute('data-event-action');
    let name = "";
    if(elem.getAttribute('data-event-name') != null)
        name = elem.getAttribute('data-event-name');     
    let value = 0;
    if(elem.getAttribute('data-event-value') != null)
        value = elem.getAttribute('data-event-value');     
    _paq.push(['trackEvent', 
                elem.getAttribute('data-event-category'), 
                action, 
                name, 
                value]);
}
// Javascript polyfill for the function .closest for IE9+
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype['msMatchesSelector'] || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;

        do {
            if (el.matches(s)) {
                return el;
            }
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}    
// END - Javascript polyfill for the function .closest for IE9+

// Detect clicks on elements with data attribute data-event-category or data-event-include
document.documentElement.addEventListener('click', function(event) {
    if (event.target.getAttribute('data-event-category') != null) {
        sendEventData(event.target);
    } else if (event.target.getAttribute('data-event-include') != null) {
        sendEventData(event.target.closest('[data-event-category]'));
    }
}, true);

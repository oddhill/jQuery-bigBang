/**
 * jQuery bigBang plugin.
 *
 * This is a small plugin, that will make an entire container link to the href
 * of a containing link.
 *
 * The project and it's documentation is available at
 * https://github.com/oddhill/bigBang
 *
 * Version 1.2.
 *
 * Development is sponsored by Odd Hill, www.oddhill.se.
 */

(function($) {

  $.fn.bigBang = function(options) {
  
    // Merge the default options with the ones provided.
    var settings = $.extend({
      selector: ".wrapper",
      hoverClass: false,
      cursor: "pointer",
      blankTarget: "auto",
      ignore: "a"
    }, options);

    return this.each(function() {
    
      // Save the href of the anchor.
      var href = $(this).attr("href");
      
      // Check to see if the anchor should be opened in a new window.
      var blankTarget = settings.blankTarget == "auto" ? $(this).attr("rel") == "_blank" : settings.blankTarget;

      // Get the elements to ignore.
      var ignore = settings.ignore ? settings.ignore.split(",") : false;

      // Find the wrapper that we're looking for, using the specified selector
      // from the settings.
      var wrapper = $(this).closest(settings.selector);
      
      if (!wrapper.length) {
        // If we couldn't find a wrapper, bail out early.
        return;
      }

      // Add the click event to the wrapper.
      wrapper.click(function(event) {
        // If the triggering element or one of it's parents inside the wrapper
        // matches the ones we should be ignoring, don't do anything.
        if (ignore && ($.inArray(event.target.tagName.toLowerCase(), ignore) != -1 || $(event.target).parentsUntil(settings.selector, ignore.join(",")).length > 0)) {
          return;
        }

        if (blankTarget) {
          // Open the href in a new window.
          window.open(href);
        }
        else {
          // Simply go to the href.
          window.location = href;
        }
      });
      
      // Add the specified class on hover.
      if (settings.hoverClass) {
        wrapper.hover(function() {
          $(this).addClass(settings.hoverClass);
        }, function() {
          $(this).removeClass(settings.hoverClass);
        });
      }
      
      // Set the specified cursor.
      if (settings.cursor) {
        wrapper.css("cursor", settings.cursor);
      }
      
    });
  
  };
  
})(jQuery);

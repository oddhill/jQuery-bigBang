/**
 * jQuery bigBang plugin.
 *
 * This is a small plugin, that will make an entire container link to the href
 * of a containing link.
 *
 * The project and it's documentation is available at
 * https://github.com/oddhill/bigBang
 *
 * Version 1.0.
 *
 * Development is sponsored by Odd Hill, www.oddhill.se.
 */

(function($) {

  $.fn.bigBang = function(selector) {
  
    return this.each(function() {
    
      // Save the href of the anchor.
      var href = $(this).attr("href");
      
      // Check to see if the anchor should be opened in a new window.
      var blankTarget = $(this).attr("rel") == "_blank";

      // Get the closest parent matching the specified selector. Add the click
      // event, and set the cursor to a pointer.
      $(this).closest(selector).click(function(event) {
        if (event.target.nodeName != "A") {
        
          // If the element that triggered the click isn't an anchor, go to the
          // href of the original anchor.
          if (blankTarget) {
            // Open the href in a new window.
            window.open(href);
          }
          else {
            // Simply go to the href.
            window.location = href;
          }
          
        }
      }).css("cursor", "pointer");
      
    });
  
  };
  
})(jQuery);

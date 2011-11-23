bigBang 1.1
===========
A tiny jQuery plugin that makes an entire container link to the url of a containing link.

Usage
-----

Consider the following simple markup:

``` html
<div class="news-wrapper">
  <h2>The best news ever!</h2>
  <p>Lorem ipsum…</p>
  <a class="read-more" href="/news/best-news-ever">Read more…</a>
</div>
```

By calling

``` js
$('a.read-more').bigBang({
  selector: ".news-wrapper"
});
```

you will make the entire news-wrapper link to /news/best-news-ever.

Options
-------

bigBang is customizable using an options object as the only parameter.

* __selector__ _String, default: ".wrapper"_. The selector for the container that you'd like to turn into a link.
* __hoverClass__ _String or boolean, default: false_. A class that should be added to the container when the user is hovering it. Use false to disable.
* __cursor__ _String or boolean, default "pointer"_. The pointer that should be used for the container. Use false to disable.
* __blankTarget__ _String or boolean, default "auto"_. Used to force the target of the link. use true to always open in a new window, false to always open in the same target, or "auto" to determine the target using the original link.
* __ignore__ _String, default "a"_. A comma separated list of elements that shouldn't trigger the click event.

Example
-------

``` js
$('a.read-more').bigBang({
  selector: ".news-wrapper",  // Will make .news-wrapper link to the href.
  hoverClass: "hover",        // Add hover class when hovering.
  cursor: "pointer",          // Use the pointer when hovering.
  blankTarget: "auto",        // Determine the target automatically.
  ignore: "a,img",            // Dont trigger the click event if the user clicks any links or images.
});
```

Future
-----

I don't really have any idea what to do next. If you have any improvements, feel free to fork away, contact me or start an issue. I'll be more than happy to develop further.
     
     
     
- - - - - - - - - - - - - - - - -
     
     

Development is sponsored by [Odd Hill](www.oddhill.se)

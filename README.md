Usage
-----

Consider the following simple markup:
`<div class="news-wrapper">
    <h2>The best news ever!</h2>
    <p>Lorem ipsum…</p>
    <a class="read-more" href="/news/best-news-ever">Read more…</a>
  </div>`

By calling
`$('a.read-more').bigBang('.news-wrapper');`
you will make the entire news-wrapper link to /news/best-news-ever.

Options
-------
Well, there are no options at this point. The plugin takes one, and only one parameter, which will be a selector to the wrapper that you which to make linkable.

Notes
-----
* The plugin won't override any other links in the container.
* The user will be taken to a new window if the link has the target set to _blank.
     
     
     
- - - - - - - - - - - - - - - - -
     
     

Development is sponsored by [Odd Hill](www.oddhill.se)

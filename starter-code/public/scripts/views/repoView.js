'use strict';

(function(module) {
  const repoView = {};

  // REVIEW: Private methods declared here live only within the scope of the wrapping IIFE.
  const ui = function() {
    let $about = $('#about'); // Best practice: Cache the DOM query if it's used more than once.

    $about.find('ul').empty();
    $about.show().siblings().hide();
  };

  // DONE: Remember that new Handlebars template? Let's compile it!
  // Save the result in this `render` variable.

  var render = Handlebars.compile($("#repo-template").html());

  repoView.index = function() {
    ui();

    // The jQuery `append` method lets us append an entire array of HTML elements at once:
    $('#about ul').append(
      repos.with('has_pages').map(render) // Want to filter by a different property other than name?
    );
  };

  module.repoView = repoView;
})(window);

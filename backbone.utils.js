/**
 * backbone.utils.js v1.0.0
 * Copyright 2012 Darío Cravero (dario@uxtemple.com | @dariocravero)
 * This library may be freely distributed under the MIT license.
 */

/**
 * Helper to scroll the window to a particular element
 *
 * @param el jQuery selector defaults to this.el 
 * @param options Object
 *  {margin: 20, // pixels to position the user above the element
 *  speed: 2000} // how fast the animation goes
 */
Backbone.View.prototype.scrollTo = function(el, options) {
  var current_top = $(document).scrollTop(), window_height = $(window).height(),
    body = $('body, html'), scroll_to;

  options = _.defaults(options || {}, {margin: 20, speed: 2000});
  el = el ? $(el) : this.$el;
  
  // Calculate the scroll point and go there.
  scroll_to = el.offset().top - options.margin;
  body.animate({scrollTop: scroll_to}, options.speed, function() {
    body.off('mousewheel');
  });
  // Just in case the user changes his/her mind and starts scrolling
  // with the mouse wheel, we'll just stop the animation and let them be.
  body.on('mousewheel', function(ev) {
    body.stop().off('mousewheel');  
  });
  return this;
};

/**
 * Allow going to the previous or next model in a collection.
 */
Backbone.Model.prototype.previous = function() {
  return this.collection ? this.collection.previous(this) : undefined;
};
Backbone.Model.prototype.next = function() {
  return this.collection ? this.collection.next(this) : undefined;
};
Backbone.Collection.prototype.previous = function(model) {
  var index = this.indexOf(model);
  return (index === 0) ? this.last() : this.at(index-1);
};
Backbone.Collection.prototype.next = function(model) {
  var index = this.indexOf(model);
  return (index === this.length-1) ? this.first() : this.at(index+1);
};

/**
 * Gets a random model in a collection.
 */
Backbone.Collection.prototype.random = function() {
  return this.at(_.random(0, this.length - 1));
};

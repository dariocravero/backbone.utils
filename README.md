backbone.utils
==============
v1.0.0

**A bunch of extensions I found useful when doing stuff in Backbone.**

Supports [Bower](http://twitter.github.com/bower).

## Scroll to an element in a view

Usage (in a view):

    // Scroll to .myElement in 2000 ms and stop 20 pixels before.
    this.scrollTo($('.myElement'), {margin: 20, speed: 2000)});

## Traverse a collection's models (next/previous)

Usage (in a model):

    // Get the next model (if any)
    this.next();
    
    // Get the previous model (if any)
    this.previous();
  
Usage (in a collection):

    // Get the next model after anotherModel (if any)
    this.next(anotherModel);
  
    // Get the previous model after anotherModel (if any)
    this.previous(anotherModel);

## Get a model randmoly 

Usage (in a collection):

    this.random();

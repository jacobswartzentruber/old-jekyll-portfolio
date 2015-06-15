---
layout: article
title: "The Many Facets of Javascript"
modified:
categories: 
excerpt:
tags: []
image:
  feature:
  teaser: javascript-teaser.jpg
  thumb:
date: 2015-06-14T13:16:15-05:00
---

As I am learning more and becoming more comfortable with the languages necessary for web application development, I have started browsing job opportunities and compiling what skills they are looking for.  One requirement that consistently comes up is proficiency with a Javascript framework, whether referencing Ember, Backbone or AngularJS.  Up until a few weeks ago I was familiar with the basics of Javascript but not much more.  If the majority of jobs are looking for proficiency in a Javascript framework, I decided it was worth a few weeks to hunker down and work exclusively with client-side functionality.  In my study of client-side languages, libraries and frameworks I have become familiar with Javascript, jQuery and AngularJS.  While sounding vaguely similiar at first glance, each of these resources provides different levels of interactivity and options for your application.

###Difference between Javascript, jQuery and Angular JS###
So what makes Javascript, jQuery and AngularJS different?  If they all provide client-side interactivity, why do we need different iterations on the same language?  This is what I thought when I first discovered there were numerous options, but it turns out each option satisfies unique constraints and lends itself to specific applications.  The answer lies in differentiating between languages, libraries and frameworks.  Javascript is the basic client-side language from which other iterations are built off of.  jQuery is a Javascript library containing popular Javascript methods and event handlers, eliminating the need to custom write these methods for every application.  AngularJS is a Javascript framework providing client-side MVC architecture, specifically for single-page applications.  Lets take a moment to address each of these resources and understand how they fit together.

###Javascript###
Javascript is the language each of these resources are built upon and represents the underlying logic for client-side interactivity.  As with other OOP languages, Javascript provides the developer with access to primitive data types, control flow and the ability to create instantiated objects.  Since Javascript's primary purpose is to interact with web pages, it uses selectors to manipulate and control elements in the DOM through functions passed in as scripts.  Javascript selectors are much like CSS selectors in that the developer can select elements by HTML tags, classes and ids.  With these selectors, Javascript can change practically anything on a webpage whether repositioning elements, creating sliding carousels or directly manipulating HTML tags and content.

###jQuery###
jQuery is a Javascript library that provides access to popular Javascript methods and event handling to make client-side scripting easier.  Everything that is contained in jQuery is possible to construct in Javascript.  It's as if Javascript were the Lego building blocks and jQuery were completed Lego cars and spaceships.  Yes, you could build those cars and spaceships from the blocks you have available, but wouldn't you much rather get straight to playing with the completed vehicles?  There are a number of components jQuery provides, which I think I touched on in a previous blog post.

First, jQuery allows the manipulation of DOM elements, particularly in relation to animation.  To hide an element on a webpage it is simply a matter of calling .hide() on the selected element.  Second, jQuery provides event handling in the form of mouse and keyboard input.  By assigning an "on-click" event handler to a div element, a specified action will happen every time that element is clicked.  Finally, jQuery allows for the development of Ajax enabled applications.  I have provided a few examples of jQuery methods below.  As you can see, these methods are much simpler to implement than writing out extensive original Javascript methods.

{%highlight javascript%}
//Selecting all elements with the "active" class and hiding them
$('.active').hide();

//When a div is clicked, toggle the class 'red' on and off
$('div').click(function(){
  $(this).toggleClass('.red');
});

//Assigning a mouseover event handler to elements with the "boss" id
//When event handler is triggered, apply slow fade out animation to all elements with the "employee" class
$('#boss').mouseover(function({
  $('.employee').fadeOut('slow');
});
{%endhighlight%}

###Angular JS###
While I have a solid grasp of Javascript and jQuery at this point in time, Angular is the one resource I feel will take awhile to fully master.  Angular JS is a Javascript framework that provides client side MVC architecture.  This architecture emphasizes storing application logic within Angular's components over standard DOM manipulation.  Angular is comprised of "directives" which when included in the HTML file, trigger specific Angular methods to run.  The simplest Angular app is comprised of three directives: an "app" indicating the start of the application, a "model" which maps Angular variables to HTML input fields, and a "bind" directive which displays those variables as HTML elements.  The developer can increase the complexity of the application by including a controller to evaluate HTML expressions or a service which can gather data, like JSON files, from other sources outside the application.

I am intrigued by the opportunities Angular presents for web application development and will be exploring it further in the future.  I am still a little unsure how it could be integrated with Ruby on Rails since they are both frameworks for storing data.  I want to experiment with using Angular to access Rails models for data storage.  If I could figure out how to sync both programs to access the same database, it could be a powerful tool.  Then again, perhaps they should only be used independently and I am traveling down the wrong path?  Well, that's what experiments and prototypes are for right?  We will see what results I can piece together over the next few weeks.

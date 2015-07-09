---
layout: article
title: "Coin Collector: Architecture"
modified:
categories: 
excerpt:
tags: []
image:
  feature: coin-collector-feature.jpg
  teaser: coin-collector-teaser.jpg
  thumb:
date: 2015-07-03T09:41:49-05:00
---

After testing the Javascript waters with my Tic-Tac-Toe game, I decided to tackle a more complex project by programming a Javascript sidescrolling platformer.  The aim of the project was to learn more about the different features of Javascript and see if I could develop a clean piece of code as project complexity rises.  While the Tic-Tac-Toe game merely had a few div tags demarcating the clickable cells, I wanted this new project to contain images and animations.  Additionally, I wanted this new platformer to procedurally generate terrain on the fly and contain a basic physics simulation.  All of these features are quite a bit more sophisticated than the rudimentary Tic-Tac-Toe game but I was up for the challenge and plunged in wholeheartedly.  Taking all of these features into consideration, I decided the final game would be a character running and jumping across rapidly changing terrain, attempting to collect coins along the way.  Thus, Coin Collector was born!

**You can play the most recent version of Coin Collector [here at this link]({{ site.url }}/web_projects/coin_collector/).**  See if you can gather more coins than your friends!

###Merging Game/Browser Architecture###

Pursuing a project of higher complexity necessitates using additional resources for visual presentation rather than simply defining game assets as HTML elements.  Thankfully, HTML includes a "canvas" element that is designed to handle drawing and manipulating complex shapes and images.  I decided to use the HTML canvas element because I only need to attach one event handler to the canvas element rather than assigning multiple handlers to an assortment of elements.  Additionally, all requests for image manipulation are sent to one element, making debugging significantly easier.  Defining the canvas element within the page is as easy as setting a tag.  As you can see below, the only manipulation I made to the canvas element was adding a canvas id to include a solid gray border in CSS.

{%highlight html%}
<div id="coin-collector">
  <h1>Coin Collector</h1>
  <div id="game">
    <canvas id="canvas"></canvas>
    <p class="instructions">Use the arrow keys to move.  Press up or spacebar to jump</p>
    <p class="instructions">After the apex of your jump, press up or spacebar again to perform a double jump!</p>
  </div>
</div>
<script type="text/javascript" src="scripts.js"></script>
{%endhighlight%}

Designing a game for the browser presents particular challenges in terms of displaying a continual series of game states.  Browsers and HTML functionality are built according to RESTful standards.  Each page is self-contained and once that code has finished, a second call to the web server must be requested for further information.  Games however, require a continually repeating function that displays each new calculated game state.  If a game were to request each game state through individualized HTML requests, gameplay would be severely constrained by how fast your browser communicated with the server.  In theory, HTML requests and game design require two contradictory modes of architecture, however, Javascript can bridge this gap.

If an HTML request gathers all required files and assets in it's request to the server, Javascript can present the necessary files whenever they are needed.  To allow Javascript to continue to loop through an update function, the requestAnimationFrame() method must be implemented.  If the requestAnimationFrame() method is not implemented, Javascript runs through the update loop once but does not request another iteration and is forced to exit.  RequestAnimationFrame() tells the browser that you wish to perform an animation and requests the browser to call a specified function to update an animation before the next repaint.  Here is an example showing a box moving right across the screen.

{%highlight javascript%}
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");

var box = {x:0, y:0, width:10, height:10};

function update(){
  //update box x position
  box.x += 1;

  //draw box
  ctx.fillRect(box.x, box.y, box.width, box.height);    

  //request new update loop iteration
  requestAnimationFrame(update);
}

update();
{%endhighlight%}

In essence, the update loop above calculates all game state information, draws all assets that are visible on screen and then requests another animation frame.  Its almost like an animator who has extremely short term memory, can only remember the last frame he created and can not for the life of him decide what his finished animation is going to look like.  He only uses the previous frame to inform how the current frame is going to look, nothing else.  While this forgetful animator would be fired his first day animating a movie, he would be especially good at animating games because he can adjust his animations on the fly in accordance with what spectators suggest to him.  Bringing this analogy back to our web page, requestAnimationFrame() allows the developer to request new animation frames on the fly as each game state has been calculated.

Once I figured out how to install a gameplay loop within the browser window, I began working on collision detection and terrain generation with basic blocks.  This is a subject I am leaving for my next blog post as it will take awhile to work through.  Check back soon for part II in developing Coin Collector!

**Resources I found helpful researching requestAnimationFrame()**

* **Mozilla Developer Network:** [https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame)
* **CSS-Tricks:** [https://css-tricks.com/using-requestanimationframe/](https://css-tricks.com/using-requestanimationframe/)
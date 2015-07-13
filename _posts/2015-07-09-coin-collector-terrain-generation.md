---
layout: article
title: "Coin Collector: Terrain Generation"
modified:
categories: 
excerpt:
tags: []
image:
  feature: coin-collector-feature.jpg
  teaser: coin-collector-teaser.jpg
  thumb:
date: 2015-07-09T15:25:05-05:00
---

This blog post is Part II in a series describing the development of my Javascript sidescrolling platformer, Coin Collector.  I want to take this post to describe procedural generation of terrain, specifically manipulating cell height and width according to three simple rules.

**You can play the most recent version of Coin Collector [here at this link]({{ site.url }}/web_projects/coin_collector/).**  See if you can gather more coins than your friends!

###Defining the Terrain###

As with most of my personal projects, I love to incorporate some form of procedural generation into their structure and Coin Collector is no exception.  Since this is a sidescrolling platformer, I thought what better way to incorporate procedural generation than to create endless tracts of variable terrain unbounded by a predetermined level configuration.  Usually, platformer terrain comprise a uniform grid of tiles that dictate solid ground or passable terrain.  For Coin Collector, I took this generic idea but expanded on it to morph the height and width of each terrain cell as it entered the visible playfield.  This method provides variable levels of terrain even if the end result is rather blocky.  Lets take a closer look at how the terrain is created and stored.

Coin Collector uses the generic platforming method of generating terrain cells to create the environment.  As such, the terrain is defined as an array that holds the list of terrain cells visible on the playfield.  Each cell contains variables defining its x position, y position, width and height.  At the beginning of the game, the playfield contains one cell reaching across the length of the playfield and has the minimum possible cell height.

{%highlight javascript%}
var boxes = [{x: 0, y: height - minBoxHeight, width: width, height: minBoxHeight + boxBuffer}];
{%endhighlight%}

The boxBuffer variable in the cell definition is how far the cell reaches below the visible playfield.  Due to how character collision is calculated, which I will get to in my next blog post, cells must reach below the visible playfield for a specific distance.

###Adding and Removing Terrain###

Every turn the scrolling effect for all game elements pushes all terrain cells to the left.  If the right-most cell is about to fully enter the visible playfield, another cell must be created on the fly and placed at the end of the level.  Additionally, if the left-most cell leaves the playfield completely, that cell is removed from the terrain array.  By adding and removing cells as they appear and disappear off the visible playfield, the terrain acts as an infinite treadmill.  Rules for creating new cells at the right side of the level are as follows:

* The new cell width must be greater than the character width
* The new cell height must be no greater than what the character can jump up to
* The new cell height has to allow the character to pass between the new cell and the top of the screen

Keeping to these rules, cells are added to the level with the following code:

{%highlight javascript%}
var last_index = boxes.length-1;
//Check to see if right-most box is fully entering playfield
if(boxes[last_index].x + boxes[last_index].width <= width+minStepSize){
  var tempHeight = Math.floor(minBoxHeight+Math.random()*(boxes[last_index].height-boxBuffer+variableBoxHeight-minBoxHeight));
  //Check to see if new box will let character pass overhead from top of screen
  if(boxes[last_index].y-tempHeight < player.height+5){
    tempHeight = player.height+5;
  }
  //Create new box and add to array
  boxes.push({
    x: boxes[last_index].x + boxes[last_index].width,
    y: height - tempHeight,
    width: minBoxWidth+Math.floor(Math.random()*(maxBoxWidth-minBoxWidth)),
    height: tempHeight + boxBuffer
  });
}
{%endhighlight%}

As the final key to creating varied terrain, the height a newly created cell can extend above the previous cell increases as the game continues.  In the beginning, a new cell's height can only be a few pixels higher than the previous cell.  This creates a fairly flat, low rolling playfield.  As the game progresses, this difference in height slowly increases up to the maximum jump height of the character.  At the end, the environment becomes incredibly jagged as the character is forced to jump to maximum height for a large percentage of cells.  This feature is defined in the "variableBoxHeight" variable in the above code.  The variableBoxHeight variable incrementally increases each gameplay loop, slowly increasing the percentage of maximum height a cell can attain. 

These three simple rules for generating the terrain aren't incredibly complicated but I believe do a good job at simulating infinitely undulating environments.
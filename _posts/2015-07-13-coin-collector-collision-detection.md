---
layout: article
title: "Coin Collector: Collision Detection"
modified:
categories: 
excerpt:
tags: []
image:
  feature: coin-collector-feature.jpg
  teaser: coin-collector-teaser.jpg
  thumb:
date: 2015-07-13T11:00:48-05:00
---

This blog post is Part III in a series describing the development of my Javascript sidescrolling platformer, Coin Collector.  In the previous post, I talked about terrain generation and procedurally generating a consistently evolving environment.  This post, I discuss dynamic interaction between this environment and the player-controlled character.  How is it that a constantly moving chracter recognizes when it hits randomly generated terrain and how should it react when such a collision occurs?

**You can play the most recent version of Coin Collector [here at this link]({{ site.url }}/web_projects/coin_collector/).**  See if you can gather more coins than your friends!

###Character Movement###

If you've played video games for a significant period of time, you know there are a wide range of playable characters that populate game worlds: plumbers, unicorns, buildings and even slices of bread.  While the aesthetics of these characters vary to an infinite degree, they ultimately boil down to a single square, or hitbox, when considered by game mechanics.  All aesthetic features give personality to the playable character but do not add much to the mathematics behind character movement or collision detection.  Behind the flowing hair and the chunky armor rests a simple box outlining the space occupied by a character on the screen.  We will use this hitbox to determine how our character moves around the level and interacts with the environment around them.

The character in Coin Collector is, at it's core, a hash storing sets of numbers that communicate position, velocity and state of action.  Let us take a look at how the character is defined and how a few of the values represent the current state of the character.

{%highlight javascript%}
player = {
  img : new Image(),
  x : width/2,
  y : height - 20,
  width : 44,
  height : 35,
  speed: 4,
  velX: 0,
  velY: 0,
  jumping : false,
  doubleJump: false,
  grounded: false,
  action: "idleRight",
  dirFacing: "R",
  frame : 0
}
{%endhighlight%}

As you can see, there are quite a few variables defining our character, but lets focus on the variables responsible for movement and jumping.  The 'x' and 'y' variables dictate the position coordinates where our character is located on the level.  The 'width' and 'height' variables dicate the dimensions of our character's hitbox.  Remember, our character is a square as far as our game calculation methods are concerned so we need only two dimensions.  While the previous variables store the current position of our character, 'speed', 'velX' and 'velY' are variables storing the state of movement our character occupies in that moment.  'Speed' is how fast our character is traveling, 'velX' dictates the difference in speed our character is traveling along the x-axis and 'velY' is the difference in speed our character is traveling along the y-axis.  These three variables are important in creating a simple physics simulation for our world.

So, how do these three variables allow us to move our character?  Lets jump into the code and find out!  Say our ultimate goal is to move our character to the right along the screen.  Remember, our game architecture is structured so that a gameplay loop is initiated many times per second allowing us to calculate "game states" for each frame.  An easy implementation to move our character to the right is to add 1 pixel to our x position for every frame.

{%highlight javascript%}
player.x += 1;  //Easy implementation
{%endhighlight%}

This would make our character move right across the screen at an even pace of one pixel per frame which fits our right-movement criteria!  Hooray!  This looks a bit unnatural, however, so we should add some more criteria to our movement rules.  In addition to the rule of moving right, we want our character to speed up and slow down to accomodate for friction.  This makes our code a bit more complicated but well within grasp.  This is where the 'speed', 'velX' and 'velY' variables come into play.  Instead of personally adjusting the position variables, we will adjust the velocity variables which will in turn adjust the position variables.

{%highlight javascript%}
var friction = 0.8;
if(rightKeyPressed){
  if(player.velX < player.speed) {
    player.velX++;                  
  } 
}
player.velX *= friction;
player.x += player.velX;
{%endhighlight%}

Now, if we press the right arrow key, our 'velX' variable is increased by one if it has not yet exceeded the speed variable.  Keep in mind the 'velX' variable does not immediately adjust our character position.  Next, the 'velX' variable is adjusted for friction.  A higher friction variable results in a more slippery surface where a smaller friction variable creates a sticky surface.  Finally, the player's position is adjusted by adding the calculated 'velX' variable.  

This algorithm is then applied to moving left and jumping, resulting in movement that is more in line with what we experience in real-life.  This more complicated movement algorithm allows our character to slowly ramp up to full speed as opposed to immediately jumping to full speed.  Now that we have our character moving around the screen, how does it know when it comes into contact with an obstacle?

###Collision Detection###

I have to give credit to the [Somethinghitme blog](http://www.somethinghitme.com/2013/04/16/creating-a-canvas-platformer-tutorial-part-tw/) for their excellent description of collision detection between two objects.  I used their method with a few small tweaks that give it a bit more realism.  Please visit their post for more in depth visual analysis and explanations as I will attempt to relate the way I implemented collision detection for Coin Collector in Javascript code.

The [Somethinghitme article](http://www.somethinghitme.com/2013/04/16/creating-a-canvas-platformer-tutorial-part-tw/) boils down to three key calculations between two objects to determine if they are intersecting.  This calculation only works if both objects in question are boxes which, in the case of Coin Collector, they are.  For the calculations below I am directly addressing collisions between the character and an environment block.

* First, calculate the half-width of both character and object and add them together.  This gives us the minimum length between our character and obstacle that exists without the two objects colliding.

{%highlight javascript%}
var hWidths = (player.width / 2) + (obstacle.width / 2)
var hHeights = (player.height / 2) + (obstacle.height / 2)
{%endhighlight%}

* Second, calculate the distance between the center of our character and the center of the object.

{%highlight javascript%}
var vX = (character.x + (character.width / 2)) - (obstacle.x + (obstacle.width / 2)),
var vY = (character.y + (character.height / 2)) - (obstacle.y + (obstacle.height / 2)),
{%endhighlight%}

* Third, if the distance between the center of both objects in both the X and Y axes are less than their respective half-widths, the two objects are colliding.  If they are indeed colliding, it is possible to determine which side of the object the character is colliding with by analyzing the difference between the half-widths and center-distances.

{%highlight javascript%}
if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) {
  //Character is colliding so now determine which side it is colliding on
  var oX = hWidths - Math.abs(vX),
      oY = hHeights - Math.abs(vY);
  if (oX >= oY) {
    if (vY > 0) {
      //Colliding with the bottom of the object
      character.y += oY;
    } //Colliding with the top of the object
      character.y -= oY;
    }
  } else {
    if (vX > 0) {
      //Colliding with the right side of the object
      character.x += oX;
    } else {
      //Colliding with the left side of the object
      character.x -= oX;
    }
  }
}
{%endhighlight%}

Following these three rules, it is possible to determine if a character is hitting any aspect of the environment by checking its position against all obstacles on the game level for every frame.  If there is a collision, simply adjust the player velocity to reflect this collision.  For instance, if the character hits an obstacle from the right or left side, the character X-velocity will be set to zero, rendering the character stationary.

I hope this post provides some insight into how I implemented character movement and collision detection in Coin Collector.  Once agin, I would like to reference [the Somethinghitme blog](http://www.somethinghitme.com/2013/04/16/creating-a-canvas-platformer-tutorial-part-tw/) for introducing me to collision detection.  Come back soon for Part IV, creating and manipulating animation sprites!
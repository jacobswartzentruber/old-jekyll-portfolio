---
layout: article
title: "Coin Collector: Animations"
modified:
categories: 
excerpt:
tags: []
image:
  feature: coin-collector-feature.jpg
  teaser: coin-collector-teaser.jpg
  thumb:
date: 2015-08-12T11:46:44-05:00
---

This blog post is Part IV in a series describing the development of my Javascript sidescrolling platformer, Coin Collector.  So far we have covered the underlying mechanics governing movement and win conditions.  In discussion of these mechanics we have talked about the character, terrain and background in terms of squares and blocks.  If the finished game were comprised of squares and blocks it would look and feel amateurish and uncompleted.  To give the game that extra sense of immersion, spending quality time on animations will work wonders!  Lets take a moment to understand how animations merge with gameplay elements and how they are displayed on screen.

**You can play the most recent version of Coin Collector [here at this link]({{ site.url }}/web_projects/coin_collector/).**  See if you can gather more coins than your friends!

###Hit Box vs Animation Image###

When you begin playing a new game you immediately take animations for granted.  Animations *are* the character and they *are* the landscape.  They are the beautiful face to the logical gears and cogs dictating the rules of gameplay underneath.  If you took the animation layer out of the game, the game would play exactly the same even if it looked ugly and was non-intuitive.  Animation does not affect the rules of gameplay but it *does* affect how a player interprets and understands these rules.  Animations bridge this gap between logic and comprehension.

<p><img class="image-center" title="character animations" src="/assets/character-animations.gif" alt="character animations"/></p>

On the logical side of this comprehension gap lies the mathematical, hard-coded rules of the game.  It is a world of absolutes, exact measurements and cold, hard calculation.  There is no room for fluffy foxes jumping in the grass or green trees passing him by.  The running fox and the passing trees are instead represented as hashes filled with variables dictating their position, height and width.  If these hashes were to be defined in a visual manner, they would be represented as two-dimensional boxes.  As far as game rules are concerned, the character is a 2-D box moving on a planar grid.  This is perfect for calculating distance, height, collisions, speed etc since all equations deal with a simple box rather than the variable shape of a fox.

While this "hit box" is ideal for logical code calculation, a box does not communicate the same emotions and theme as a friendly fox dashing through the forest collecting coins.  This is where animations come into play and help the player understand how the various hit boxes interact on the screen.  Living in the real-world, players understand the concept of gravity and friction.  By imposing animations of a fox and forest on the screen, the player expects, and is rewarded with, gameplay that incorporates these forces while moving their character.  If the same game instead placed a spaceship animation over the character and included a space-themed background, the player would be thoroughly confused as their spaceship hopped up and down on the screen in apparent relation to gravity.  As such, appropriate animations must be selected to most adequately communicate the rules programmed into the game.

###Sprite Sheets###

As touched on in previous blog posts, a game is comprised of a sequential series of game states, or game frames.  Animations use these game frames to simulate a sense of movement and time passing.  Depending on the state of the character during that frame, the appropriate animation is played.  If the character is continuing that action in the next frame, the animation continues; otherwise, the animation switches to the correct one.  For instance, if no keys are currently being pressed by the player, the idle animation will play.  Once the right arrow key is pressed, the idle animation will be interrupted and the "running right" animation will begin.  Once the right arrow key is released, the idle animation will begin playing.

All animations are stored in one file known as a sprite sheet.  The sprite sheet stores all frame animations related to a specific object.  Below is the sprite sheet for the fox character in Coin Collector.  From top to bottom, this sprite sheet has animations for running right, running left, jumping, idle right and idle left.

<p><img class="image-center" title="character sprite sheet" src="/assets/fox_sprite.png" alt="character sprite sheet"/></p>

To correctly display an animation, the game loop tracks which state the character is in and what frame is currently playing for that animation.  If the state of the character changes, transitioning from walking to jumping for instance, the current frame is immediately reset to zero.  If the animation hits the end of its runtime, the current frame is reset to zero and the animation starts over.

By visibly communicating the state of the character to the player for each frame, the player more readily understands what is happening on screen.  A fox mid-jump communicates its state of movement much more easily than a box seemingly floating in mid-air.  While the visual representation of a fox is not factored into the game's calculations (algorithms only recognize the parameters of the hit box underneath), it is invaluable to the final product and make the game thematically unique.

###What Next?###

The best way to create great animations is to simply pick up a program and begin practicing.  Draw flipbooks and analyze videos to understand how things move and interact with each other.  Animations provide that spark of life a game needs to become a cohesive whole.  Hopefully this article makes the concepts of hit boxes and animations clear enough to try animating for yourself.  I learned a lot simply experimenting and observing how other games implemented their own methods of animation.  If you have any questions or comments please send me an email as I would be happy to hear any input.

This concludes my series on developing Coin Collector.  I hope you enjoyed reading about the broad development strokes behind a sidescrolling platformer.  I hope to get into more advanced topics in the future as I get more comfortable writing for a blog.  Now that this series is over why don't you go play some [Coin Collector]({{ site.url }}/web_projects/coin_collector/) or get started making your own game!

**Resources useful for creating animations**

* **Pixlr:** [https://pixlr.com/editor/](https://pixlr.com/editor/) A great free online app similiar to photoshop that allows you to create and manipulate images
* **Piskell:** [http://www.piskelapp.com/](http://www.piskelapp.com/) A free online application dedicated to creating pixelized animations from your browser
---
layout: article
title: "Javascript Tic-Tac-Toe"
modified:
categories: 
excerpt:
tags: []
image:
  feature:
  teaser: javascript-teaser.jpg
  thumb:
date: 2015-06-15T11:49:28-05:00
---

As mentioned in my previous blog post, I programmed a Tic-Tac-Toe game to practice my Javascript coding.  I thought it would be a good idea to display my work and talk about what I learned throughout this mini-project.  Go ahead and play a few games!

<div class="tic-tac-toe">
	<div class="board">
	  <div class="row">
	    <div class="cell" data-position="00"></div>
	    <div class="cell" data-position="01"></div>
	    <div class="cell" data-position="02"></div>
	  </div>
	  <div class="row">
	    <div class="cell" data-position="10"></div>
	    <div class="cell" data-position="11"></div>
	    <div class="cell" data-position="12"></div>
	  </div>
	  <div class="row">
	    <div class="cell" data-position="20"></div>
	    <div class="cell" data-position="21"></div>
	    <div class="cell" data-position="22"></div>
	  </div>
	</div>
  <p id="status">Red's turn</p>
</div>

###Why Tic-Tac-Toe?###

I wanted a fairly simple first mini-project for practicing Javascript and Tic-Tac-Toe immediately came to mind as an ideal candidate.  Tic-Tac-Toe is limited in scope because there are only 26,830 possible unique games to be played.  In comparison, the lower bound for the possible number of chess games is 10 to the power of 120!  Even though the possible number of game-states is small, there is enough content in Tic-Tac-Toe to explore control flow and simple animation.  Also, who doesn't like a quick game of Tic-Tac-Toe?  It's over in ten seconds and you get bragging rights for the rest of the day so long as you don't draw multiple times in a row!

###Manipulating the DOM###

If you look at the source code for the game, the board is a simple hierarchy of divs. There is an overarching "board" class div which encompasses three "row" class divs.  Within each row, there are three "cell" class divs which represent the elements users interact with.

{%highlight html%}
<div class="board">
  <div class="row">
    <div class="cell"></div>
    <div class="cell"></div>
    <div class="cell"></div>
    </div>
  </div>
</div>
{%endhighlight%}

For manipulation of visual elements, the color and status of a cell is dictated by the classes "Red" and "Green."  When a cell is clicked, it assigns the current player's color as a class to that cell.  This is accomplished by assigning a click-handler to each cell in jQuery and using the "addClass" method to change the cell's color.

{%highlight javascript%}
var currentPlayer = "Red";
$(".cell").click(function(){
  $(this).addClass(currentPlayer);
});
{%endhighlight%}

To succinctly communicate the state of the game, I included a small message bar beneath the board that dictates whose turn it is, error messages, etc.  This message section is a "p" element with a "status" class.  If a message needs to be communicated to the user, jQuery simply adjusts the inner HTML of the "status" element.  For instance, the code below displays a message telling the player that the cell they clicked is already occupied and they need to choose a different cell.

{%highlight javascript%}
$(".cell").click(function(){
  if($(this).hasClass('Red') || $(this).hasClass('Green')){
    $('#status').html("Square already taken.  Choose another square.  Still "+currentPlayer+" 's turn.");
  }
});
{%endhighlight%}

###Storing Data###

When I was programming this game, I ran into a data manipulation problem.  Midway through development, I had implemented javascript to change a cell's class and color when a user clicks on it which takes care of visual presentation.  With just this code however, there is no way for the game to recognize the *location* of empty cells and active cells -- the game only knows that a cell's state *is* empty or active.  The game has to check whether there are three same-color cells in a row to see if a player has won so this is a major problem.  The way I went about solving this problem of location was to use the "data" parameter attached to elements and a 2-D array to store the entirety of the board state.

With the data parameter you can assign a variable key and value within the view which can be accessed by Javascript scripts when they are loaded.  For this game, I used a data parameter, "position," to store each cell's X and Y coordinates on the board.  The HTML code below sets the "position" parameter to "01" signifying it resides in row zero and column one.

{%highlight html%}
<div class="cell" data-position="01"></div>
{%endhighlight%}

Now that each cell has a position parameter attached to it, Javascript can recognize exactly where a clicked cell resides on the board.  There is also a 2-D array that stores cell states not visible to the user.  Every time a cell is clicked, Javascript accesses the "position" parameter to determine its location.  It then compares that location to the equivalent element in the 2-D array.  If the location is already taken, the game notifies the user to select another cell.  If it is free, the cell color is updated and the 2-D array element is updated to reflect the change in ownership.  Finally, the game uses the 2-D array to check if there are any three-in-a-row matches for rows, columns and diagonals.  Below, I have included how the 2-D array is set up, how "position" is used from the data parameter and how Javascript checks the row for a three-of-a-kind match.

{%highlight javascript%}
var board = [[0,0,0],[0,0,0],[0,0,0]];
$(".cell").click(function(){
  var position = $(this).data("position").toString();
  var xPos = position[0];
  var yPos = position[1];
  //Check Row
  if(board[0][yPos] === board[1][yPos] && board[1][yPos] === board[2][yPos]){
    finish = true;
  }
});
{%endhighlight%}

All in all, I think this little project helped me learn quite a few things about Javascript and jQuery.  I learned about using "data" parameters and designing a complete control structure through Javascript.  I hope to do more of these mini-projects in the future and will keep you updated to their progress!


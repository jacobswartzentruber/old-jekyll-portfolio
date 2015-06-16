$(document).ready(function(){
	var board = [[0,0,0],[0,0,0],[0,0,0]];
	var currentPlayer = "Red";
	var finish = false;
	$(".cell").click(function(){
		var position = $(this).data("position").toString();
		var xPos = position[0];
		var yPos = position[1];
		if(finish){
			board = [[0,0,0],[0,0,0],[0,0,0]];
			$(".cell").removeClass("Red Green");
			finish = false;
			$('#status').html(currentPlayer+" 's turn.");
		}else{
			//If selected square is already taken, display error message
			if($(this).hasClass('Red') || $(this).hasClass('Green')){
				$('#status').html("Square already taken.  Choose another square.  Still "+currentPlayer+" 's turn.");
			}else{
				//Change selected square to current player
				board[xPos][yPos] = currentPlayer;
				$(this).addClass(currentPlayer);

				//Check winning conditions
				//Check Row
				if(board[0][yPos] === board[1][yPos] && board[1][yPos] === board[2][yPos]){
					finish = true;
				}
				//Check Column
				else if(board[xPos][0] === board[xPos][1] && board[xPos][1] === board[xPos][2]){
					finish = true;
				}
				//Check Diagonals
				else if(board[1][1] === currentPlayer){
					if(board[0][0] === board[1][1] && board[1][1] === board[2][2]){
						finish = true;
					}
					else if(board[0][2] === board[1][1] && board[1][1] === board[2][0]){
						finish = true;
					}
				}

				//Check to see if draw and reset if draw
				var draw = true;
				for(var i=0; i<3; i++){
					for(var j=0; j<3; j++){
						if(board[i][j] == 0){
							draw = false;
							break;
						}
					}
				}
				if(draw){
					$('#status').html("It's a draw! Click on the board to play again.");
					finish = true;
				}else{
					if(finish){
						//If player won, display message
						$('#status').html(currentPlayer+" Won! Click on board to play again.");
					}else{
						//Change to next player and display message
						if(currentPlayer==="Red"){
							currentPlayer = "Green";
						}else{
							currentPlayer = "Red";
						}
						$('#status').html(currentPlayer+" 's turn.");
					}
				}
			}		
		}
	});
});
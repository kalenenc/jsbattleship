var counter = 0;
var tries = 30;
var cells = document.querySelectorAll('.cell')
function hitShip() {
	for(i=0; i < cells.length; i++) {
		cells[i].onclick = function() {
			tries--;

			if(tries == 0) {
				alert("Sorry, you lost :(");
				$(".cell").css('background', 'black')
			}

			else if($(this).hasClass("ship")) {
				//alert("you done clicked it")
				$(this).addClass("red");
				$(this).removeClass("blue");
				counter++;

				if(counter == 14) {
					alert("You won!");
				}
			}

			else if($(this).hasClass("red")) {
				alert("You already used a harpoon on this space!");
			}

			else if ($(this).hasClass("grey")) {
				alert("You already used a harpoon on this space!");
			}

			else if ($(this).hasClass("ship") === false) {
				//alert("no");
				$(this).addClass("grey");
				$(this).removeClass("blue");
			}
		}
	}
}

//function()
// function hitShip(id) {
// 	//select all the divs within a class called div
// 	//var cells = document.querySelectorAll('.cell'), i;
// 	//loop through them 
// 	//for (i = 0; i < cells.length - 1; i++) {
// 	//on click
//   	//	cells[i].onclick = function() {

//   			//if the this.div has a class of ship
//   			if($(this).hasClass("ship")) {
//   				//remove class blue
//   				$(this).removeClass("blue")
// 				//add class red
// 				$(this).addClass("red")
// 		  	}
// 			//if this.div has a class of red || grey
// 			else if($(this).hasClass('red') || $(this).hasClass('grey')) {
// 				//alert you already clicked this grid
// 				alert("You've already clicked this div!")
// 			}
// 			//if this.div does not have a class of ship
// 			else if ($(this).hasClass('ship') === false) {
// 				//remove class blue
// 				$(this).removeClass("blue")
// 				//add class grey
// 				$(this).addClass("grey")
// 		//	}
//   	//	}
// 	}
// }
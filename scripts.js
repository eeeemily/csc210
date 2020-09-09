// don't execute any JS until after the DOM is loaded

document.addEventListener("DOMContentLoaded", function() {

	clickToShow("showNextIngredient", "ingredientList");
	clickToShow("showNextStep", "stepList");

	
});
function clickToShow (button, list){
	// create "handles" on the buttons from the HTML
	var showNext = document.getElementById(button);
	
	
	// create "handles" on the lists
	var list = document.getElementById(list);

	// get the lengths of the lists
	var listLength = list.children.length;


	// for each item in the lists, set their display value to "none" (hide them)
	for (var i = 0; i < listLength; i++) {
		list.children[i].style.display="none";
	};

	// setup a counter for the list
	var listHead = 0;
	// wait for the user to click the button, then "revert" (show item) the next
	
	//. item in the list
	showNext.addEventListener("click", function() {
		if(listHead<listLength){
			list.children[listHead].style.display="revert";
			listHead++;
		}
	});
}
function changeColor(obj){
	if(obj.style.color == 'purple'){
		obj.style.color = "orange";
	}else{
		obj.style.color = "purple";
	}
}


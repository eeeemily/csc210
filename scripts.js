// don't execute any JS until after the DOM is loaded

document.addEventListener("DOMContentLoaded", function() {
	window.addEventListener('load', function () {
  alert("It's loaded!")
})
	// create "handles" on the buttons from the HTML
	var showNextIngredient = document.getElementById("showNextIngredient");
	var showNextStep = document.getElementById("showNextStep");

	// create "handles" on the lists
	var ingredientList = document.getElementById("ingredientList");
	var stepList = document.getElementById("stepList");

	// get the lengths of the lists
	var ingredientListLength = ingredientList.children.length;
	var stepListLength = stepList.children.length;

	// for each item in the lists, set their display value to "none" (hide them)
	for (var i = 0; i < ingredientListLength; i++) {
		ingredientList.children[i].style.display="none";
	}
	for (var i = 0; i < stepListLength; i++) {
		stepList.children[i].style.display="none";
	}

	// setup a counter for the list
	var ingredientListHead = 0;
	// wait for the user to click the button, then "revert" (show item) the next
	//. item in the list
	showNextIngredient.addEventListener("click", function() {
		if(ingredientListHead<ingredientListLength){
			ingredientList.children[ingredientListHead].style.display="revert";
			ingredientListHead++;
		}
	});

	// setup a counter for the list
	var stepListHead = 0;
	// wait for the user to click the button, then "revert" (show item) the next
	//. item in the list
	showNextStep.addEventListener("click", function() {
		if(stepListHead<stepListLength)
		stepList.children[stepListHead].style.display="revert";
		stepListHead++;
	});
});
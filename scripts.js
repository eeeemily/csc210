// don't execute any JS until after the DOM is loaded

$(document).ready(function() { 

	$('#ingredientList>li').hide(); //hide the entire ingredient list
	$('#stepList>li').hide();//hide the entire instruction list
	
	$('#showNextIngredient').click(function(){ //when click
		$('#ingredientList>li:hidden:first').show(); 
		//show the first ingredient hidden in the list
	});
	$("#showNextStep").click(function(){ //when click 
		$('#stepList>li:hidden:first').show(); 
		//show the first step hidden
	});

});


$('#AddStepButton').click(function (event) {//adding the click function
	
	if ($('#newStep').val()) {//check if user wants to add something
		var toAdd = $('#newStep').val();//get user input
		$('#stepList').append('<li>' + toAdd + '</li>');//add to the end
		$('#newStep').val('');//set to blank
	}
	return false;
})

$('#AddIngButton').click(function (event) {//adding the click function
	
	if ($('#newIngredient').val()) {//check if user wants to add 
		var toAdd = $('#newIngredient').val();//get user input
		$('#ingredientList').append('<li>' + toAdd + '</li>');//add to the end
		$('#newIngredient').val('');//set to blank
	}
	return false;
})


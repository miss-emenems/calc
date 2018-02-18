"use strict";

/*function myCalc(value1, value2, sign) {

	value1 = getId('first').value;
	value2 = getId('second').value;
	sign = getId('sign').value;
	var result = getId('result');

	var equation = value1 + sign + value2;

	result.innerHTML = eval(equation);

}*/

addEventListenersToButtons();


//======================================================




function getClass(element) {
	return document.getElementsByClassName(element);
}
function getId(element) {
	return document.getElementById(element);
}


function displayValue(value) {
	var newValue = value.srcElement.value;
	getId('result').innerHTML += newValue;
}

function addEventListenersToButtons() {
	var buttons = getClass('button');
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", displayValue);
	}
}

function convertToMath() {

}

function myCalc() {
	eval(getId('result').html());
	console.log("result:");
}


/*$('button').click(function(){
	var val = $(this).attr("value");
});*/
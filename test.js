"use strict";

addEventListenersToButtons();

function clearResult() {
	getId('result').value = "";
}

function myCalc() {
	getId('result').value = convertToMath();
}


//======================================================


function getClass(element) {
	return document.getElementsByClassName(element);
}
function getId(element) {
	return document.getElementById(element);
}

//Update the display with new entry
function displayValue(value) {
	var newValue = value.srcElement.value;
	getId('result').value += newValue;
}

//Check if button has been clicked
function addEventListenersToButtons() {
	var buttons = getClass('button');
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", displayValue);
	}
}	

//Change result from string format to math
function convertToMath() {
	return eval(getId('result').value);
}
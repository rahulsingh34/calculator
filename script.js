function add(a, b) {
	let c = a + b;
	return c;
}

function subtract(a, b) {
	let c = a - b;
	return c;
}

function multiply(a, b) {
	let c = a * b;
	return c;
}

function divide(a, b) {
	let c = a / b;
	return c;
}

function operate(operator, a, b) {
	return operator(a, b)
}

const mainDisplay = document.getElementById("bottom");
const buttons = document.querySelectorAll('.btn');

mainDisplayValue = [];

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		mainDisplayValue.push(button.innerText);
	});
});
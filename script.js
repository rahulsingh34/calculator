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

let number1 = '';
let operation = '';
let number2 = '';
let number3 = '';

const mainDisplay = document.getElementById('bottom');
const buttons = document.querySelectorAll('.btn');

mainDisplayValue1 = [];
mainDisplayValue2 = [];

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		mainDisplayValue1.push(button.innerText);
		mainDisplay.innerText = mainDisplayValue1.slice(0,10).join('');
		if (operation == '') {
			number1 = mainDisplayValue1.slice(0,10).join('');
		}
		else if (operation != '') {
			mainDisplayValue2.push(button.innerText);
			mainDisplay.innerText = mainDisplayValue2.slice(0,10).join('');
		}
	});
});

const actions = document.querySelectorAll('.btn-o');
topDisplay = document.getElementById('top');
topDisplayValue = [];

actions.forEach((action) => {
	action.addEventListener('click', () => {
		if(operation == '') {
			operation = action.innerHTML;
			topDisplayValue.push(number1, operation);
			topDisplay.innerText = topDisplayValue.join(' ');
		}
		else if (operation != '' && number2 == '') {
			operation = action.innerHTML;
			topDisplayValue[1] = operation;
			topDisplay.innerText = topDisplayValue.join(' ');
		}	
		else if (operation != '' && number2 != '') {
			number3 = operate(performOperation, number1, number2);
		}
	});
});


function performOperation(operator) {
	if(operator == '+') {
		return add;
	}
	else if (operator == '-') {
		return subtract;
	}
	else if (operator == '&times') {
		return multiply;
	}
	else if (operator == '&#247') {
		return divide;
	}
}
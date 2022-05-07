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
	if(operator == '+') {
		return add(a, b);
	}
	else if (operator == '-') {
		return subtract(a, b);
	}
	else if (operator == '×') {
		return multiply(a, b);
	}
	else if (operator == '÷'){s
		return divide(a, b);
	}
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
			number2 = mainDisplayValue2.slice(0,10).join('');
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
		else if (number2 != '') {
			topDisplayValue[2] = number2;
			topDisplay.innerText = topDisplayValue.join(' ') + ' = ';
			number3 = operate(topDisplayValue[1], parseFloat(number1), parseFloat(number2));
			mainDisplay.innerText = number3;
			number1 = number3;
			number2 = '';
			operation = '';
			topDisplayValue.length = 0;
			mainDisplayValue1.length = 0;
			mainDisplayValue2.length = 0;
		}
	});
});
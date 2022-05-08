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
	else if (operator == '÷'){
		return divide(a, b);
	}
}

let number1 = 0;
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
			number1 = parseFloat(mainDisplayValue1.slice(0,10).join(''));
		}
		else if (operation != '') {
			mainDisplayValue2.push(button.innerText);
			mainDisplay.innerText = mainDisplayValue2.slice(0,10).join('');
			number2 = parseFloat(mainDisplayValue2.slice(0,10).join(''));
		}
	});
});

const actions = document.querySelectorAll('.btn-o');
topDisplay = document.getElementById('top');
topDisplayValue = [];

actions.forEach((action) => {
	action.addEventListener('click', () => {
		if(operation == '' && action.innerText != '=') {
			operation = action.innerText;
			topDisplayValue.push(number1, operation);
			topDisplay.innerText = topDisplayValue.join(' ');
		}
		else if (operation != '' && number2 == '' && action.innerText != '=') {
			operation = action.innerText;
			topDisplayValue[1] = operation;
			topDisplay.innerText = topDisplayValue.join(' ');
		}	
		else if (number2 != '' && action.innerText != '=') {
			number3 = operate(action.innerText, number1, number2);
			number3 = Math.round(number3 * 100) / 100;
			topDisplay.innerText = number3 + ' ' + action.innerText;
			mainDisplay.innerText = number3;
			number1 = number3;
			number3 = '';
			number2 = '';
			operation = action.innerText;
			topDisplayValue.length = 0;
			mainDisplayValue1.length = 0;
			mainDisplayValue2.length = 0;
		}
		else if (action.innerText = '=') {
			if (number2 != '') {
				topDisplayValue[0] = number1;
				topDisplayValue[1] = operation;
				topDisplayValue[2] = number2;
			}
			if (topDisplayValue.length == 3) {
				topDisplay.innerText = topDisplayValue.join(' ') + ' = ';
				number3 = operate(topDisplayValue[1], number1, number2);
				number3 = Math.round(number3 * 100) / 100;
				mainDisplay.innerText = number3;
				number1 = number3;
				number2 = '';
				number3 = '';
				operation = '';
				topDisplayValue.length = 0;
				mainDisplayValue1.length = 0;
				mainDisplayValue2.length = 0;
			}
			else if (topDisplayValue.length == 2 && number2 == 0) {
				topDisplay.innerText = topDisplayValue.join(' ') + ' 0 ' + ' = ';
				number3 = operate(topDisplayValue[1], number1, number2);
				number3 = Math.round(number3 * 100) / 100;
				mainDisplay.innerText = number3;
				number1 = number3;
				number2 = '';
				number3 = '';
				operation = '';
				topDisplayValue.length = 0;
				mainDisplayValue1.length = 0;
				mainDisplayValue2.length = 0;
			}
		}
	});
});

const topButtons = document.querySelectorAll('.btn-s');

topButtons.forEach((tBtn) => {
	tBtn.addEventListener('click', () => {
		if (tBtn.innerText == 'CLEAR') {
			number1 = 0;
			number2 = '';
			number3 = '';
			operation = '';
			topDisplayValue.length = 0;
			mainDisplayValue1.length = 0;
			mainDisplayValue2.length = 0;
			topDisplay.innerText = '';
			mainDisplay.innerText = 0;
		}
		else {
			if (operation == '') {
				mainDisplayValue1.pop();
				mainDisplay.innerText = mainDisplayValue1.slice(0,10).join('');
				number1 = mainDisplayValue1.slice(0,10).join('');
			}
			else if (operation != '') {
				mainDisplayValue2.pop();
				mainDisplay.innerText = mainDisplayValue2.slice(0,10).join('');
				number2 = mainDisplayValue2.slice(0,10).join('');
			}
		}
	})
});

setInterval(decimal, 100);

const decimalBtn = document.getElementById('decimal');

function decimal() {
	decimalBtn.style.pointerEvents = 'auto';
	if (operation == '' && mainDisplayValue1.includes('.')) {
			decimalBtn.style.pointerEvents = 'none';
	}
	else if (operation != '' && mainDisplayValue2.includes('.')) {
			decimalBtn.style.pointerEvents = 'none';
	}
}
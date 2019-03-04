
//Setting variables
const input = document.getElementById('input');
const output = document.getElementById('output');
const clear = document.getElementById('clear');
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const decimal = document.getElementById('decimal');
const equals = document.getElementById('equals');

const buttonElements = [clear, zero, one, two, three, four, five, six, seven, eight, nine, add, subtract, multiply, divide, decimal, equals];
const numberElements = [zero, one, two, three, four, five, six, seven, eight, nine];


//Adding event listeners
addButtonListeners(buttonElements);
addNumberListeners(numberElements);
clear.addEventListener('pointerdown', clearDisplay);
clear.addEventListener('pointerdown', press);
decimal.addEventListener('pointerdown', inputDecimal);
add.addEventListener('pointerdown', inputOperator);
subtract.addEventListener('pointerdown', inputMinus);
multiply.addEventListener('pointerdown', inputOperator);
divide.addEventListener('pointerdown', inputOperator);
equals.addEventListener('pointerdown', calculate);


//Initialize
clearDisplay();


//Functions

function addButtonListeners(buttonElementList) {
  buttonElementList.forEach((buttonElement) => {
    buttonElement.addEventListener('pointerdown', press);
    buttonElement.addEventListener('pointerup', depress);
    buttonElement.addEventListener('mouseout', depress);
    buttonElement.addEventListener('pointerout', depress);
  })
}

function addNumberListeners(numberElementList) {
  numberElementList.forEach((numberElement) => {
    numberElement.addEventListener('pointerdown', inputNumber);
  })
}

function press() {
  //Adds the 'pressed' class to the classList of an element.
  this.classList.add('pressed');
}

function depress() {
  //Removes the 'pressed' class to the classList of an element.
  this.classList.remove('pressed')
  this.classList.remove('pressed2')
}

function clearDisplay() {
  //Resets the display.
  input.textContent = '';
  output.textContent = '0';
}

function inputNumber() {
  //Dictates what happens when a number(0-9) is input.

  let inputTracker = input.textContent;
  let outputTracker = output.textContent;

  if (output.textContent.length > 20) {
    console.log('number:1');
    output.textContent = 'DIGIT LIMIT MET';
  }
  else if (input.textContent.length > 29) {
    console.log('number:2');
    output.textContent = 'SCREEN LIMIT MET';
  }
  else if (!input.textContent && this.textContent == '0') {//can I eliminate this "stopper"?
    console.log('number:9');
  }
  else {
    if (/\=/.test(input.textContent)) {
      console.log('number:4');
      input.textContent = '';
      output.textContent = '';
    }
    //checks if input ends with a 0 that is preceded by a '+', '-', '*', '/', or '.'(+0, -0, /0, *0).
    else if (/(?<=[\+\-\/\*])0$/.test(input.textContent)) {
      console.log('number:8');
      input.textContent = input.textContent.slice(0, -1);
      output.textContent = '';
    }
    //checks if input is empty OR ends with a '+', '*', or '/' OR ends with a '-' that is preceded by a number.
    else if (/^$|[\+\*\/]$|(?<=[0-9]-$)/.test(input.textContent)) {
      console.log('number:13');
      output.textContent = '';
    }
    if(!/T/.test(output.textContent)) {
      console.log('number:15');
      output.textContent += this.textContent;
      input.textContent += this.textContent;
    }
  }
  if (outputTracker == output.textContent && inputTracker == input.textContent) {
    this.classList.add('pressed2');
  }
  else {
    this.classList.add('pressed');
  }
}

function inputDecimal() {
  //Dictates what happens when a decimal(.) is input.

  let inputTracker = input.textContent;
  let outputTracker = output.textContent;

  if (input.textContent.length > 29) {
    console.log('number:2a');
    output.textContent = 'SCREEN LIMIT MET';
  }
  else if (/\=|^$/.test(input.textContent)) {
    console.log('number:4a');
    input.textContent = '0.';
    output.textContent = '0.';
  }
  else if(/^-$|(?<=[\*\/])-$/.test(input.textContent)) {
    console.log('number:14a');
    input.textContent += '0.';
    output.textContent += '0.';
  }
  //checks if input is empty or output is '+', '*', or '/'.
  else if (/[\+\-\*\/]$/.test(input.textContent)) {
    console.log('number:13a');
    input.textContent += '0.';
    output.textContent = '0.';
  }
  //checks if output contains a '.' or 'T'(for "DIGIT LIMIT MET").
  else if(!/\.|T/.test(output.textContent)){
    console.log('number:15a');
    input.textContent += this.textContent;
    output.textContent += this.textContent;
  }

  if (outputTracker == output.textContent && inputTracker == input.textContent) {
    this.classList.add('pressed2');
  }
  else {
    this.classList.add('pressed');
  }
}

function inputOperator() {
  //Dictates what happens when an operator(+, *, /) is input.

  let inputTracker = input.textContent;
  let outputTracker = output.textContent;
  
  if (/\=/.test(input.textContent)) {
    console.log('operator:1');
    input.textContent = input.textContent.slice(1);
  }
  //checks if input ends with a - and is preceded by a '*' or '/'.
  else if (/(?<=[\*\/])-$/.test(input.textContent)) {
    console.log('operator:3');
    input.textContent = input.textContent.slice(0, -2);
  }
  //checks if the last character of input is a '+', '*', '/', or '.' OR if the last character of input is a '-' preceded by any character.
  else if (/[\+\*\/\.]$|(?<=.)-$/.test(input.textContent)) {
    console.log('operator:4');
    input.textContent = input.textContent.slice(0, -1);
  }
  if (!/^$|^-$/.test(input.textContent)) {
    console.log('operator:5');
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }

  if (outputTracker == output.textContent && inputTracker == input.textContent) {
    this.classList.add('pressed2');
  }
  else {
    this.classList.add('pressed');
  }
}

function inputOperator() {
  //Dictates what happens when an operator(+, *, /) is input.
  let inputTracker = input.textContent;
  let outputTracker = output.textContent;
  
  if (/\=/.test(input.textContent)) {
    console.log('operator:1');
    input.textContent = input.textContent.slice(1);
  }
  //checks if input ends with a - and is preceded by a '*' or '/'.
  else if (/(?<=[\*\/])-$/.test(input.textContent)) {
    console.log('operator:3');
    input.textContent = input.textContent.slice(0, -2);
  }
  //checks if the last character of input is a '+', '*', '/', or '.' OR if the last character of input is a '-' preceded by any character.
  else if (/[\+\*\/\.]$|(?<=.)-$/.test(input.textContent)) {
    console.log('operator:4');
    input.textContent = input.textContent.slice(0, -1);
  }
  if (!/^$|^-$/.test(input.textContent)) {
    console.log('operator:5');
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  if (outputTracker == output.textContent && inputTracker == input.textContent) {
    this.classList.add('pressed2');
  }
  else {
    this.classList.add('pressed');
  }
}

function inputMinus() {
  //Dictates what happens when an subtract operator(-) is input.

  let inputTracker = input.textContent;
  let outputTracker = output.textContent;

  if (/\=/.test(input.textContent)) {
    console.log('minus:1')
    input.textContent = input.textContent.slice(1);
  }
  //checks if input ends with a '+', '-', or '.'.
  else if (/[\+\-\.]$/.test(input.textContent)) {
    console.log('minus:2')
    input.textContent = input.textContent.slice(0, -1);
  }
  console.log('minus:3')
  input.textContent += this.textContent;
  output.textContent = this.textContent;

  if (outputTracker == output.textContent && inputTracker == input.textContent) {
    this.classList.add('pressed2');
  }
  else {
    this.classList.add('pressed');
  }
}

function calculate() {
  //Dictates what happens when an equals operator(=) is input.

  let inputTracker = input.textContent;
  let outputTracker = output.textContent;

  //checks if input ends with a '-' that is preceded by a '+', '*', '/', or '.'.
  if(/(?<=[\+\*\/\.])-$/.test(input.textContent)) {
    console.log('calculate:1');
    input.textContent = input.textContent.slice(0, -2);
  }
  //checks if the last character of input is a '+', '*', '/', or '.' OR if the last character of input is a '-' preceded by any character.
  else if(/[\+\*\/\.]$|(?<=.)-$/.test(input.textContent)) {
    console.log('calculate:2');
    input.textContent = input.textContent.slice(0, -1);
  }
  //checks if input is empty OR is '-' OR contains a '='.
  if(!/=|^-$|^$/.test(input.textContent)) {
    console.log('calculate:3');
    output.textContent = eval(input.textContent);
    input.textContent = '=' + eval(input.textContent);
  }

  if (outputTracker == output.textContent && inputTracker == input.textContent) {
    this.classList.add('pressed2');
  }
  else {
    this.classList.add('pressed');
  }
}

 
//REFACTOR RED LIGHT CODE

//ADD CROSS=BROWSER COMPATABILITY
//REVISIT INPUTNUMBER FUNCTION PERIODICALLY FOR POSSIBLE REFACTORING.

//NOTE: AS OF 2/26 TESTS ARE FAILING DUE TO FCC EXPECTING MY "OUTPUT" ELEMENT TO BE NAMED DISPLAY. A QUICK FIX WAS TO CHANGE OUTPUT TO DISPLAY AND DISPLAY TO "SCREEN"
//WITHIN MY CODEPEN CODE BUT I'M NOT YET SURE IF THAT WILL BE MY PREFERRED SOLUTION

//FEATURE: ON/OFF BUTTON WHICH CLEARS/DIMS THE DISPLAY AND DISABLES BUTTON LIGHTING(LIKELY PLACED BETWEEN DISPLAY AND BUTTONS).
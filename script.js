/*
function inputNumber() {
  //THE LOGIC FOR THIS FUNCTION LOOKS FUNKY. I THINK I CAN CLEAN IT UP. IT ALSO MAY BE A GOOD IDEA TO SEPERATE THE ZERO BUTTON'S LOGIC FROM THE 1-9 LOGIC.
  if (output.textContent.length > 20) {
    console.log('number:1');
    output.textContent = 'DIGIT LIMIT MET';
  }
  else if (input.textContent.length > 29) {
    console.log('number:2');
    output.textContent = 'SCREEN LIMIT MET';
  }
  else if (output.textContent == 'DIGIT LIMIT MET') {
    console.log('number:3');
  }
  else if (/\=/.test(input.textContent)) {
    console.log('number:4');
    input.textContent = this.textContent;
    output.textContent = this.textContent;
  }
  else if(/\./.test(output.textContent) && this.textContent == '.') {
    console.log('number:5');
  }
  else if (/(?<![0-9])0$/.test(input.textContent) && this.textContent == '.' && output.textContent == '0') {
    input.textContent += this.textContent;
    output.textContent += this.textContent;
    console.log('number:6');
  }
  else if (/(?<![0-9])0$/.test(input.textContent) && this.textContent == '.') {
    input.textContent = input.textContent.slice(0, -1);
    output.textContent = output.textContent.slice(0, -1);
    output.textContent += this.textContent;
    input.textContent += this.textContent;
    console.log('number:7');
  }
  else if (/(?<![0-9])0$/.test(input.textContent) && output.textContent == '0') {
    input.textContent = input.textContent.slice(0, -1);
    output.textContent = output.textContent.slice(0, -1);
    input.textContent += this.textContent;
    output.textContent += this.textContent;
    console.log('number:8');
  }
  //This if checks is output is 0 and this's textcontent is 0 then does nothing else but sets or "leaves" output 0.
  else if (output.textContent == '0' && this.textContent == '0') {
    output.textContent = '0';
    console.log('number:9');
  }
  else if (output.textContent == '0' && this.textContent =='.' && input.textContent == '') {
    output.textContent = '0.';
    input.textContent += '0.';
    console.log('number:10');
  }
  else if (output.textContent == '0' && this.textContent == '.') {
    output.textContent = '0.';
    input.textContent += this.textContent;
    console.log('number:11');
  }
  //This effectively checks if output is 0 and this's textContent is 1-9 then sets output to nothing before appending this.textContent to output and input.
  else if (output.textContent == '0') {
    output.textContent = output.textContent.slice(1);
    output.textContent += this.textContent;
    input.textContent += this.textContent;
    console.log('number:12');
  }
  else if(isNaN(output.textContent) && this.textContent == '.') {
    output.textContent = '0.';
    input.textContent += '0.';
    console.log('number:13');
  }
  //This checks if output is NaN(which it would be after an operator is clicked) then sets output to this and appends this to input.
  else if(isNaN(output.textContent)) {
    output.textContent = this.textContent;
    input.textContent += this.textContent;
    console.log('number:14');
  }
  else {
    console.log('number:15');
    output.textContent += this.textContent;
    input.textContent += this.textContent;
  }
}

function inputNumber() {
  //This is a function that dictates what happens when a number(0-9) is input.

  if (output.textContent.length > 20) {
    console.log('number:1');
    output.textContent = 'DIGIT LIMIT MET';
  }
  else if (input.textContent.length > 29) {
    console.log('number:2');
    output.textContent = 'SCREEN LIMIT MET';
  }
  else if (/\=/.test(input.textContent)) {
    console.log('number:4');
    output.textContent = this.textContent;
    input.textContent = this.textContent;
  }
  //checks if input ends with a 0 and is preceded by a '+', '-', '*', '/', or '.'(+0, -0, /0, *0).
  else if (/(?<=[\+\-\/\*])0$/.test(input.textContent)) {
    input.textContent = input.textContent.slice(0, -1);
    output.textContent = this.textContent;
    input.textContent += this.textContent;
    console.log('number:8');
  }
  //checks if input is empty and this is '0'.
  else if (!input.textContent && this.textContent == '0') {
    console.log('number:9');
  }
  //checks if input is empty OR ends with a '+', '*', or '/' OR ends with a '-' that is preceded by a number.
  else if (/^$|[\+\*\/]$|(?<=[0-9]-$)/.test(input.textContent)) {
    output.textContent = this.textContent;
    input.textContent += this.textContent;
    console.log('number:13');
  }
  else if(!/T/.test(output.textContent)) {
    console.log('number:15');
    output.textContent += this.textContent;
    input.textContent += this.textContent;
  }
}

function inputOperator() {
  //This is a function that dictates what happens when an operator(+, *, /) is input.
  
  if (/\=/.test(input.textContent)) {
    console.log('operator:1');
    input.textContent = input.textContent.slice(1);
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  //checks if input ends with a - and is preceded by a '*' or '/'.
  else if (/(?<=[\*\/])-$/.test(input.textContent)) {
    console.log('operator:3');
    input.textContent = input.textContent.slice(0, -2);
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  //checks if the last character of input is a '+', '*', '/', or '.' OR if the last character of input is a '-' preceded by any character.
  else if (/[\+\*\/\.]$|(?<=.)-$/.test(input.textContent)) {
    console.log('operator:4');
    input.textContent = input.textContent.slice(0, -1);
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  else if (!/^$|^-$/.test(input.textContent)) {
    console.log('operator:5');
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
}


function inputMinus() {
  //This is a function that dictates what happens when an subtract operator(-) is input.

  if (/\=/.test(input.textContent)) {
    console.log('minus:1')
    input.textContent = input.textContent.slice(1);
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  //checks if input ends with a '+', '-', or '.'.
  else if (/[\+\-\.]$/.test(input.textContent)) {
    console.log('minus:2')
    input.textContent = input.textContent.slice(0, -1);
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  else {
    console.log('minus:3')
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
}


function calculate() {
  //This is a function that dictates what happens when an equals operator(=) is input.

  //checks if input ends with a '-' that is preceded by a '+', '*', '/', or '.'.
  if(/(?<=[\+\*\/\.])-$/.test(input.textContent)) {
    console.log('calculate:2');
    input.textContent = input.textContent.slice(0, -2);
    output.textContent = eval(input.textContent);
    input.textContent = '=' + eval(input.textContent);
  }
  //checks if the last character of input is a '+', '*', '/', or '.' OR if the last character of input is a '-' preceded by any character.
  else if(/[\+\*\/\.]$|(?<=.)-$/.test(input.textContent)) {
    console.log('calculate:3');
    input.textContent = input.textContent.slice(0, -1);
    output.textContent = eval(input.textContent);
    input.textContent = '=' + eval(input.textContent);
  }
  //checks if input is empty OR is '-' OR contains a '='.
  else if(!/=|^-$|^$/.test(input.textContent)) {
    console.log('calculate:4');
    output.textContent = eval(input.textContent);
    input.textContent = '=' + eval(input.textContent);
  }
}


*/

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


//Adding event listeners
clear.addEventListener('click', clearDisplay);
zero.addEventListener('click', inputNumber);
one.addEventListener('click', inputNumber);
two.addEventListener('click', inputNumber);
three.addEventListener('click', inputNumber);
four.addEventListener('click', inputNumber);
five.addEventListener('click', inputNumber);
six.addEventListener('click', inputNumber);
seven.addEventListener('click', inputNumber);
eight.addEventListener('click', inputNumber);
nine.addEventListener('click', inputNumber);
decimal.addEventListener('click', inputDecimal);
add.addEventListener('click', inputOperator);
subtract.addEventListener('click', inputMinus);
multiply.addEventListener('click', inputOperator);
divide.addEventListener('click', inputOperator);
equals.addEventListener('click', calculate);


//Initialize
clearDisplay();

//Functions

function clearDisplay() {
  input.textContent = '';
  output.textContent = '0';
}

function inputNumber() {
  //This is a function that dictates what happens when a number(0-9) is input.

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
  else { //this can be unnested
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
}

function inputDecimal() {
  //This is a function that dictates what happens when a decimal(.) is input.

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
}

function inputOperator() {
  //This is a function that dictates what happens when an operator(+, *, /) is input.
  
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
}

function inputMinus() {
  //This is a function that dictates what happens when an subtract operator(-) is input.

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
}

function calculate() {
  //This is a function that dictates what happens when an equals operator(=) is input.

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
}

 

//FINISH STYLING

//REVISIT INPUTNUMBER FUNCTION PERIODICALLY FOR POSSIBLE REFACTORING

//NOTE: AS OF 2/26 TESTS ARE FAILING DUE TO FCC EXPECTING MY "OUTPUT" ELEMENT TO BE NAMED DISPLAY. A QUICK FIX WAS TO CHANGE OUTPUT TO DISPLAY AND DISPLAY TO "SCREEN"
//WITHIN MY CODEPEN CODE BUT I'M NOT YET SURE IF THAT WILL BE MY PREFERRED SOLUTION

//FEATURE: WHENEVER A/MOST BUTTONS ARE PRESSED AND NOTHING HAPPENS THE BUTTON FLASHES RED
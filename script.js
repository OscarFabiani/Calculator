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


function clearDisplay() {
  input.textContent = '';
  output.textContent = '0';

}

clear.addEventListener('click', clearDisplay);

function inputNumber() {
  //THE LOGIC FOR THIS FUNCTION LOOKS FUNKY. I THINK I CAN CLEAN IT UP. IT ALSO MAY BE A GOOD IDEA TO SEPERATE THE ZERO BUTTON'S LOGIC FROM THE 1-9 LOGIC.
  if (output.textContent.length > 20) { //working at 8
    console.log('a');
    console.log(output.textContent);
    console.log(output.textContent.length);
    output.textContent = 'DIGIT LIMIT MET';
  }
  else if (input.textContent.length > 29) { //working at 17
    console.log('b');
    output.textContent = 'SCREEN LIMIT MET';
  }
  else if (output.textContent == 'DIGIT LIMIT MET') {
    console.log('c');
  }
  else if (/\=/.test(input.textContent)) {
    console.log('-1');
    input.textContent = this.textContent;
    output.textContent = this.textContent;
  }
  else if(/\./.test(output.textContent) && this.textContent == '.') {
    console.log('0');
  }
  else if (/(?<![0-9])0$/.test(input.textContent) == true && this.textContent == '.' && output.textContent == '0') {
    input.textContent += this.textContent;
    output.textContent += this.textContent;
    console.log('1');
  }
  else if (/(?<![0-9])0$/.test(input.textContent) == true && this.textContent == '.') {
    input.textContent = input.textContent.slice(0, -1);
    output.textContent = output.textContent.slice(0, -1);
    output.textContent += this.textContent;
    input.textContent += this.textContent;
    console.log('2');
  }
  else if (/(?<![0-9])0$/.test(input.textContent) == true && output.textContent == '0') {
    input.textContent = input.textContent.slice(0, -1);
    output.textContent = output.textContent.slice(0, -1);
    input.textContent += this.textContent;
    output.textContent += this.textContent;
    console.log('3');
  }
  //This if checks is output is 0 and this's textcontent is 0 then does nothing else but sets or "leaves" output 0.
  else if (output.textContent == '0' && this.textContent == '0') {
    output.textContent = '0';
    console.log('4');
  }
  else if (output.textContent == '0' && this.textContent =='.' && input.textContent == '') {
    output.textContent = '0.';
    input.textContent += '0.';
    console.log('5');
  }
  else if (output.textContent == '0' && this.textContent == '.') {
    output.textContent = '0.';
    input.textContent += this.textContent;
    console.log('6');
  }
  //This effectively checks if output is 0 and this's textContent is 1-9 then sets output to nothing before appending this.textContent to output and input.
  else if (output.textContent == '0') {
    output.textContent = '';
    output.textContent += this.textContent;
    input.textContent += this.textContent;
    console.log('7');
  }
  else if(isNaN(output.textContent) && this.textContent == '.') {
    output.textContent = '0.';
    input.textContent += '0.';
    console.log('8');
  }
  //This checks if output is NaN(which it would be after an operator is clicked) then sets output to this and appends this to input.
  else if(isNaN(output.textContent)) {
    output.textContent = this.textContent;
    input.textContent += this.textContent;
    console.log('9');
  }
  //This appends this to output and input
  else {
    output.textContent += this.textContent;
    input.textContent += this.textContent;
    console.log('10');
  }
}

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

decimal.addEventListener('click', inputNumber);

function inputOperator() {
  if (/\=/.test(input.textContent) && !/[0-9]$/.test(input.textContent)) {
    console.log('-4');
    input.textContent = input.textContent.slice(1, -1);
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  else if (/\=/.test(input.textContent) && /T/.test(output.textContent)) {
    console.log('-3')
    input.textContent = input.textContent.slice(1);
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  else if (/\=/.test(input.textContent)) {
    console.log('-2');
    input.textContent = output.textContent;
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  else if (input.textContent == '-') {
    console.log('-1');
  }
  else if (/(?<![0-9])-$/.test(input.textContent)) {
    console.log('0');
    input.textContent = input.textContent.slice(0, -2);
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  else if (/[\+\-\/\*]$/.test(input.textContent)) {
    console.log('1');
    input.textContent = input.textContent.slice(0, -1);
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  else if (/\.$/.test(output.textContent)) {
    console.log('2');
    input.textContent = input.textContent.slice(0, -1);
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  else if (input.textContent == '' && this.textContent != '-') {
    console.log('3');
  }
  else {
    console.log('5');
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
}

function inputMinus() {
  //IT MAY BE BETTER TO INCORPORATE THIS LOGIC INTO THE INPUTOPERATOR FUNCTION.
  if (/\=/.test(input.textContent) && /T/.test(output.textContent)) {
    console.log('minus-a')
    input.textContent = input.textContent.slice(1);
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  else if (/\=/.test(input.textContent) && /\-$/.test(input.textContent)) {
    console.log('minus-b');
  }
  else if (/\=/.test(input.textContent)) {
    console.log('minus-c')
    input.textContent = output.textContent;
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  else if (/[\+\-]$/.test(input.textContent)) {
    console.log('minus-d')
    input.textContent = input.textContent.slice(0, -1);
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  else if (/[\/\*]$/.test(input.textContent)) {
    console.log('minus-e')
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  else if (/\.$/.test(output.textContent)) {
    console.log('minus-f')
    input.textContent = input.textContent.slice(0, -1);
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  else if (input.textContent == '' && this.textContent != '-') {
    console.log('minus-g')
  }
  //This appends this operator to input and output.
  else {
    console.log('minus-h')
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
}

add.addEventListener('click', inputOperator);
subtract.addEventListener('click', inputMinus);
multiply.addEventListener('click', inputOperator);
divide.addEventListener('click', inputOperator);


function calculate() {
  if(/[\+-\/\*\.]$/.test(input.textContent) && input.textContent.length > 22 || /e/.test(input.textContent)) {
    input.textContent = input.textContent.slice(0, -1);
    let e = eval(input.textContent);
    console.log('v');
    input.textContent = '= ' + eval(input.textContent);
    output.textContent = e;
  }
  else if(/[\+-\/\*\.]$/.test(input.textContent)) {
    console.log('w');
    input.textContent = input.textContent.slice(0, -1);
    output.textContent = eval(input.textContent);
    input.textContent = '=' + eval(input.textContent);
  }
  else if (input.textContent.length > 22 || /e/.test(input.textContent)) {
    let e = eval(input.textContent);
    console.log('x');
    input.textContent = '= ' + eval(input.textContent);
    output.textContent = e;
  }
  else if (input.textContent == '') {
    console.log('y');
  }
  else {
    console.log('z');
    output.textContent = eval(input.textContent);
    input.textContent = '=' + eval(input.textContent);
  }
}

equals.addEventListener('click', calculate);

//"last" problem: try getting an "e" answer and multiplying by a number then pressing equals

//SOLVE LAST PROBLEM, SEARCH FOR OTHER PROBLEMS, REVISIT FUNCTIONS, AND ADD STYLING

//NOTE: AS OF 2/26 TESTS ARE FAILING DUE TO FCC EXPECTING MY "OUTPUT" ELEMENT TO BE NAMED DISPLAY. A QUICK FIX WAS TO CHANGE OUTPUT TO DISPLAY AND DISPLAY TO "SCREEN"
//WITHIN MY CODEPEN CODE BUT I'M NOT YET SURE IF THAT WILL BE MY PREFERRED SOLUTION
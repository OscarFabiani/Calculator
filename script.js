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
  //THE LOGIC FOR THIS FUNCTION LOOKS FUNKY. I THINK I CAN CLEAN IT UP. IT ALSO MAY BE A GOOD IDEA TO SEPERATE THE ZERO BUTTONS LOGIC FROM THE 1-9 LOGIC.

  //This if uses a regex to check if the last character in the input string is a zero and is preceded by a non-number. I true, both input and output textContent's last character
  //is sliceed off before this's textContent is appended to input and output.
  if (/(?<![0-9])0$/.test(input.textContent)) {
    input.textContent = input.textContent.slice(0, -1);
    output.textContent = output.textContent.slice(0, -1);
    output.textContent += this.textContent;
    input.textContent += this.textContent;
  }
  //This if checks is output is 0 and this's textcontent is 0 then does nothing else but sets or "leaves" output 0.
  else if (output.textContent == '0' && this.textContent == '0') {
    output.textContent = '0';
  }
  //This effectively checks if output is 0 and this's textContent is 1-9 then sets output to nothing before appending this.textContent to output and input.
  else if (output.textContent == '0') {
    output.textContent = '';
    output.textContent += this.textContent;
    input.textContent += this.textContent;
  }
  //This checks if output is NaN(which it would be after an operator is clicked) then sets output to this and appends this to input.
  else if(isNaN(output.textContent)) {
    output.textContent = this.textContent;
    input.textContent += this.textContent;
  }
  //This appends this to output and input
  else {
    output.textContent += this.textContent;
    input.textContent += this.textContent;
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

function inputOperator() {

  //This checks if the last character in input is an operator then slices the last character off of input, appends this operator to input, and sets output to this operator.
  if (/[\+\-\/\*]$/.test(input.textContent)) {
    input.textContent = input.textContent.slice(0, -1);
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
  //This appends this operator to input and output.
  else {
    input.textContent += this.textContent;
    output.textContent = this.textContent;
  }
}

add.addEventListener('click', inputOperator);
subtract.addEventListener('click', inputOperator);
multiply.addEventListener('click', inputOperator);
divide.addEventListener('click', inputOperator);


function calculate() {
  output.textContent = eval(input.textContent);
}

equals.addEventListener('click', calculate);


//REVISIT INPUTNUMBER FUNCTION, CONTINUE STORIES

//NOTE: AS OF 2/26 TESTS ARE FAILING DUE TO FCC EXPECTING MY "OUTPUT" ELEMENT TO BE NAMED DISPLAY. A QUICK FIX WAS TO CHANGE OUTPUT TO DISPLAY AND DISPLAY TO "SCREEN"
//WITHIN MY CODEPEN CODE BUT I'M NOT YET SURE IF THAT WILL BE MY PREFERRED SOLUTION
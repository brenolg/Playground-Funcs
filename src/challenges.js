// Desafio 1

function compareTrue(anima1,animal2) {
  if (anima1 === true && animal2 === true) {
    return true;
  } else {
    return false;
  }

}

// Desafio 2

let base = 10;
let height = 50;
function calcArea(base, altura) {
  let areaT = (base * altura) / 2.;
  return areaT

}

// Desafio 3

function splitSentence(text) {
  let stringSplit = text.split(" ");
  return stringSplit
}

console.log(splitSentence(trybe))

// Desafio 4

function concatName(array) {
  
  let firstName = array[0];
  let lastName = (array[array.length - 1]);
  let nomesC = [];
  nomesC.push(lastName, firstName);
  return nomesC
  
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};

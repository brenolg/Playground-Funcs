// Desafio 1

function compareTrue(anima1,animal2) {
  if (anima1 === true && animal2 === true) {
    return true;
  } else {
    return false;
  }

}

// Desafio 2

function calcArea(base, altura) {
  let areaT = (base * altura) / 2.;
  return areaT

}

// Desafio 3

function splitSentence(text) {
  let stringSplit = text.split(" ");
  return stringSplit
}


// Desafio 4

function concatName(array) {
  
  let firstName = array[0];
  let lastName = (array[array.length - 1]);
  return lastName + ", " + firstNameclear;

}

// Desafio 5


function footballPoints(vitorias, ties) {
  let calculadorV = vitorias * 3;
  let calculadorT = ties * 1;
  let calculadorPontos = calculadorT + calculadorV;
  return calculadorPontos;
  
}

// Desafio 6


function highestCount(numeros) {

  let maiorN = -1000;
  let contador = 0;

  for (let index of numeros) {
     if (index > maiorN){
            maiorN = index;
        }
    }  
     for (let index2 of numeros){
        if (maiorN === index2) {
            contador += 1;
        }
    }
    return contador
    
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

  let distanciaCat1 = Math.abs(mouse - cat1)
  let distanciaCat2 = Math.abs(mouse - cat2)

  if  ((distanciaCat1 === distanciaCat2)) {
    return 'os gatos trombam e o rato foge';

  }else if (distanciaCat1 < distanciaCat2){
    return 'cat1';

  } else if (distanciaCat2 < distanciaCat1){
    return 'cat2';
  
  } 
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

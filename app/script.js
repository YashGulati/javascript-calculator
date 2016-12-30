

function appPlus() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "+";
}

function appModulo() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "%";
}

function appSlash() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "/";
}

function appSeven() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "7";
}

function appEight() {
  a = document.getElementById("ansBox").value.length;
  if(a < 20 ) document.getElementById("ansBox").value += "8";
}

function appNine() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "9";
}

function appMul() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "*";
}

function appFour() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "4";
}

function appFive() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "5";
}

function appSix() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "6";
}

function appMinus() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "-";
}

function appOne() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "1";
}

function appTwo() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "2";
}

function appThree() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "3";
}

function appPoint() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += ".";
}

function appZero() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "0";
}

function appDzero() {
  a = document.getElementById("ansBox").value.length;
if(a < 20 ) document.getElementById("ansBox").value += "00";
}

function ans() {
  document.getElementById("ansBox").value = eval(document.getElementById("ansBox").value);
}

function allClear() {
  document.getElementById("ansBox").value = "";
}

function poper() {
  var a = document.getElementById("ansBox").value.split("");
  a.pop();
  document.getElementById("ansBox").value = a.join("");
}

(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");

window.onload = function setInitialGradient() {
  css.textContent = "linear-gradient(to right, rbg(255, 0, 0), rgb(255, 255, 0));";
}

function setGradient() {
  body.style.background = "linear-gradient(to right, "
    + color1.value
    + ", "
    + color2.value + ")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", function() {
  color1.value = '#' + Math.floor(Math.random()*16777215).toString(16);
  color2.value = '#' + Math.floor(Math.random()*16777215).toString(16);
  setGradient();
})
},{}]},{},[1]);

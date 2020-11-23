  	"use strict";

const signal = "red";

switch(signal){
  case "red":
    console.log("Stop!");
    break;
  case "yellow":
    console.log("Caution!");
    break;
  case "blue":
  case "gleen":
    console.log("Go!");
    break;
  default:
    console.log("Wrong signal!");
    break;
}
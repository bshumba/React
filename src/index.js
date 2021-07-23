//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDom from "react-dom";

var myname = "Brian";
var cyear = new Date().getFullYear();

// reactdom.render(what to show, where to show it)
ReactDom.render(
  <div>
    <p>Created by: {myname}</p>
    <p>My lucky number is: {Math.floor(Math.random() * 10)}</p>
    <p>Copyright: {cyear}</p>
  </div>,
  document.getElementById("root")
);
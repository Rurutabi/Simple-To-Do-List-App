"use strict";

const temp = "";
const adding = document.querySelector(".adding");
const containerId = document.getElementById("container");

adding.addEventListener("click", function () {
  createNewList();
});

function createNewList() {
  //Adding Div
  const newDiv = document.createElement("div");
  newDiv.className = "listing";
  newDiv.id = "testing";
  containerId.appendChild(newDiv);

  //Adding List
  const list = document.createElement("li");
  const insideList = document.createTextNode("List example");
  list.appendChild(insideList);
  newDiv.appendChild(list);
  /*
  const 1 = document.createElement("li");
  const 2 = document.createTextNode("What to do.");
  1.appendChild(2);

  
  element.appendChild(para);
  */
}

"use strict";

const userInput = document.getElementById("userinput").value;
const adding = document.querySelector(".addButton");
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
  const insideList = document.createTextNode("userInput");
  list.appendChild(insideList);
  newDiv.appendChild(list);

  //Edit button
  const newButtonDiv = document.createElement("div");
  const editButton = document.createElement("button");
  const insideEditButton = document.createTextNode("Edit");
  newButtonDiv.className = "button-container";
  newDiv.appendChild(newButtonDiv);
  newButtonDiv.appendChild(editButton);
  editButton.appendChild(insideEditButton);

  //Remove button
  const removeButton = document.createElement("button");
  const insideRemoveButton = document.createTextNode("Remove");
  newButtonDiv.appendChild(removeButton);
  removeButton.appendChild(insideRemoveButton);
}

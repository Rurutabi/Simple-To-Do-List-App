"use strict";

const adding = document.querySelector(".addButton");
const containerId = document.getElementById("container");
let justCheck = false;
let listNumber = 0;

adding.addEventListener("click", function () {
  createNewList();
  //Remove value after added to the list
  document.getElementById("userinput").value = "";
});

function createNewList() {
  //Adding Div
  const userInput = document.getElementById("userinput").value;
  const newDiv = document.createElement("div");
  newDiv.className = `listing`;
  containerId.appendChild(newDiv);

  //Adding List
  const newListDiv = document.createElement("div");
  newListDiv.className = "list-name";
  newListDiv.id = "list-test";
  let list = document.createElement("li");
  const insideList = document.createTextNode(`${userInput}`);
  list.id = "listDiv";
  list.className = "preColor";
  list.appendChild(insideList);
  newListDiv.appendChild(list);
  newDiv.appendChild(newListDiv);

  //Edit button
  const newButtonDiv = document.createElement("div");
  let editButton = document.createElement("button");
  let insideEditButton = document.createTextNode("Edit");
  newButtonDiv.className = "button-container";
  newDiv.appendChild(newButtonDiv);
  newButtonDiv.appendChild(editButton);
  editButton.appendChild(insideEditButton);

  //Remove button
  const removeButton = document.createElement("button");
  const insideRemoveButton = document.createTextNode("Remove");
  newButtonDiv.appendChild(removeButton);
  removeButton.appendChild(insideRemoveButton);

  //Remove div when click
  removeButton.addEventListener("click", function () {
    newDiv.remove();
  });

  editButton.addEventListener("click", function () {
    if (editButton.textContent === "Edit") {
      editButton.textContent = "Done";
      list.setAttribute("class", "colorChange");
      list.setAttribute("contenteditable", "true");
    } else if (editButton.textContent === "Done") {
      editButton.textContent = "Edit";
      list.setAttribute("class", "preColor");
      list.setAttribute("contenteditable", "false");
    } else {
      console.log("something wrong");
    }
  });
}

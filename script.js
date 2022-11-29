"use strict";

const adding = document.querySelector(".addButton");
const containerDiv = document.getElementById("container");
const headingDiv = document.getElementById("heading");
const hidden = document.querySelector(".hidden");
const enter = document.getElementById("userinput");

adding.addEventListener("click", function () {
  if (document.getElementById("userinput").value === "") {
    hidden.classList.remove("hidden");
  } else {
    createNewList();
    //Remove value after added to the list
    hidden.classList.add("hidden");
    document.getElementById("userinput").value = "";
  }
});

enter.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    adding.click();
  }
});

function createNewList() {
  //Adding Div
  const userInput = document.getElementById("userinput").value;
  const newDiv = document.createElement("div");

  newDiv.classList.add(`listing-container`);
  containerDiv.appendChild(newDiv);

  //Adding List
  const newListDiv = document.createElement("div");
  let list = document.createElement("li");
  const insideList = document.createTextNode(`${userInput}`);

  newListDiv.classList.add("userlist");
  list.classList.add("preColor");
  list.appendChild(insideList);
  newListDiv.appendChild(list);
  newDiv.appendChild(newListDiv);

  //Edit button
  const newButtonDiv = document.createElement("div");
  let editButton = document.createElement("button");
  let insideEditButton = document.createTextNode("Edit");

  newButtonDiv.classList.add("button-container");
  editButton.classList.add("editButton");
  newDiv.appendChild(newButtonDiv);
  newButtonDiv.appendChild(editButton);
  editButton.appendChild(insideEditButton);

  //Remove button
  const removeButton = document.createElement("button");
  const insideRemoveButton = document.createTextNode("Remove");

  removeButton.classList.add("removeButton");
  newButtonDiv.appendChild(removeButton);
  removeButton.appendChild(insideRemoveButton);

  //Remove div when click
  removeButton.addEventListener("click", function () {
    newDiv.remove();
  });

  editButton.addEventListener("click", function () {
    if (editButton.textContent === "Edit") {
      editButton.textContent = "Done";
      list.classList.remove("preColor");
      list.classList.add("colorChange");
      list.setAttribute("contenteditable", "true");
    } else if (editButton.textContent === "Done") {
      editButton.textContent = "Edit";
      list.classList.remove("colorChange");
      list.classList.add("preColor");
      list.setAttribute("contenteditable", "false");
    } else {
      console.log("something wrong");
    }
  });
}

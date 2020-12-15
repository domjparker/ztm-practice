let input = document.getElementById("userInput");
let button = document.getElementById("enter");
let ul = document.querySelector("ul");
let li = document.getElementsByTagName("li");
// let deleteButton = document.getElementsByClassName("button");

let inputLength = () => input.value.trim().length;

// let toggleDoneOnOff() => {

// }

let createListElement = () => {
  let li = document.createElement("li");
  let span = li.appendChild(document.createElement("span"));
  let deleteButton = span.appendChild(document.createElement("button"));
  deleteButton.classList.add("deleteButton");
  deleteButton.appendChild(document.createTextNode("x"));
  let textButton = li.appendChild(document.createElement("button"));
  textButton.classList.add("textButton")
  textButton.appendChild(document.createTextNode(" " + input.value));
  ul.appendChild(li);

  input.value = "";
}

let addListItemOnClick = () => {
  if (inputLength() > 0) {
    createListElement();
  }
}

let addListItemOnEnter = (event) => {
  if (inputLength() > 0 && event.code === "Enter") {
    createListElement();
  }
}

let toggleDone = (event) => {
  if (event.target.className === "textButton") {
    event.target.classList.add("done");
  } else if (event.target.className === "textButton done") {
    event.target.classList.remove("done");
  }
}

let deleteListItem = (event) => {
  if (event.target.className === "deleteButton") {
    event.target.parentElement.parentElement.remove();
  }
}

button.addEventListener("click", addListItemOnClick);

input.addEventListener("keyup", addListItemOnEnter);

ul.addEventListener("click", toggleDone);

ul.addEventListener("click", deleteListItem);



// let toggleDone = (event) => {
//   let liClicked = event.target;
//   liClicked.classList.toggle("done")
// }

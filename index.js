let TaskField = document.getElementById("taskField");
let btnAdd = document.getElementById("btnAdd");
let ulEL = document.getElementById("ulEL");

btnAdd.addEventListener("click", function () {
  let checkBox = document.createElement("input");
  let liEL = document.createElement("li");
  let taskText = document.getElementById("taskField").value;

  // gets the value of what we write on the TaskField and assign it to taskText field
  let textNode = document.createTextNode(taskText);

  //set attribute sets the type and then checkbox
  checkBox.setAttribute("type", "checkbox");

  ulEL.append(checkBox);
  ulEL.append(liEL);
  // append it to the li
  liEL.append(textNode);

  // clears the field
  TaskField.value = " ";

  // Nested delete button as i want it to appear when i click on the add button
  let btnDelete = document.createElement("button");
  // this sets the id dynamically which can be changed in css later
  btnDelete.id = "btnDelete";
  liEL.append(btnDelete);
  btnDelete.append("🗑️");

  // adding local storage to the todo list this saves the input of the user in local storage which can be found in application
  localStorage.setItem("todo", taskText);
  localStorage.getItem(taskText);

  // Delete method
  btnDelete.addEventListener("click", function () {
    textNode.remove();
    checkBox.remove();
    btnDelete.remove();
    // remove li element also as it still appeared before
    liEL.remove();
  });
});

let draggable = function () {
  let dropZoneContainer = document.getElementById("Container");

  ulEL.addEventListener("dragstart", function (event) {
    console.log(event);
  });

  dropZoneContainer.addEventListener("dragover", function (event) {
    event.preventDefault();
  });

  dropZoneContainer.addEventListener("drop", function () {
    dropZoneContainer.prepend(ulEL);
  });
};

draggable();

document.addEventListener("DOMContentLoaded", function () {
  const list = document.querySelector("#list");

  //attach a keydown event listener to the <ul>
  list.addEventListener("keydown", function (event) {
    if (event.target && event.target.classList.contains("task-input")) {
      if (event.key === "Enter") {
        event.preventDefault();

        //Create a new list item
        const newLi = document.createElement("li");
        newLi.className = "mark";

        //create a new checkbox input
        const newCheckBox = document.createElement("input");
        newCheckBox.type = "checkbox";
        newCheckBox.className = "check";

        //create a text input for the task
        const newTextInput = document.createElement("input");
        newTextInput.type = "text";
        newTextInput.placeholder = "New task...";
        newTextInput.className = "task-input";

        //append the checkbox and text input to the list item
        newLi.appendChild(newCheckBox);
        newLi.appendChild(newTextInput);

        //append the new list item to the <ul>
        list.appendChild(newLi);

        //focus the new text input
        newTextInput.focus();

        console.log("New task added");
      }
    }
  });
});

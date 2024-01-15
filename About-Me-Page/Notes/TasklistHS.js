const taskList = document.querySelector("#TaskL");
const date = document.querySelector("#dateInput");
const grabSubmitBtn = document.getElementById("submitBtn");
const list = document.getElementById("List");
let cList = [];

grabSubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(taskList.value);
  console.log(date.value);
  const dList = document.createElement("li"); // creates li element
  cList.push(`${taskList.value} is due by ${date.value}`);
  dList.innerHTML = cList;
  list.appendChild(dList); // adds element to ul

  cList.pop();
});

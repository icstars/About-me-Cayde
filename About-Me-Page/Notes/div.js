console.log("hello work");
const userDiv = document.querySelector("#d1");

const users = [
  { EmployeeId: 1, name: "Cadin" },
  { EmployeeId: 2, name: "Silver" },
];

//we added an event listener to listern for each click
userDiv.addEventListener("click", (e) => {
  //e (event)is the event and all the ifo
  //e shows events
  console.log(e.target.closest(".user").id); //selects the target elements
  let id = e.target.closest(".user").id; // in the event obkect, we rrab the element
  // that we clicked during that event. We then grabt the closest ekekment to itthat has the class user.
  //After that we grab the id of that ekement as the is is the same as the EmployeeID
  let user = users.find((el) => {
    // we have our users arrau and use the find method
    //the find mehtod grabs an element from an array that meeets the conditions given
    return el.EmployeeId == id;
  });
  console.log(user);
});

let list = [];

let addingToList = true;

let username;
let email;
let password;

let signUpList = (uname, em, passcode) => {
  return {
    username: uname,
    email: em,
    password: passcode,
  };
};
let signUp = () => {
  while (addingToList) {
    username = prompt("Please create your username");
    email = prompt("PLease enter your email");
    password = prompt("Please create your password");
    list.push(signUpList(username, email, password));
    console.table(list);
    if (confirm("Do you want to add another acount?")) {
      continue;
    } else {
      addingToList = false;
    }
  }
  console.table(list);
};

let askAgain = () => {
  let ask = prompt("Would you like to find someones data (y/n)");
  if (ask === "y") {
    return true;
  } else {
    return false;
  }
};

let search = () => {
  if (askAgain() == true) {
    let target = prompt("what username are you looking for");
    for (let i = 0; i < list.length; i++) {
      for (key in list[i]) {
        if (list[i][key] == target && key == "username") {
          console.log(list[i]);
        }
      }
    }
  }
};
signUp();
search();

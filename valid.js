const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = (document.getElementById("error").style.color = "red");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (firstName.value === "" || firstName.value == null) {
    messages.push("Name is Required");
  }
  if (password.value === "" || password.value == null) {
    messages.push("Please Enter A Valid Password! ");
  }
  if (password.value.length <= 6) {
    messages.push("Password Must Be Longer Than 6 Characters");
  }
  if (password.value.length > 20) {
    messages.push("Password Must Be Longer Than 6 Characters");
  }
  if (password.value === "password") {
    messages.push("Password Cannot Be Password");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});
function checkform() {
  if (
    document.getElementById("un").value == "jayem30" &&
    document.getElementById("pw").value == "jayem"
  ) {
    alert("Login Successful");
    window.location = "http://www.google.com/";
  } else {
    alert("Access denied. Valid username and password is required.");
  }
}

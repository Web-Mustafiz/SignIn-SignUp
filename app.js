let signUpBtn = document.getElementById("signUp");
let signInBtn = document.getElementById("signIn");
let container = document.getElementById("container");

signUpBtn.addEventListener("click", function () {
  container.classList.add("right-panel-active");
});

signInBtn.addEventListener("click", function () {
  container.classList.remove("right-panel-active");
});

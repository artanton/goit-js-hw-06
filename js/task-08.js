const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formEl = event.currentTarget.elements;

  const mail = formEl.email.value;
  const password = formEl.password.value;

  const submitData = {
    mail,
    password,
  };

  return validator(mail, password, submitData);
}

function validator(mail, password, submitData) {
  if (mail === "" || password === "") {
    console.log("ERROR");
    form.insertAdjacentHTML(
      "beforebegin",
      "<h2>Alert!</h2> <h3>Please fill in all fields.</h3>"
    );
  } else {
    console.log(submitData);
    form.reset();
  }
}

const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);
inputEl.addEventListener("input", onInputTextValidator);

function onInputBlur() {
  const isValid = onInputTextValidator();

  if (isValid) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
}

function onInputTextValidator() {
  const requiredLength = inputEl.getAttribute("data-length");
  const inputLength = inputEl.value.trim().length;
  return inputLength === parseInt(requiredLength);
}

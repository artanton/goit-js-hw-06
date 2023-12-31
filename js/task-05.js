const refs = {
  inputEl: document.querySelector("#name-input"),
  outputEl: document.querySelector("#name-output"),
};

refs.inputEl.addEventListener("input", onInputText);

function onInputText(event) {
    
  if (event.currentTarget.value === "" ) {
    refs.outputEl.textContent = "Anonymous";
  } else
  {
    refs.outputEl.textContent = event.currentTarget.value.trim();
  }
}

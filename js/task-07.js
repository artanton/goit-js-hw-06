const refs = {
  fontSizeCtr: document.querySelector("#font-size-control"),
  textSizeOutput: document.querySelector("#text"),
};

refs.fontSizeCtr.addEventListener("change", onSliderVol);

function onSliderVol() {
  const textSize = ` ${refs.fontSizeCtr.value}px`;
  refs.textSizeOutput.style.fontSize = textSize;
}

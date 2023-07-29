function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.body.classList.add("custom-background");
const backgroundColorOtput = document.querySelector ('.custom-background')

// const backgroundColorOtput = document.body;

const backGrColorSpan= document.querySelector ('.color');
const changeColorBtn = document.querySelector ('.change-color');

changeColorBtn.addEventListener('click', colorChanger);

function colorChanger(click){

  const randomColor = getRandomHexColor();
  backGrColorSpan.textContent = randomColor;

  backgroundColorOtput.style.backgroundColor = randomColor;

 

}


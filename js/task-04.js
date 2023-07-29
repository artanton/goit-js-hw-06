const counterValue=document.querySelector ("#value");
counterValue.textContent = 0;
counterValue.style.fontSize = "40px";

const decrementBtn = document.querySelector ('button[data-action= "decrement"]');
const incrementBtn = document.querySelector ('button[data-action = "increment"]');

const counter = {
    value : 0,

    decrement (){
        this.value -= 1;
    },

    increment () {
        this.value += 1;
    }};

    decrementBtn.addEventListener('click', function () {
        counter.decrement();

        counterValue.textContent = counter.value; 
    });

    incrementBtn.addEventListener('click', function(){
        counter.increment();

        counterValue.textContent = counter.value;
    } );
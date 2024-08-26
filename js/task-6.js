const divElem = document.querySelector('#controls')
const inputElem = document.querySelector('input[type="number"]');
const btnCreateElem = document.querySelector('button[data-create]')
const btnDestroyElem = document.querySelector('button[data-destroy]')
const containerElem = document.querySelector("div#boxes")



btnCreateElem.addEventListener("click", () => {
    const inputValue = inputElem.value;
    const amount = parseInt(inputValue)

    containerElem.innerHTML = ''

    if(amount > 0 && amount <= 100) {
        createBoxes(amount);
    } else {
        alert("The entered value is not valid! ")
    }
})

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
    }
    
    function createBoxes(amount) {
        const fragment = document.createDocumentFragment();
for(let i = 0; i < amount; i++){
    const box = document.createElement("div")
    box.style.width = `${30 + i*10}px`
    box.style.height = `${30 + i*10}px`
    box.style.backgroundColor = getRandomHexColor()
    fragment.appendChild(box)
}
containerElem.appendChild(fragment);
    }

    btnDestroyElem.addEventListener("click", () => {
        destroyBoxes();
    });


function destroyBoxes() {
containerElem.innerHTML = ''
}
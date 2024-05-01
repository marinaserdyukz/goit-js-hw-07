const inputAmount = document.querySelector('#controls input[type="number"]');
const buttonCreate = document.querySelector("#controls button[data-create]");
const buttonDestroy = document.querySelector("#controls button[data-destroy]");
const boxesDiv = document.getElementById("boxes");

buttonCreate.addEventListener("click", () => {
  const amount = parseInt(inputAmount.value);
  if (amount >= 1 && amount <= 100) {
    destroyBoxes();
    createBoxes(amount);
    inputAmount.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

buttonDestroy.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    box.style.marginBottom = "10px";
    fragment.appendChild(box);
  }
  boxesDiv.appendChild(fragment);
}

function destroyBoxes() {
  boxesDiv.innerHTML = "";
}

function getRandomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

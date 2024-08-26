const bodyElem = document.querySelector("body")
const btnElem = document.querySelector("button.change-color")
const spanElem = document.querySelector(".color")


btnElem.addEventListener("click", () => {
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;

  spanElem.textContent = `Current color: ${newColor}`
})
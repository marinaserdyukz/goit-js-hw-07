const inputElem = document.querySelector("#name-input");
const outputElem = document.querySelector("#name-output");


inputElem.addEventListener("input", () => {
    const trimmedValue = inputElem.value.trim();
    if(trimmedValue === '') {
    outputElem.textContent = "Anonymous";
    } else {
        outputElem.textContent = trimmedValue;
    }
})
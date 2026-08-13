const inputEl = document.querySelector('#name-input')
const spanEl = document.querySelector('#name-output')

inputEl.addEventListener("input", handleChange)



function handleChange(event) {
const inputSpan = event.target.value.trim();
spanEl.textContent = inputSpan;

if(inputSpan === "") {
 spanEl.textContent = "Anonymous"
} else {
     inputSpan
}
    
} 

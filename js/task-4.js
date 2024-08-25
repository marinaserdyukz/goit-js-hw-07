const form = document.querySelector("form.login-form");
const inputElems = document.querySelectorAll("input")

form.addEventListener("submit", function (event) {
event.preventDefault();
let allFieldsFilled = true;
const formInf = {};


inputElems.forEach((input)=> {
    const trimmedValue = input.value.trim();
    if(trimmedValue === '') {
        allFieldsFilled = false;
    } else {
        formInf[input.name] = trimmedValue;
        }
});


if(!allFieldsFilled){
    alert('All form fields must be filled in')
} else {
    formElem.reset()
}
console.log(formInf);

});












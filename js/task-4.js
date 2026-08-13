const formEl = document.querySelector('.login-form')

formEl.addEventListener('submit', handlerSubmit)

function handlerSubmit(event) {
     event.preventDefault();
if (event.target.elements.email.value.trim() === '' || event.target.elements.password.value.trim() === '') {
return alert('All form fields must be filled in')
} 
    const info = {
    email: event.target.elements.email.value.trim(),
    password: event.target.elements.password.value.trim()
}

console.log(info)
event.target.reset()

}









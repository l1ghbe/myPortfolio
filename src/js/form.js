
const emailInput = document.getElementById('formEmail')
const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/

const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('form');
    let formData = new FormData(myForm)
    if (emailInput.parentElement.classList.contains('validated') && regexEmail.test(emailInput.value)) {
            fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString()
        }).then(() => {
            document.querySelector('.popup-success').classList.add('notification-active');
            form.reset();
            emailInput.parentElement.classList.remove('validated')
            emailInput.style.removeProperty('border-color', 'green')
        }).catch((e) => {
            console.log(e);
            document.querySelector('.popup-wrong').classList.add('notification-active');
        })
    } else {
        alert('Please, enter the correct email')
    }
    
}

document.querySelector("form").addEventListener("submit", handleSubmit);

emailInput.addEventListener('change', inputCheck)
// emailInput.addEventListener('change', e => {
//     console.log(e.target.value);
// })

console.log(emailInput.value);

function inputCheck() {
    if (regexEmail.test(emailInput.value.trim())) {
        emailInput.parentElement.classList.add('validated')
        emailInput.style.borderColor = 'green'
    } else if (emailInput.value == ''){
        emailInput.parentElement.classList.remove('validated')
        emailInput.style.removeProperty('border-color', 'red')
    } else {
        emailInput.parentElement.classList.remove('validated')
        emailInput.style.borderColor = 'red'
    }
}
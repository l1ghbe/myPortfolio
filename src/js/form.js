// const form = document.getElementById('form');

document.querySelector("form").addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('form');
    let formData = new FormData(myForm)
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    }).then(() => {
        document.querySelector('.popup-success').style.opacity = '1';
        document.querySelector('.popup-success').style.visibility = 'visible';
        document.querySelector('.popup-success__body').style.transform = 'translateY(0px)';
        form.reset();
    }).catch((e) => {
        console.log(e);
        document.querySelector('.popup-wrong').style.opacity = '1';
        document.querySelector('.popup-wrong').style.visibility = 'visible';
        document.querySelector('.popup-wrong__body').style.transform = 'translateY(0px)';
    })
}


// form.addEventListener('submit', formSend);

// async function formSend(e) {
//     e.preventDefault();

//     let error = formValidate(form);

//     let formData = new FormData(form);

//     if (error === 0) {
//         form.classList.add('_sending');
//         let response = await fetch('sendmail.php', {
//             method: 'POST',
//             body: formData
//         });
//         if (response.ok) {
//             // let result = await response.json();
//             // alert(result.message)
//             document.querySelector('.popup-success').style.opacity = '1';
//             document.querySelector('.popup-success').style.visibility = 'visible';
//             document.querySelector('.popup-success__body').style.transform = 'translateY(0px)';
//             form.reset();
//             form.classList.remove('_sending');
//         } else {
//             document.querySelector('.popup-wrong').style.opacity = '1';
//             document.querySelector('.popup-wrong').style.visibility = 'visible';
//             document.querySelector('.popup-wrong__body').style.transform = 'translateY(0px)';
//             form.classList.remove('_sending');
//         }
//     } else {
//         alert('Fill the required fields')
//     }

// }

// function formValidate(form) {
//     let error = 0;
//     let formReq = document.querySelectorAll('._req');

//     for (let index = 0; index < formReq.length; index++) {
//         const input = formReq[index];
//         formRemoveError(input);

//         if (input.classList.contains('_email')) {
//             if (emailTest(input)) {
//                 formAddError(input);
//                 error++;
//             }
//         } else {
//             if (input.value === '') {
//                 formAddError(input);
//                 error++;
//             }
//         }
//     }
//     return error;
// }

// function formAddError(input) {
//     input.parentElement.classList.add('_error');
//     input.classList.add('_error');
// }
// function formRemoveError(input) {
//     input.parentElement.classList.remove('_error');
//     input.classList.remove('_error');
// }
// function emailTest(input) {
//     return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// }

// "use strict"

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.getElementById('form');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let error = formValidate(form);

//         let formData = new FormData(form);

//         if (error === 0) {
//             form.classList.add('_sending');
//             let response = await fetch('sendmail.php', {
//                 method: 'POST',
//                 body: formData
//             });
//             if (response.ok) {
//                 let result = await response.json();
//                 alert(result.message);
//                 form.reset();
//                 form.classList.remove('_sending');
//             } else {
//                 alert("Error");
//                 form.classList.remove('_sending');
//             }
//         } else {
//             alert('Fill the required fields')
//         }

//     }

//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');

//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input);

//             if (input.classList.contains('_email')) {
//                 if (emailTest(input)) {
//                     formAddError(input);
//                     error++;
//                 }
//             } else {
//                 if (input.value === '') {
//                     formAddError(input);
//                     error++;
//                 }
//             }
//         }
//         return error;
//     }

//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }
//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//     function emailTest(input) {
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }
// })


const password = document.querySelector('[data-password]')
const confirmPassword = document.querySelector('[data-password-confirm]')
const email = document.querySelector('[data-email]')
const message = document.querySelector('[data-validation-message]')
function validatePassword(pass,confirm) {
    confirm.addEventListener('blur', () => {
        if (pass.value !== "" && pass.value === confirm.value) {
            
            message.innerHTML = "Passwords match!"
        } else if (pass.value !== "" && pass.value !== confirm.value) {
            message.innerHTML = "Passwords do not match."
        }
    })

}
function checkValidity(form) {
    form.addEventListener('blur', () => {
        if (!form.checkValidity()) {
            message.innerHTML = form.validationMessage
        } else {
            message.innerHTML = "Input OK"
        }
    })

}
checkValidity(email)
validatePassword(password,confirmPassword)
const password = document.querySelector('[data-password]')
const confirmPassword = document.querySelector('[data-password-confirm]')
const email = document.querySelector('[data-email]')
const message = document.querySelector('[data-validation-message]')
const form = document.querySelector('[data-form]')
let validPass = false
function validatePassword(pass, confirm) {
    confirm.addEventListener('blur', () => {
        if (pass.value !== "" && pass.value === confirm.value) {
            message.innerHTML = "Passwords match!"
            validPass = true
            onSubmit()
        } else if (pass.value !== "" && pass.value !== confirm.value) {
            message.innerHTML = "Passwords do not match."
            validPass = false
            onSubmit()
        } else return validPass
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

function onSubmit(e) {
    if (validPass) {
        return
    } else if (!validPass) {
        e.preventDefault()
    }
}

form.addEventListener('submit', onSubmit)
checkValidity(email)
validatePassword(password, confirmPassword)
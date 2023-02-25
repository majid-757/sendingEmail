// variables
const sendBtn = document.querySelector('#sendBtn'),
    email = document.querySelector('#email'),
    subject = document.querySelector('#subject'),
    message = document.querySelector('#message')








// eventListeners
eventListeners()
function eventListeners() {
    // app initialization
    document.addEventListener("DOMContentLoaded", appInit)

    // validating fields
    email.addEventListener('blur', validateField)
    subject.addEventListener('blur', validateField)
    message.addEventListener('blur', validateField)
}







// functions
function appInit() {
    sendBtn.disabled = true
}



// validation fields of the form
function validateField() {


    // validate email field
    validateLength(this)
    if (this.type == "email") {
        validateEmail(this)
    }
    
    let error = document.querySelectorAll('.error')
    if (email.value !== '' && subject.value !== '' && message.value !== '') {
        if (error.length === 0) {
            sendBtn.disabled = false
        }
    }
}


function validateLength(field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = "green"
        field.classList.remove("error")
    } else {
        field.style.borderBottomColor = "red"
        field.classList.add("error")
    }

}


// validate email field contain @
function validateEmail(field) {
    
    const emailText = field.value
    
    if(field.value.includes("@")) {

        field.style.borderBottomColor = "green"
        field.classList.remove("error")
    } else {

        field.style.borderBottomColor = "red"
        field.classList.add("error")
    }
}  









// variables
const sendBtn = document.querySelector("#sendBtn"),
  email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message"),
  resetBtn = document.querySelector("#resetBtn"),
  form = document.querySelector("#email-form");

// eventListeners
eventListeners();
function eventListeners() {
  // app initialization
  document.addEventListener("DOMContentLoaded", appInit);

  // validating fields
  email.addEventListener("blur", validateField);
  subject.addEventListener("blur", validateField);
  message.addEventListener("blur", validateField);

  // reset Btn
  resetBtn.addEventListener("click", resetForm);

  // submit form and show gif
  form.addEventListener("submit", submitForm);
}

// functions
function appInit() {
  sendBtn.disabled = true;
}

// sending email and submit the form
function submitForm(e) {
  e.preventDefault();

  // show the spinner
  const spinner = document.getElementById("spinner");
  spinner.style.display = "block";

  // make seccond gif
  const sendEmailImg = document.createElement("img");
  sendEmailImg.src = "img/mail.gif";
  sendEmailImg.style.display = "block";

  // show the email send image
  setTimeout(function () {
    // hide first spinner
    spinner.style.display = "none";

    // append image to the html
    const loaders = document.querySelector("#loaders");
    loaders.appendChild(sendEmailImg);

    //rese form and remove
    setTimeout(() => {
      resetForm();
      sendEmailImg.remove();
    }, 5000);
  }, 3000);
}

// validation fields of the form
function validateField() {
  // validate email field
  validateLength(this);
  if (this.type == "email") {
    validateEmail(this);
  }

  let error = document.querySelectorAll(".error");
  if (email.value !== "" && subject.value !== "" && message.value !== "") {
    if (error.length === 0) {
      sendBtn.disabled = false;
    }
  }
}

function validateLength(field) {
  if (field.value.length > 0) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

// validate email field contain @
function validateEmail(field) {
  const emailText = field.value;

  if (field.value.includes("@")) {
    field.style.borderBottomColor = "green";
    field.classList.remove("error");
  } else {
    field.style.borderBottomColor = "red";
    field.classList.add("error");
  }
}

// reset form with button
function resetForm() {
  form.reset();
}

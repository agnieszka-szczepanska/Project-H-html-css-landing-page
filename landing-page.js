const alert = document.querySelector(".inputAlert");
const getStarted = document.querySelector(".getStarted");

const checkEmail = () => {
  const emailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const email = document.querySelector(".formEmail").value;
  let Result = email.match(emailPattern);

  if (Result == null) {
    alert.innerHTML = "Please check your email";
    document.querySelector(".formEmail").classList.add("redBorder");
  }
};
getStarted.addEventListener("click", checkEmail);

// SECOND FORM
const alert2 = document.querySelector(".inputAlert2");
const getStarted2 = document.querySelector(".getStarted2");

const checkEmail2 = () => {
  const emailPattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  const email = document.querySelector(".formEmail2").value;
  let Result = email.match(emailPattern);

  if (Result == null) {
    alert2.innerHTML = "Please check your email";
    document.querySelector(".formEmail2").classList.add("redBorder");
  }
};
getStarted2.addEventListener("click", checkEmail2);

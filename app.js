const btnSubmit = document.querySelector(".inputBtn")
const inputFirstName = document.querySelector(".inputFirstName")
const inputLastName = document.querySelector(".inputLastName")
const inputEmail = document.querySelector(".inputEmail")
const inputPassword = document.querySelector(".inputPassword")
const textErrorFirstName = document.querySelector(".textErrorFirstName")
const textErrorLastName = document.querySelector(".textErrorLastName")
const textErrorEmail = document.querySelector(".textErrorEmail")
const textErrorPassword = document.querySelector(".textErrorPassword")


btnSubmit.addEventListener("click", (e)=>{
    e.preventDefault();

    let expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

    let emailValido = expReg.test(inputEmail.value)
    
    

    if(inputEmail.classList.contains("errorIcon")){
        inputEmail.classList.remove("errorIcon")
        textErrorEmail.classList.remove("textErrorAdd")
    }else{
        if(!emailValido){
            inputEmail.classList.add("errorIcon")
            textErrorEmail.classList.add("textErrorAdd")
            }
    }
    
    if(inputFirstName.classList.contains("errorIcon")){
        inputFirstName.classList.remove("errorIcon")
        textErrorFirstName.classList.remove("textErrorAdd")
    }else{
        if(inputFirstName.value.length === 0){
            inputFirstName.classList.add("errorIcon")
            textErrorFirstName.classList.add("textErrorAdd")
        }
    }

    if(inputLastName.classList.contains("errorIcon")){
        inputLastName.classList.remove("errorIcon")
        textErrorLastName.classList.remove("textErrorAdd")
    }else{
        if(inputLastName.value.length === 0){
            inputLastName.classList.add("errorIcon")
            textErrorLastName.classList.add("textErrorAdd")
        }
    }

    if(inputPassword.classList.contains("errorIcon")){
        inputPassword.classList.remove("errorIcon")
        textErrorPassword.classList.remove("textErrorAdd")
    }else{
        if(inputPassword.value.length === 0){
            inputPassword.classList.add("errorIcon")
            textErrorPassword.classList.add("textErrorAdd")
        }
    }

})
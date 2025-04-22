const form = document.getElementById('form-ordering');
const inputList = document.querySelectorAll('.form-field');


form.addEventListener("submit", (e) => {
   
    e.preventDefault();   
 
    inputList.forEach((inputElement) => {

        let textMessage = "";
        inputElement.classList.remove("invalid");
        inputElement.classList.remove("valid");
       inputElement.closest(".form-item").querySelector(".form__message-validate").innerHTML = "";

        if(inputElement.hasAttribute("required") && inputElement.value == ""){
            textMessage += "поле должно быть заполнено <br>"   
        }
        
        if(inputElement.type == "email" && !isValidEmail(inputElement.value)) {
            textMessage += "email должен содержать символ @ <br>" 
        }

        if(inputElement.type == "tel" && !isValidTel(inputElement.value)) {
            textMessage += "телефон должен содержать не меньше 7 символов <br>" 
        }

        if(textMessage != ""){
           inputElement.closest(".form-item").querySelector(".form__message-validate").innerHTML=textMessage;
            inputElement.classList.add("invalid");
        } else {
            inputElement.classList.add("valid");
        }
    }) 
});

function isValidEmail(email) {  
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    return pattern.test(email);
}

function isValidTel(tel) {
    return tel.length >= 7;
}

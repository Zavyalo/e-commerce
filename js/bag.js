'use strict'

const menu = document.querySelector(".header")
const burgerBtn = document.querySelector(".burger")

burgerBtn.addEventListener('click', ()=>{
    menu.classList.toggle("bag--open"); //добавить класс
})
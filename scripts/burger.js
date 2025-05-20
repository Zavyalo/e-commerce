const btnShowMenuPanel = document.querySelector(".btn-show-burger-panel");
const menuPanel = document.querySelector(".catalog__burger");

btnShowMenuPanel.addEventListener("click", () => {
    menuPanel.classList.add("show-burger-panel");
})


const btnCloseMenuPanel = document.querySelector(".btn-close-burger-panel");
btnCloseMenuPanel.addEventListener("click", () => {
    menuPanel.classList.remove("show-burger-panel");
})
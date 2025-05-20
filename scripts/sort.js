const btnShowFilterPanel = document.getElementById("btn-show-filter-panel");
const filterPanel = document.querySelector(".catalog__filter");

btnShowFilterPanel.addEventListener("click", () => {
    filterPanel.classList.add("show-filter-panel");
})


const btnCloseFilterPanel = document.getElementById("btn-close-filter-panel");
btnCloseFilterPanel.addEventListener("click", () => {
    filterPanel.style.transition="transform 0.7s ease-in-out";
    filterPanel.classList.remove("show-filter-panel");
    setInterval(()=>{
        filterPanel.style.transition="";
    },3000)
})
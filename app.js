const navLists = document.querySelectorAll(".drop-menu");
const navSlide = document.querySelector(".mobile-links");
const closeSlide = document.querySelector(".close-icon");
const openSlide = document.querySelector(".open-slide");
const main = document.querySelector(".main");


navLists.forEach(function (navList) {
    navList.addEventListener("click", function () {

        const dropdowns = this.children[3];
        const arrowDown = this.children[1];
        const arrowUp = this.children[2];
        dropdowns.classList.toggle("hide")
        if (arrowUp.classList.contains("hide")) {
            arrowUp.classList.remove("hide");
            arrowDown.classList.add("hide");
        }else{
            arrowDown.classList.remove("hide");
            arrowUp.classList.add("hide");
        }
    }
)
});

openSlide.addEventListener("click", () => {
    navSlide.classList.remove("hide");
    main.classList.add("tint");
    document.querySelector(".learn-more")
.disabled = true;
})
closeSlide.addEventListener("click", () => {
    navSlide.classList.add("hide");
    main.classList.remove("tint");
    document.querySelector(".learn-more")
    .disabled = false;
})


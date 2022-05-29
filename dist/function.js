let [imgSlide, textSlide] = document.querySelectorAll(".slider");

let imgCount = parseInt(imgSlide.children.length);


let widthCount = () => {
    let imgWindow = document.querySelector(".hero__top__left__img-container");
    let textWindow = document.querySelector(".hero__top__right");

    let windowWidth = parseInt(getComputedStyle(imgWindow).getPropertyValue("width"));
    let textWidth = parseInt(getComputedStyle(textWindow).getPropertyValue("width"));;

    imgSlide.style.setProperty("--window-width", `${windowWidth}px`);
    textSlide.style.setProperty("--window-width", `${textWidth}px`);

    imgSlide.style.setProperty("width", `${windowWidth * imgCount}px`);
    textSlide.style.setProperty("width", `${textWidth * imgCount}px`);

    textSlide.style.setProperty("--slider-index", imgCount - 1);
}
widthCount()
window.addEventListener("resize", widthCount)

let buttons = document.querySelectorAll(".hero__top__right__btn-wrapper > *");
buttons.forEach(e => e.addEventListener("click", sliding))

function sliding() {
    let imgIndex = parseInt(getComputedStyle(imgSlide).getPropertyValue("--slider-index"));;
    let textIndex = parseInt(getComputedStyle(textSlide).getPropertyValue("--slider-index"));

    if (this.classList.contains("next")) {
        if (imgIndex < imgCount - 1) {
            imgSlide.style.setProperty("--slider-index", imgIndex + 1);
            textSlide.style.setProperty("--slider-index", textIndex - 1);
        }
    }
    if (this.classList.contains("previous")) {
        if (0 < imgIndex) {
            imgSlide.style.setProperty("--slider-index", imgIndex - 1);
            textSlide.style.setProperty("--slider-index", textIndex + 1);
        }
    }
}



let menu = document.querySelector(".menu")
let close = document.querySelector(".close")
let navConDark = document.querySelector(".nav-con-dark-bg")
menu.addEventListener("click", () => {
    navConDark.classList.add("active")
})
close.addEventListener("click", () => {
    navConDark.classList.remove("active")
})
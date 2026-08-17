const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");
const main = document.querySelector("main");

hamburger.addEventListener("click", (e) => {
    console.log("clicked");
    if (nav.classList.contains("open")) {
        nav.classList.remove("open");
        main.classList.add("full");
    }
    else {
        nav.classList.add("open");
        main.classList.remove("full")
    }
})
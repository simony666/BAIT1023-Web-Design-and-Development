let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        // scrolling up
        document.querySelector("header").classList.remove("hidden");
        document.querySelector("header").classList.add("visible");
    } else {
        // scrolling down
        document.querySelector("header").classList.remove("visible");
        document.querySelector("header").classList.add("hidden");
    }
    prevScrollPos = currentScrollPos;
}

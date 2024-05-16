function toggleNavbar () {

    var menuButtonCountries = document.getElementById("dropdownCountries-button");
    var navbarDropCountries = document.getElementById("dropdownCountries");
    var menuButton = document.getElementById("dropdown-button");
    var navbarDrop = document.getElementById("dropdown");

    if (menuButton && navbarDrop) {
        menuButton.addEventListener("click", () => {
            var statusDrop = navbarDrop.classList.contains("hidden");
            if (statusDrop) {
                navbarDrop.classList.remove("hidden");
            } else {
                navbarDrop.classList.add("hidden");
            }
        });
    } else {
        console.error("menuButton or navbarDrop not found.");

    }
    if (menuButtonCountries && navbarDropCountries) {
        menuButtonCountries.addEventListener("click", () => {
            console.log("hello again")
            var statusDrop = navbarDropCountries.classList.contains("hidden");
            if (statusDrop) {
                navbarDropCountries.classList.remove("hidden");
            } else {
                navbarDropCountries.classList.add("hidden");
            }
        });
    } else {
        console.error("menuButton or navbarDrop not found.");
    }
};



document.addEventListener("scroll", () => {
    var scrollY = window.scrollY;
    var stickyWindow = document.getElementById("stickyWindow");
    if (stickyWindow != null) {
        if(scrollY > 500){
            stickyWindow.classList.add("sticky")
        }else{
            stickyWindow.classList.remove("sticky")
        }
        if(scrollY > 1680){
            stickyWindow.classList.add("hidden")
        }else{
            stickyWindow.classList.remove("hidden")
        }
    }
})



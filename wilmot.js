function toggleMobileMenu() {
    let menu = document.getElementById("mobile-menu");
    if (menu.classList.contains("mobileMenu")) {
        menu.setAttribute("class", "mobileMenu-open");
    } else {
        menu.setAttribute("class", "mobileMenu")
    }
}
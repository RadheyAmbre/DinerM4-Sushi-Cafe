window.addEventListener("scroll", () => {
    const scrolled = window.scrollY
    const navBar = document.querySelector('.navbar');
    const navBarLogo = document.querySelector('.navbar-brand span');

    if (scrolled > 0) {
        // Navbar stick add
        navBar.classList.add('sticky');
        navBar.classList.remove('no-sticky');

        // Navbar logo size change
        navBarLogo.classList.add('navbar-logo-animation');
        navBarLogo.classList.remove('navbar-logo');
    }
    else {
        // Navbar stick remove
        navBar.classList.remove('sticky');
        navBar.classList.add('no-sticky');

        // Navbar logo size change
        navBarLogo.classList.remove('navbar-logo-animation');
        navBarLogo.classList.add('navbar-logo');
    }
});

$(document).ready(function () {
    $('#navIcon').click(function () {
        $(this).toggleClass('open');
        $('.navbar').toggleClass('col');
    });
});


function appear() {
    document.querySelector(".language").classList.toggle("display");
}
function appear_nav() {
    document.querySelector(".mini-nav").style.display = "block";
}
function hide_nav() {
    document.querySelector(".mini-nav").style.display = "none";
}
function appear_services() {
    document.querySelector(".nav-services").classList.toggle("display");
}
function appear_menu_services() {
    document.querySelector(".inner-ul").classList.toggle("display");
}
function appear_menu_projects() {

    document.querySelector(".inner-ul2").classList.toggle("display");

}
function mini_nav_language() {

    document.querySelector(".mini-nav-language").classList.toggle("display");
}


function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}







document.addEventListener('DOMContentLoaded', function (event) {
    event.preventDefault();
    const links = document.querySelectorAll('.nav-link');
    links.forEach(function (link) {

        link.addEventListener('click', function (e) {
            // e.preventDefault();

            links.forEach(function (link) {
                link.classList.remove('active');
            });


            this.classList.toggle('active');

        });
    });
});

const main = document.querySelector('main');
main.addEventListener('click', () => {
    document.querySelector(".language").classList.remove("display");
})

const main2 = document.querySelector('main');
main2.addEventListener('click', () => {
    document.querySelector(".nav-services").classList.remove("display");
})

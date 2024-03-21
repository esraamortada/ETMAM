
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

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
});



const subscribe = document.getElementById('subscribe');
function saveEmail() {
    fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        body: JSON.stringify({
            "email": document.getElementById('mail').value,
        }),
        headers: {
            "Content-type": "application/json",
            "api-key": "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",
        }
    },).catch((err) => {
        console.log(err);
    })
}
function reset2(){
    document.getElementById('mail').value = '';
}

subscribe.addEventListener('submit', (e) => {
    e.preventDefault();
    saveEmail();
    reset2();
})


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
const header = document.querySelector('.header');
header.addEventListener('click', () => {
    document.querySelector(".language").classList.remove("display");
})
const main2 = document.querySelector('main');
main2.addEventListener('click', () => {
    document.querySelector(".nav-services").classList.remove("display");
})
const header2 = document.querySelector('.header');
header.addEventListener('click', () => {
    document.querySelector(".nav-services").classList.remove("display");
})















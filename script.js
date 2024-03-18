


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







document.addEventListener('DOMContentLoaded', function (event) {
    event.preventDefault();
    const links = document.querySelectorAll('.nav-link');
    links.forEach(function (link) {

        link.addEventListener('click', function (e) {
            // e.preventDefault();

            links.forEach(function (link) {
                link.classList.remove('active');
            });


            this.classList.add('active');
        });
    });
});








// function checklang(){

//     localStorage.setItem('direction', 'ltr');

//     const currentlang = localStorage.getItem('language');

//     if (currentlang === 'arabic') {
//         document.documentElement = 'rtl';

//     }
//     else {
//         document.documentElement = 'ltr';
//     }


// }










// function change_language() {
//     localStorage.setItem('direction', 'ltr');

//     const currentlang = localStorage.getItem('language');

//     if (currentlang === 'arabic') {
//         document.documentElement = 'rtl';

//     }
//     else {
//         document.documentElement = 'ltr';
//     }



//     document.querySelector(".language").classList.toggle("right");
//     // document.querySelector("body").style.direction = "rtl";

//     document.querySelector(".rotated-img").style.borderTopLeftRadius = "50%";
//     document.querySelector(".rotated-img").style.borderBottomLeftRadius = "50%";
//     document.querySelector(".rotated-img").style.borderTopRightRadius = "0";
//     document.querySelector(".rotated-img").style.borderBottomRightRadius = "0";
//     document.querySelector(".Aboutus-header").style.padding = "0";
//     document.querySelector(".card-container ").style.margin = "0 10% 0 0";





//     // document.querySelector(".blog-img").style.transform = "rotate(360deg)";
//     document.querySelector(".blog-img").style.borderTopLeftRadius = "0";
//     document.querySelector(".blog-img").style.borderBottomLeftRadius = "0";
//     document.querySelector(".blog-img").style.borderTopRightRadius = "50%";
//     document.querySelector(".blog-img").style.borderBottomRightRadius = "50%";
//     document.querySelector(".blog-img").style.margin = "0 auto 0 0";

// }



function change_style() {
    document.querySelector(".language").classList.toggle("right");


    document.querySelector(".rotated-img").style.borderTopLeftRadius = "50%";
    document.querySelector(".rotated-img").style.borderBottomLeftRadius = "50%";
    document.querySelector(".rotated-img").style.borderTopRightRadius = "0";
    document.querySelector(".rotated-img").style.borderBottomRightRadius = "0";
    document.querySelector(".Aboutus-header").style.padding = "0";
    document.querySelector(".card-container ").style.margin = "0 10% 0 0";





    document.querySelector(".blog-img").style.borderTopLeftRadius = "0";
    document.querySelector(".blog-img").style.borderBottomLeftRadius = "0";
    document.querySelector(".blog-img").style.borderTopRightRadius = "50%";
    document.querySelector(".blog-img").style.borderBottomRightRadius = "50%";
    document.querySelector(".blog-img").style.margin = "0 auto 0 0";

}




country = {
    lang: 'arabic',
    dir: 'rtl'
}



function setLang(country) {
    localStorage.setItem('country', JSON.stringify(country));
}

setLang(country);


console.log(localStorage.getItem('country'));





function changeLang() {
    if (localStorage.getItem('country')) {

        if (JSON.parse(localStorage.getItem('country') || '').lang === 'arabic') 
        
        {
            const country = {
                lang: 'english',
                dir: 'ltr'
            }
            setLang(country);
            document.querySelector("body").style.direction = "ltr"

        } else {
            const country = {
                lang: 'arabic',
                dir: 'rtl'
            }
            setLang(country);
            document.querySelector("body").style.direction = "rtl"
            change_style();
        }
    }
}





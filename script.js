


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

















function change_style_ltr() {
    document.querySelector(".language").classList.add("right");


    document.querySelector(".rotated-img").style.borderTopLeftRadius = "0%";
    document.querySelector(".rotated-img").style.borderBottomLeftRadius = "0%";
    document.querySelector(".rotated-img").style.borderTopRightRadius = "50%";
    document.querySelector(".rotated-img").style.borderBottomRightRadius = "50%";
    document.querySelector(".Aboutus-header").style.padding = "0";
    document.querySelector(".card-container ").style.margin = "0 0 0 10%";
    // document.querySelector(".rotated-img").classList.toggle('rotate-arabic');
    // document.querySelector(".rotated-img").classList.remove('rotate-english');




    document.querySelector(".blog-img").style.borderTopLeftRadius = "50%";
    document.querySelector(".blog-img").style.borderBottomLeftRadius = "50%";
    document.querySelector(".blog-img").style.borderTopRightRadius = "0%";
    document.querySelector(".blog-img").style.borderBottomRightRadius = "0%";
    // document.querySelector(".blog-img").classList.toggle('blog-arabic');
    document.querySelector(".blog-img").style.margin = "0 0 0 auto";

}

function change_language_english() {
    document.querySelector("body").style.direction = "ltr";
    document.querySelector(".language").classList.remove("right");


}
function change_style() {
    document.querySelector(".language").classList.add("right");


    document.querySelector(".rotated-img").style.borderTopLeftRadius = "50%";
    document.querySelector(".rotated-img").style.borderBottomLeftRadius = "50%";
    document.querySelector(".rotated-img").style.borderTopRightRadius = "0";
    document.querySelector(".rotated-img").style.borderBottomRightRadius = "0";
    document.querySelector(".Aboutus-header").style.padding = "0";
    document.querySelector(".card-container ").style.margin = "0 10% 0 0";
    document.querySelector(".rotated-img").classList.toggle('rotate-arabic');
    // document.querySelector(".rotated-img").classList.remove('rotate-english');




    document.querySelector(".blog-img").style.borderTopLeftRadius = "0";
    document.querySelector(".blog-img").style.borderBottomLeftRadius = "0";
    document.querySelector(".blog-img").style.borderTopRightRadius = "50%";
    document.querySelector(".blog-img").style.borderBottomRightRadius = "50%";
    document.querySelector(".blog-img").classList.toggle('blog-arabic');
    // document.querySelector(".blog-img").style.margin = "0 auto 0 0";

}
function change_language_english() {
    document.querySelector("body").style.direction = "ltr";
    document.querySelector(".language").classList.remove("right");


}


function checkdir(direction){
    if(direction === 'rtl'){
        change_style();
        
    }
    else{
        change_style_ltr();
    }
}



checkLang();
function checkLang() {
    if (localStorage.getItem('country')) {
        const country = JSON.parse(localStorage.getItem('country'));
        if(country.dir === 'rlt'){
            change_style();
        }
        document.body.dir = country.dir;
        console.log(JSON.parse(localStorage.getItem('country')));
    }
}




function setLang(country) {
    localStorage.setItem('country', JSON.stringify(country));
    document.body.dir = country.dir
}

function changeLang(direction) {
    console.log(direction);
    console.log(localStorage.getItem('country'));
    if (localStorage.getItem('country')) {
        let country =JSON.parse(localStorage.getItem('country'));
        console.log(direction);
        console.log(country.dir != direction);
        if(country.dir != direction){
            
            country={
                dir: direction
            }
           
            
           
            console.log(direction);

        }
        setLang(country);
        checkdir(direction);
      
    } else {
        const country = {
            lang: 'english',
            dir: 'ltr'
        }
        setLang(country);
    }
}




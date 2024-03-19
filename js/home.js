function change_style_ltr() {
    document.querySelector(".language").classList.remove("right");


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


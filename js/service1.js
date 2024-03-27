function change_style_ltr() {
    document.querySelector(".language").classList.remove("right");


    document.querySelector(".rotated-img").style.borderTopLeftRadius = "0%";
    document.querySelector(".rotated-img").style.borderBottomLeftRadius = "0%";
    document.querySelector(".rotated-img").style.borderTopRightRadius = "50%";
    document.querySelector(".rotated-img").style.borderBottomRightRadius = "50%";
    
    document.querySelector(".footer .input input").classList.remove('arabic-footer');
    document.querySelector(".mini-nav").style.right='0';
    document.querySelector(".mini-nav").style.left='unset';
    document.querySelector('.lang-img').src ="images/flag.svg";
    document.querySelector(".language").classList.remove("display");
    document.querySelector(".select-text").textContent="English (UK)";
    document.querySelector('.lang-img2').src ="images/flag.svg";

    document.querySelector(".select-text2").textContent="English (UK)";
    
   
    document.querySelectorAll('.i').forEach((i)=>{
        i.classList.remove("change-i2")
    });
    document.querySelector(".footer-img").classList.remove("footer-arabic");
    document.querySelector("#icon").classList.remove('change-i');
  





}


function change_style() {
    document.querySelector(".language").classList.add("right");


    document.querySelector(".rotated-img").style.borderTopLeftRadius = "50%";
    document.querySelector(".rotated-img").style.borderBottomLeftRadius = "50%";
    document.querySelector(".rotated-img").style.borderTopRightRadius = "0";
    document.querySelector(".rotated-img").style.borderBottomRightRadius = "0";
    
    document.querySelector(".footer .input input").classList.add('arabic-footer');
    // document.querySelector(".rotated-img").style.margin = "0 auto 0 0";
    document.querySelector(".mini-nav").style.right='unset';
    document.querySelector(".mini-nav").style.left='0';
    document.querySelector('.lang-img').src ="images/saudiflag.svg";
    document.querySelector(".language").classList.remove("display");
    document.querySelector(".select-text").textContent="Arabic (KSA)";
    document.querySelector('.lang-img2').src ="images/saudiflag.svg";
    document.querySelector(".select-text2").textContent="Arabic (KSA)";

   
    document.querySelectorAll('.i').forEach((i)=>{
        i.classList.add("change-i2")
    });
    document.querySelector(".footer-img").classList.add("footer-arabic");
    document.querySelector("#icon").classList.remove('change-i');
    // document.querySelector('body').classList.add("arabic");




}

function checkdir(direction) {
    if (direction === 'rtl') {
        change_style();

    }
    else {
        change_style_ltr();
    }
}



checkLang();

function checkLang() {

    if (localStorage.getItem('country')) {
        

        const country = JSON.parse(localStorage.getItem('country'));
        console.log(country);
        if (country.dir == 'rtl') {
            change_style();
          

        }
        document.body.dir = country.dir;
        console.log(JSON.parse(localStorage.getItem('country')));
    } else {
        const country = {
            lang: 'english',
            dir: 'ltr'
        }
        setLang(country);
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
        let country = JSON.parse(localStorage.getItem('country'));
        console.log(direction);
        console.log(country.dir != direction);
        if (country.dir != direction) {

            country = {
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
    },).then(response =>{
        if(response.ok){
            document.getElementById('subscribe-text').textContent ="Congratulations your email saved!!!!";
            setTimeout(()=>{document.getElementById('subscribe-text').textContent =""},3000);
        }
    })
    .catch((err) => {
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



function appear() {
    document.querySelector(".language").classList.toggle("display");
    document.querySelector("#icon").classList.toggle('change-i');
}
function appear_nav() {
    document.querySelector(".mini-nav").style.display = "block";
}
function hide_nav() {
    document.querySelector(".mini-nav").style.display = "none";
}
let activeFlag = false;
function appear_services() {
    document.querySelector(".nav-services").classList.toggle("display");

    activeFlag = !activeFlag;
    if (!activeFlag) {
        document.querySelector("#services").classList.remove("active");
    } else {
        document.querySelector("#services").classList.add("active");
    }
}
function appear_menu_services() {
    document.querySelector(".inner-ul").classList.toggle("display");
    document.querySelector("#i2").classList.toggle("change-i");
}
function appear_menu_projects() {

    document.querySelector(".inner-ul2").classList.toggle("display");
    document.querySelector("#i3").classList.toggle("change-i");

}
function mini_nav_language() {

    document.querySelector(".mini-nav-language").classList.toggle("display");
    document.querySelector("#icon2").classList.toggle('change-i');
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
    document.querySelector("#services").classList.remove("active");
    activeFlag = !activeFlag
})
const header2 = document.querySelector('.header');
header.addEventListener('click', () => {
    document.querySelector(".nav-services").classList.remove("display");
    document.querySelector("#services").classList.remove("active");
    activeFlag = !activeFlag

})




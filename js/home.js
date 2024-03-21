function change_style_ltr() {
    document.querySelector(".language").classList.remove("right");


    document.querySelector(".rotated-img").style.borderTopLeftRadius = "0%";
    document.querySelector(".rotated-img").style.borderBottomLeftRadius = "0%";
    document.querySelector(".rotated-img").style.borderTopRightRadius = "50%";
    document.querySelector(".rotated-img").style.borderBottomRightRadius = "50%";
    document.querySelector(".Aboutus-header").style.padding = "0";
    document.querySelector(".card-container ").style.margin = "0 0 0 10%";





    document.querySelector(".blog-img").style.borderTopLeftRadius = "50%";
    document.querySelector(".blog-img").style.borderBottomLeftRadius = "50%";
    document.querySelector(".blog-img").style.borderTopRightRadius = "0%";
    document.querySelector(".blog-img").style.borderBottomRightRadius = "0%";
   
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






    document.querySelector(".blog-img").style.borderTopLeftRadius = "0";
    document.querySelector(".blog-img").style.borderBottomLeftRadius = "0";
    document.querySelector(".blog-img").style.borderTopRightRadius = "50%";
    document.querySelector(".blog-img").style.borderBottomRightRadius = "50%";

    // document.querySelector(".blog-img").style.margin = "0 auto 0 0";

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


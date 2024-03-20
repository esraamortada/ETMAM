function change_style_ltr() {
    document.querySelector(".language").classList.remove("right");


    document.querySelector(".rotated-img").style.borderTopLeftRadius = "50%";
    document.querySelector(".rotated-img").style.borderBottomLeftRadius = "50%";
    document.querySelector(".rotated-img").style.borderTopRightRadius = "0%";
    document.querySelector(".rotated-img").style.borderBottomRightRadius = "0%";





}


function change_style() {
    document.querySelector(".language").classList.add("right");


    document.querySelector(".rotated-img").style.borderTopLeftRadius = "0%";
    document.querySelector(".rotated-img").style.borderBottomLeftRadius = "0%";
    document.querySelector(".rotated-img").style.borderTopRightRadius = "50%";
    document.querySelector(".rotated-img").style.borderBottomRightRadius = "50%";




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



/*contact form*/



// const contactForm = document.getElementById('contactForm');
// const messageText = document.getElementById('message-text');


// const sendmail = (e) => {
//     e.preventDefault();



//     emailjs.sendForm('service_alg833l', 'template_qh3jwzb', '#contactForm', 'k5erYSZHagyxy91Gl')
//         .then(
//             () => {
//                 messageText.textContent = 'message sent successfully'
//                 setTimeout(() => {
//                     messageText.textContent = '',
//                         window.location.href = 'confirm-contact.html';


//                 }, 3000)
//             },
//             () => {
//                 messageText.textContent = 'message not sent'
//                 setTimeout(() => {
//                     messageText.textContent = ' try agin'

//                 }, 1000)
//             }

//         )
// }

const contactForm = document.getElementById('contactForm');



function sendEmail() {

    Email.send({
        SecureToken: "25d1034c-6d8f-4d41-bf8c-809071d084cb",
        Host: "smtp.elasticemail.com",
        Port: 2525,
        Username: "em9002648@gmail.com",
        Password: "B21F79947EEA4652C61D3041BFA33B414792",
        To: 'esraamortada809@gmail.com',
        From: 'em9002648@gmail.com',
        Subject: "This is the subject",
        Body: "Name:" + document.getElementById('name').value +
            "<br> Email: " + document.getElementById('email').value +
            "<br> Phone: " + document.getElementById('phone').value +
            "<br> Message: " + document.getElementById('message').value

    }).then(
        // message => alert(message)
        navigateToPage('confirm-contact.html')
    );


}
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail();
    reset();
});


//B21F79947EEA4652C61D3041BFA33B414792

//25d1034c-6d8f-4d41-bf8c-809071d084cb

function reset() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('message').value = '';
}
// Email.send({
//     SecureToken : "25d1034c-6d8f-4d41-bf8c-809071d084cb",
//     To : 'em9002648@gmail.com',
//     From : "em9002648@gmail.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );





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

/*subscribeeeee*/
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

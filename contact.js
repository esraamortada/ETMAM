/*contact form*/



const contactForm = document.getElementById('contactForm');
const messageText = document.getElementById('message-text');


const sendmail = (e) => {
    e.preventDefault();



    emailjs.sendForm('service_alg833l', 'template_qh3jwzb', '#contactForm', 'k5erYSZHagyxy91Gl')
        .then(
            () => {
                messageText.textContent = 'message sent successfully'
                setTimeout(() => {
                    messageText.textContent = '',
                        window.location.href = 'confirm-contact.html';


                }, 3000)
            },
            () => {
                messageText.textContent = 'message not sent'
                setTimeout(() => {
                    messageText.textContent = ' try agin'

                }, 1000)
            }

        )
}
contactForm.addEventListener('submit', sendmail);


function navigateToPage(pageUrl) {
    window.location.href = pageUrl;
}

window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('scroll');
    } else {
      navbar.classList.remove('scroll');
    }
  });



    
    var links = document.querySelectorAll('.nav-link');

   
    links.forEach(function(link) {
        link.addEventListener('click', function() {
           
          
            this.classList.add('active');
        });
    });

 
            // links.forEach(function(link) {
            //     link.classList.remove('active');
            // });
            
  /*contact form*/
    


const contactForm = document.getElementById('contactForm');
const messageText = document.getElementById('message-text');


const sendmail =(e)=>{
    e.preventDefault();


   
   
    emailjs.sendForm('service_alg833l','template_qh3jwzb','#contactForm','k5erYSZHagyxy91Gl')
    .then(
        ()=>{
            messageText.textContent='message sent successfully'
            setTimeout(()=>{
                messageText.textContent=''

            },5000)
        },
        ()=>{
            messageText.textContent='message not sent'
            setTimeout(()=>{
                messageText.textContent=' try agin'

            },1000)
        }
        
    )
}
contactForm.addEventListener('submit', sendmail );
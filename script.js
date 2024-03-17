// function navigateToPage(pageUrl) {
//     window.location.href = pageUrl;
// }

// window.addEventListener('scroll', function() {
//     const navbar = document.getElementById('navbar');
//     if (window.scrollY > 0) {
//       navbar.classList.add('scroll');
//     } else {
//       navbar.classList.remove('scroll');
//     }
//   });



    
    // var links = document.querySelectorAll('.nav-link');

   
    // links.forEach(function(link) {
    //     link.addEventListener('click', function() {
            
    //         // links.forEach(function(link) {
    //         //     link.classList.remove('active');
    //         // });
            
          
    //         this.classList.add('active');
    //     });
    // });


  /*contact form*/

  document.addEventListener('DOMContentLoaded', function() {
    var contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

  
        var name = document.getElementById('name').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

       
        if (name === '' || phone === '' || email === '' || message === '') {
            alert('Please fill  all fields');
            return;
        }

       
        console.log('Name:', name);
        console.log('Phone:', phone);
        console.log('Email:', email);
        console.log('Message:', message);

        contactForm.reset();
    });
});

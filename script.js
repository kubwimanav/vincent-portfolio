// Script File

// Home Section Starts
var menuBtn = document.querySelector('.menu-btn');
var menu = document.querySelector('.nav-links');
var menuLinks = document.querySelectorAll('.nav-links li a');

menuBtn.addEventListener('click', activeClass);

function activeClass(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
}

for(i = 0; i < menuLinks.length; i++){
	menuLinks[i].addEventListener('click', menuItemClicked);
}

function menuItemClicked(){
	menuBtn.classList.remove('active');
	menu.classList.remove('active');
}

var homeSection = document.querySelector('.home');
window.addEventListener('scroll', scrollFunction);
window.addEventListener('load', scrollFunction);

function scrollFunction(){
	if(window.scrollY > 60){
		homeSection.classList.add('active');
	}
	else{
		homeSection.classList.remove('active');
	}
}
// Home Section Ends 

// Portfolio Section Starts
var $galleryContainer = $('.gallery').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
})

$('.button-group .button').on('click', function(){
	$('.button-group .button').removeClass('active');
	$(this).addClass('active');

	var value = $(this).attr('data-filter');
	$galleryContainer.isotope({
		filter: value
	})
})

// magnific popup
$('.gallery').magnificPopup({
	delegate: '.overlay a',
	type: 'image',
	gallery:{
		enabled: true
	}
})
// Portfolio Section Ends

// Testimonials Section Starts
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTime:6000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left'></i>",
             "<i class='fa-solid fa-arrow-right'></i>"],
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:true
        },
        768:{
            items:2
        }
    }
})
// form validation

document.addEventListener('DOMContentLoaded', function () {
    const sendButton = document.getElementById('sendButton');
    const inputFields = document.querySelectorAll('.input, .t');
    const errorText = document.getElementById('errorText');
    const successText = 'Message sent successfully!';
    const errorMessageDuration = 5000; // Duration in milliseconds (5 seconds)
  
    inputFields.forEach(input => {
      input.addEventListener('input', validateInputs);
    });
  
    sendButton.addEventListener('click', function (event) {
      if (!validateInputs()) {
        event.preventDefault();
        errorText.textContent = 'Please fill out all required fields.';
        setTimeout(() => {
          errorText.textContent = '';
        }, errorMessageDuration);
      } else {
        errorText.textContent = 'hhhhhh';
        showSuccessMessage();
        setTimeout(() => {
          clearForm();
        }, errorMessageDuration);
      }
    });
  
    function validateInputs() {
      let isValid = true;
  
      inputFields.forEach(input => {
        if (input.hasAttribute('required') && input.value.trim() === '') {
          isValid = false;
          showError(input, 'This field is required.');
        } else if (input.type === 'email' && !isValidEmail(input.value)) {
          isValid = false;
          showError(input, 'Please enter a valid email address.');
        } else {
          hideError(input);
        }
      });
  
      sendButton.disabled = !isValid;
      return isValid;
    }
  
    function showError(input, message) {
      input.classList.add('error');
      errorText.textContent = message;
      setTimeout(() => {
        errorText.textContent = '';
      }, errorMessageDuration);
    }
  
    function hideError(input) {
      input.classList.remove('error');
    }
  
    function isValidEmail(email) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(email);
    }
  
    function showSuccessMessage() {
      errorText.textContent = successText;
      errorText.style.color = 'green';
    }
  
    function clearForm() {
      inputFields.forEach(input => {
        input.value = '';
        hideError(input);
      });
      errorText.textContent = '';
    }
  });
/*=======================toggle icon navbar===================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

/*=======================scroll section active link===================*/
let section = document.querySelectorAll('section');
let lists = document.querySelectorAll('header nav a');
function activeLink(){
  lists.forEach((item) =>
  item.classList.remove('active'));
  this.classList.add('active');
};
lists.forEach((item) =>
item.addEventListener('click',activeLink));

window.onscroll = () =>{
section.forEach(sec =>{
  let top = window.scrollY;
  let offset = sec.offsetTop;
  let height = sec.offsetHeight;
  let id = sec.getAttribute('id');

  if(top >= offset && top < offset + height){
    lists.forEach(sec =>{
       
    });
  };
});
};

/*=======================sticky navbar ===================*/
let header = document.querySelector('header');
header.classList.toggle('sticky',window.scrollY > 100);

/*============remove toggle icon and navbar whwn click on navbar link(scroll) ===========*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

/*=======================scroll reveal ===================*/
ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading',{origin:'top'});
ScrollReveal().reveal('.home-img , .about-img, .services-container, .#skillscontainer ,.box-container ,.portfolio-container ,.experience ,#contact-form',{origin: 'bottom'});
ScrollReveal().reveal('.home h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home p,.about-content', { origin: 'right' });

//typed js
const typed = new Typed('.multiple-text',{
  strings:['Frontend Developer','Software Engineer','Website Designer'],
  typeSpeed:100,
  backSpeed:100,
  backDelay:1000,
  loop:true
});

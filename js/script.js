const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
 navBtnBars.classList.remove('black-bars-color')
 nav.classList.toggle('nav--active')
 handleNavItemsAnimation();
}

const handleNavItemsAnimation = () => {
 
 let delay = 0;
 allNavItems.forEach(item => {
  item.classList.toggle('nav-items-animation')
  item.style.animationDelay = `${delay}s`
  delay+=.1
 }
 )
}


const handleObserver =()=> {
 const currentSection = window.scrollY;

 allSections.forEach(section => {

  if(section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
    navBtnBars.classList.add('black-bars-color')
  } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
   navBtnBars.classList.remove('black-bars-color')
  }
 })
}

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.textContent = year;
}

navBtn.addEventListener('click', handleNav)
allNavItems.forEach(item => item.addEventListener('click', handleNav))
handleCurrentYear()

window.addEventListener("scroll", handleObserver)




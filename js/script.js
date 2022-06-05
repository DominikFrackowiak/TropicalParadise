const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')

const handleNav = () => {
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

navBtn.addEventListener('click', handleNav)
allNavItems.forEach(item => item.addEventListener('click', handleNav))




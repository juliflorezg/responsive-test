import closeMenu from './closeMenu'

const headerHeight = document.querySelector('.header').clientHeight + 10
document.documentElement.style.setProperty(
  '--scroll-padding',
  `${headerHeight - 1}px`
)
// console.log(headerHeight)

document.addEventListener('click', e => {
  // console.log(e.target)
  if (e.target.className.includes('hamburger')) {
    // console.log('show menu!!!!')
    if (window.innerWidth < 768) {
      document
        .querySelector('.hamburger--squeeze')
        .classList.toggle('is-active')
      document.querySelector('.header').classList.toggle('slide-in')
    }
  }

  if (e.target.matches('.header__list li a')) {
    // console.log('close menu!')
    closeMenu()
  }
})

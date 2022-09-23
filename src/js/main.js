import closeMenu from './closeMenu'

const headerHeight = document.querySelector('.header').clientHeight + 10
document.documentElement.style.setProperty(
  '--scroll-padding',
  `${headerHeight - 1}px`
)

document.addEventListener('click', e => {
  if (e.target.className.includes('hamburger')) {
    if (window.innerWidth < 768) {
      document
        .querySelector('.hamburger--squeeze')
        .classList.toggle('is-active')
      document.querySelector('.header').classList.toggle('slide-in')
    }
  }

  if (e.target.matches('.header__list li a')) {
    closeMenu()
  }
})

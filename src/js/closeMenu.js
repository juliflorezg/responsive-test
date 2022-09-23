export default function closeMenu() {
  if (window.innerWidth < 768) {
    document.querySelector('.header').classList.remove('slide-in')
    document.querySelector('.hamburger').classList.remove('is-active')
  }
}

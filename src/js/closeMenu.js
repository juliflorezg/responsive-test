export default function closeMenu() {
  // console.log(window.innerWidth)

  if(window.innerWidth<768){
    document.querySelector('.header').classList.remove('slide-in')
    document.querySelector('.hamburger').classList.remove('is-active')
  }

}

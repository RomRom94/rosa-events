document.addEventListener('DOMContentLoaded', () => {
  triggerMenu()
})

const triggerMenu = () => {
  const burgerMenu = document.querySelector('.js-burger-menu')
  burgerMenu.addEventListener('click', () => {
    if (burgerMenu.classList.contains('is-open')) {
      burgerMenu.classList.remove('is-open')
    } else {
      burgerMenu.classList.add('is-open')
    }
  })
}

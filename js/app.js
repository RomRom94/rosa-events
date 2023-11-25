document.addEventListener('DOMContentLoaded', () => {
  triggerMenuBurger()
})

const handleMenuMobile = () => {
  const menu = document.querySelector('.js-menu')

  menu.classList.toggle('is-open')
}

const handleOverflowBody = () => {
  const body = document.querySelector('body')

  body.classList.toggle('overflow-hidden')
  body.classList.toggle('h-full')
}

const triggerMenuBurger = () => {
  const burgerMenu = document.querySelector('.js-burger-menu')
  burgerMenu.addEventListener('click', () => {
    if (burgerMenu.classList.contains('is-open')) {
      burgerMenu.classList.remove('is-open')
    } else {
      burgerMenu.classList.add('is-open')
    }
    handleMenuMobile()
    handleOverflowBody()
  })
}

document.addEventListener('DOMContentLoaded', () => {
  triggerMenuBurger()
})

const handleMenuMobile = () => {
  const menu = document.querySelector('.js-menu')

  menu.classList.toggle('is-open')
}

const handleOverflowBody = () => {
  const body = document.querySelector('body')
  const html = document.querySelector('html')

  body.classList.toggle('overflow-hidden')
  html.classList.toggle('overflow-hidden')
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

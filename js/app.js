document.addEventListener('DOMContentLoaded', () => {
  triggerMenuBurger()
})

const handleMenuMobile = () => {
  const menu = document.querySelector('.js-menu')

  menu.classList.toggle('is-open')
}

const triggerMenuBurger = () => {
  const burgerMenu = document.querySelector('.js-burger-menu')
  const body = document.querySelector('body')

  burgerMenu.addEventListener('click', () => {
    if (burgerMenu.classList.contains('is-open')) {
      body.classList.remove('overflow-hidden')
      burgerMenu.classList.remove('is-open')
    } else {
      body.classList.add('overflow-hidden')
      burgerMenu.classList.add('is-open')
    }
    handleMenuMobile()
  })
}

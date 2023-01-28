import './style.scss'
import paintHomePage from './home'
import paintMenuPage from './menu'
import paintAboutPage from './about'
import { newElement, clearMarkup } from './utilities'

// NAVBAR

const nav = newElement('nav')
const navOptions = newElement('div', ['nav-options'])
const navLinks = ['Home', 'Menu', 'About']

for (let navLinkText of navLinks) {
  let navLink = newElement('button')
  navLink.textContent = navLinkText
  navOptions.appendChild(navLink)

  navLink.addEventListener('click', () => {
    clearMarkup()

    switch(navLinkText) {
      case 'Home':
        paintHomePage()
        break
      case 'Menu':
        paintMenuPage()
        break
      case 'About':
        paintAboutPage()
        break
    }
  })
}

nav.appendChild(navOptions)

document.getElementById('content').appendChild(nav)


paintHomePage()

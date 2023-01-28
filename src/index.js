import './style.scss'
import paintHomePage from './home'
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
        break
      case 'About':
        break
    }
  })
}

nav.appendChild(navOptions)

document.getElementById('content').appendChild(nav)


paintHomePage()

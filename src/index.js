import './style.scss'
import paintHomePage from './home'
import { newElement } from './utilities'

// NAVBAR

const nav = newElement('nav')
const navOptions = newElement('div', ['nav-options'])
const navLinks = [['Home', '#'], ['Menu', '#'], ['About', '#']]

for (let i = 0; i < navLinks.length; i++) {
  let navLink = newElement('a')
  navLink.textContent = navLinks[i][0]
  navLink.href = navLinks[i][1]
  navOptions.appendChild(navLink)
}

nav.appendChild(navOptions)

document.getElementById('content').appendChild(nav)


paintHomePage()

import Logo from './assets/images/logo.svg'
import { newElement, appendChildrenTo } from './utilities'

export default function() {
  const content = document.getElementById('content')


  // MAIN WRAPPER

  const main = newElement('main', ['main'])
  content.appendChild(main)
  

  // LOGO
  
  const logo = newElement('div', ['logo'])
  
  const logoHeader = newElement('h1')
  logoHeader.textContent = "Gymbro's Bar"
  
  const logoImage = newElement('img')
  logoImage.alt = 'Dumbbell'
  logoImage.src = Logo

  appendChildrenTo(logo, [logoHeader, logoImage])

  main.appendChild(logo)


  // INFO WRAPPERS

  const infoWrappers = [
    {
      title: "We're the best",
      html: `
        Welcome to Gymbro's Bar, where we believe in the power of a healthy lifestyle. Our unique concept
        combines delicious, nutritious food with a state-of-the-art gym, all under one roof. Whether you're
        looking to fuel your workout, recover after a tough session, or simply enjoy a meal in a comfortable,
        welcoming environment, We have you covered.`
    },

    {
      title: 'Hours',
      html: `
        <p>Monday: NON-STOP</p>
        <p>Tuesday: NON-STOP</p>
        <p>Wednesday: NON-STOP</p>
        <p>Thursday: NON-STOP</p>
        <p>Friday: NON-STOP</p>
        <p>Saturday: 6AM - 12PM</p>
        <p>Sunday: REST DAY</p>`
    },

    {
      title: 'Location',
      html: '1025 Muscle Blvd, Ironville, USA.' 
    },
  ]

  for (let i = 0; i < infoWrappers.length; i++) {
    let title = infoWrappers[i].title
    let html = infoWrappers[i].html

    let infoWrapper = newElement('section', ['info-wrapper'])

    let infoWrapperHeading = newElement('h2')
    infoWrapperHeading.textContent = title

    let infoWrapperContent = newElement('p')
    infoWrapperContent.innerHTML = html

    appendChildrenTo(infoWrapper, [infoWrapperHeading, infoWrapperContent])

    main.appendChild(infoWrapper)
  }
}

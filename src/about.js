import { newElement, appendChildrenTo } from "./utilities"

export default function() {
  const content = document.getElementById('content')


  // MAIN WRAPPER

  const main = newElement('main', ['main'])
  content.appendChild(main)


  const header = newElement('h1')
  header.textContent = 'About us'

  main.appendChild(header)


  // ABOUT US CONTENT

  const descWrapper = newElement('section', ['about-us'])

  const p1 = newElement('p')
  p1.textContent = `
    At Gymbro's Bar, we believe in the power of a healthy lifestyle. Our unique concept combines delicious, nutritious food with a state-of-the-art gym, all under one roof. We know that maintaining a healthy balance of diet and exercise can be tough, which is why we've made it our mission to make it as easy and enjoyable as possible.
  `

  const p2 = newElement('p')
  p2.textContent = `
    Our menu is specially crafted to offer a wide range of nutritious options, whether you're looking for a pre-workout boost or a post-workout recovery meal. We use only the freshest, highest-quality ingredients to ensure that our food not only tastes great, but is also good for you.
  `

  const p3 = newElement('p')
  p3.textContent = `
    Our gym, located on the second floor, is equipped with top-of-the-line equipment and staffed by experienced trainers who are dedicated to helping you reach your fitness goals. Whether you're a seasoned athlete or just starting out, our gym has something for everyone.
  `

  const p4 = newElement('p')
  p4.textContent = `
    We are located at 1025 Muscle Blvd, Ironville, USA, a prime location in the heart of the city. Our spacious, modern facility is designed to provide the perfect environment for both dining and working out.
  `

  const p5 = newElement('p')
  p5.textContent = `
    At Gymbro's Bar, we are committed to providing our customers with the best possible experience. Our friendly, knowledgeable staff is always on hand to answer any questions you may have and provide you with the support you need to achieve your fitness and health goals.
  `
  appendChildrenTo(descWrapper, [p1, p2, p3, p4, p5])
  main.appendChild(descWrapper)
}

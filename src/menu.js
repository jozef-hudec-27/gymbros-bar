import { appendChildrenTo, newElement } from './utilities'
import PbSmoothie from './assets/images/pb-banana-smoothie.jpg'
import SteakBowl from './assets/images/steak-burrito-bowl.jpg'
import PotatoTacos from './assets/images/potato-skin-tacos.jpg'

export default function() {
  const content = document.getElementById('content')


  // MAIN WRAPPER

  const main = newElement('main', ['main'])
  content.appendChild(main)


  const header = newElement('h1')
  header.textContent = 'Our Menu'

  main.appendChild(header)


  // MENU ITEMS

  const menuItems = [
    {
      name: 'Peanut butter Banana Smoothie',
      description: 'Although most people think of protein as meat, beans, and eggs, high-protein doesn’t mean you can’t enjoy something sweet and a little decadent.',
      image: { url: PbSmoothie, alt: 'Peanut butter smoothie' }
    },

    {
      name: 'Potato skin Tacos',
      description: 'These are a delicious and unique twist on traditional tacos. Made with potato skins as the taco shell, these tacos are filled with a variety of high-protein ingredients such as ground beef or chicken, black beans and shredded cheese. Topped with fresh salsa, sour cream, and avocado, these tacos are sure to be a hit with any taco lover looking for a satisfying and healthy meal option.',
      image: { url: PotatoTacos, alt: 'Potato skin tacos' }
    },

    {
      name: 'Steak Burrito bowl',
      description: 'This dish is a perfect blend of Tex-Mex and high-protein flavors. Thinly sliced marinated steak is cooked to perfection with peppers and onions, and served over a bed of warm and fluffy rice. This dish is a great option for those looking to add some variety to their high-protein diet. ',
      image: { url: SteakBowl, alt: 'Steak burrito bowl' }
    }
  ]

  menuItems.forEach(item => {
    let menuItem = newElement('section', ['menu-item'])

    let menuItemHeading = newElement('h2')
    menuItemHeading.textContent = item.name

    let menuItemDesc = newElement('p')
    menuItemDesc.textContent = item.description

    let menuItemImg = newElement('img')
    menuItemImg.src = item.image.url
    menuItemImg.alt = item.image.alt

    appendChildrenTo(menuItem, [menuItemHeading, menuItemDesc, menuItemImg])

    main.appendChild(menuItem)
  })
}

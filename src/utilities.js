export function newElement(type, classList = []) {
  const el = document.createElement(type)

  classList.forEach(cls => el.classList.add(cls))

  return el
}

export function appendChildrenTo(element, children) {
  for (let child of children) {
    element.appendChild(child)
  }
}

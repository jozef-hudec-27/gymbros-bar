export function newElement(type, classList = [], id = '') {
  const el = document.createElement(type)

  el.id = id
  classList.forEach(cls => el.classList.add(cls))

  return el
}

export function appendChildrenTo(element, children) {
  for (let child of children) {
    element.appendChild(child)
  }
}

export function clearMarkup() {
  document.getElementById('content').querySelector('main')?.remove()
}

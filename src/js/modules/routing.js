export function routeNerds() {
  routie({
    '/': () => {
      updatePage('/')
    },
    stats: () => {
      updatePage('stats')
    },
  })

  // update page from route
  function updatePage(route) {
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      section.classList.remove('active')
    })
    const activeSection = document.querySelector(`[data-route="${route}"]`)
    console.log(activeSection)
    activeSection.classList.add('active')
  }
}

export default routeNerds
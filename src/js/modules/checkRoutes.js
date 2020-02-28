const router = {
  handle: function() {
    routie({
      '/': () => {
        updatePage('/')
      },
      stats: () => {
        updatePage('stats')
      },
      '/:id': function(nerds) {
        const nerdID = nerds.filter(function(nerd) {
          return nerd.id == id
        })
        renderNerds.detail(nerdId)
        updatePage('profile')
      }
    })
  }
}

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



export {
  router
}
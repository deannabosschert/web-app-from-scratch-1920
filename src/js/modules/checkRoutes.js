import {
  renderNerds
} from "./render.js"
import {
  loadNerds
} from "./API.js"


// async function route() {
const router = {
  noData() {
    // if (data === 'dataPresent')
    routie({
      '/': function() {
        const loadData = loadNerds.overview()
        loadData.then(nerds => {
          renderNerds.overview(nerds)
        })

      },
      stats: function() {
        loadNerds(nerds)
        updatePageUI('stats')
      }
      // '/:id': function(nerds) {
      //   routeNerds.detail(id)
      //   // const nerdID = nerds.filter(function(nerd) {
      //   //   return nerd.id == id
      //   // })
      //   // renderNerds.detail(nerdId)
      //   // updatePageUI('profile')
      // }
    })
  },
  hasData() {
    const nerds = JSON.parse(localStorage.getItem("githubRepos"))
    // const nerdAvatars = JSON.parse(storage.getItem("githubAvatars"))

    routie({
      '/': () => {
        renderNerds.overview(nerds)
        updatePageUI('/')
      },
      stats: () => {
        renderNerds.stats(nerds)
        updatePageUI('stats')
      },
      '/:id': function(nerds) {
        renderNerds.detail(id)
        // const nerdID = nerds.filter(function(nerd) {
        //   return nerd.id == id
        // })
        // renderNerds.detail(nerdId)
        // updatePageUI('profile')
      }
    })

  }
}

// update page from route
function updatePageUI(route) {
  const sections = document.querySelectorAll('section')
  sections.forEach(section => {
    section.classList.remove('active')
  })
  const activeSection = document.querySelector(`[data-route="${route}"]`)
  console.log(activeSection)
  activeSection.classList.add('active')
}

// }

export {
  router
}
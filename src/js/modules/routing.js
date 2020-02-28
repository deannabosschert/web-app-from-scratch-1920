import {
  loadingState
} from "./loader.js"
import {
  loadNerds
} from "./API.js"
import {
  renderNerds
} from "./render.js"

export function routeNerds() {
  (async function checkLocalStorage() {
    loadingState('active')
    const storage = window.localStorage
    if (storage.getItem("githubRepos") === null) {
      console.log("nog geen data in je localStorage, incoming!")
      await loadNerds()
      loadingState('')
    } else {
      console.log("nu zit er (wel) data in je localStorage 🤓")
      const nerds = JSON.parse(storage.getItem("githubRepos"))
      // const nerdAvatars = JSON.parse(storage.getItem("githubAvatars"))
      renderNerds.overview(nerds)
      loadingState('')
    }
  })()

  routie({
    '/': () => {
      updatePage('/')
    },
    stats: () => {
      updatePage('stats')
    },
    '/:id': function(id) {
      const specificId = data.filter(function(item) {
        return item.id == id
      })
      renderNerds.detail(id)
      updatePage(id)
    }
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
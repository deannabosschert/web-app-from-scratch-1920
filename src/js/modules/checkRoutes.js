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
      '/': () => {
        const loadData = loadNerds.overview()
        loadData.then(nerds => {
          renderNerds.overview(nerds)
          updatePageUI('/')
        })
      },
      '': () => {
        const loadData = loadNerds.overview()
        loadData.then(nerds => {
          renderNerds.overview(nerds)
        })
      },
      stats: () => {
        const loadData = loadNerds.overview()
        loadData.then(nerds => {
          renderNerds.stats(nerds)
          updatePageUI('stats')
        })
      },
      '/:id': id => {
        const loadData = loadNerds.overview()
        loadData.then(nerds => {
          let oneNerd = nerds.filter(function(nerd) {
            return nerd.id == id
          })
          renderNerds.detail(oneNerd)
        })
        updatePageUI('profile')
      }
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
      '': () => {
        renderNerds.overview(nerds)
        updatePageUI('/')
      },
      stats: () => {
        renderNerds.stats(nerds)
        updatePageUI('stats')
      },
      '/:id': id => {
        let oneNerd = nerds.filter(function(nerd) {
          return nerd.id == id
        })
        renderNerds.detail(oneNerd)
        updatePageUI('profile')
        // http://localhost:8000/src/#/237659708
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
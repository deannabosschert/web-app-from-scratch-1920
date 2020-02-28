import {
  loadNerds
} from "./API.js"
import {
  renderNerds
} from "./render.js"

const routeNerds = {
  overview() {
    (async function checkLocalStorage() {
      const storage = window.localStorage
      loadingState('active')
      if (storage.getItem("githubRepos") === null) {
        console.log("nog geen data in je localStorage, incoming!")
        const nerds = await loadNerds()
        renderNerds.overview(nerds)
        loadingState('')
      } else {
        console.log("nu zit er (wel) data in je localStorage 🤓")
        renderNerds.overview(nerds)
        loadingState('')
      }
    })()
  },
  detail() {
    (async function checkLocalStorage() {
      const storage = window.localStorage
      loadingState('active')
      if (storage.getItem("githubRepos") === null) {
        console.log("nog geen data in je localStorage, incoming!")
        const nerds = await loadNerds()
        renderNerds.overview(nerds)
        loadingState('')
      } else {
        console.log("nu zit er (wel) data in je localStorage 🤓")
        const nerds = JSON.parse(storage.getItem("githubRepos"))
        // const nerdAvatars = JSON.parse(storage.getItem("githubAvatars"))
        renderNerds.overview(nerds)
        loadingState('')
      }
    })()
  }
}








export {
  routeNerds
}
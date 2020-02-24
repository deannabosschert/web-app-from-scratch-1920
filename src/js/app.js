import {
  loadingState
} from "./modules/loader.js"
import {
  loadNerds
} from "./modules/API.js"
import {
  renderNerds
} from "./modules/render.js"

(function init() {

  (async function checkLocalStorage() {
    loadingState('active')
    const storage = window.localStorage
    if (storage.getItem("githubRepos") === null) {
      console.log("nog geen data in je localStorage, doen we zo!")
      await loadNerds()
      loadingState('')
    } else {
      console.log("nu zit er wel data in je localStorage 🤓")
      const nerds = JSON.parse(storage.getItem("githubRepos"))
      renderNerds(nerds)
      loadingState('')
    }
  })()
})()
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
  (function checkLocalStorage() {
    const storage = window.localStorage
    if (storage.getItem("githubRepos") === null) {
      console.log("nog geen data in je localStorage, doen we zo!")
      loadingState('active')
      loadNerds()
    } else {
      console.log("nu zit er wel data in je localStorage 🤓")
      loadingState('active')
      const nerds = JSON.parse(storage.getItem("githubRepos"))
      renderNerds(nerds)
    }
  })()
})()
import {
  loadNerds
} from "./modules/api.js"
import {
  renderNerds
} from "./modules/render.js"

(function init() {
  (function checkLocalStorage() {
    const storage = window.localStorage
    if (storage.getItem("githubRepos") === null) {
      console.log("nog geen data in je localStorage, doen we zo!")
      loadNerds()
    } else {
      console.log("nu zit er wel data in je localStorage 🤓")
      const nerds = JSON.parse(storage.getItem("githubRepos"))
      renderNerds(nerds)
    }
  })()
})()
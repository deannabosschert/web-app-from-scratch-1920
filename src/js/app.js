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
      console.log("geen data in je localStorage")
      loadNerds()
    } else {
      console.log("wel data in je localStorage 🤓")
      const nerds = JSON.parse(storage.getItem("githubRepos"))
      renderNerds(nerds)
    }
  })()
})()
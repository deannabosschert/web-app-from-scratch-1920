import {
  loadingState
} from "./loader.js"
import {
  router
} from "./checkRoutes.js"
import {
  loadNerds
} from "./API.js"
import {
  renderNerds
} from "./render.js"

export function routeNerds() {

  (async function checkLocalStorage() {
    loadingState('active')
    router.handle()
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


}

export default routeNerds
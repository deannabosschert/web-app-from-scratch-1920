import {
  router
} from "./modules/checkRoutes.js"
import {
  loadingState
} from "./modules/loader.js"

(function init() {
  (async function checkLocalStorage() {
    const storage = window.localStorage
    loadingState('active')
    if (storage.getItem("githubRepos") === null) {
      console.log("nog geen data in je localStorage, incoming!")
      await router.noData()
      loadingState('')
    } else {
      console.log("nu zit er (wel) data in je localStorage 🤓")
      router.hasData()
      loadingState('')
    }
  })()


})()
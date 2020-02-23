import {
  loadNerds
} from "./modules/API.js"
// import {
//   Store
// } from "./store.js"
// import {
//   Render
// } from "./render.js"

(function init() {
  (function checkLocalStorage() {
    const storage = window.localStorage
    if (storage.getItem("githubRepos") === null) {
      console.log("geen data in je localStorage")
      // API.loadNerds()
    } else {
      console.log("wel data in je localStorage 🤓")
      const nerds = JSON.parse(storage.getItem("githubRepos"))
      // render.renderNerds(nerds)
    }
  })()


  //
  // function loadNerds()
  //
  // function storeNerds(nerds)
  //
  // function renderNerds(nerds)
  //
  // function filterArray(array)

})()


function init() {
  API.fetchData('beers').then(data => {
    console.log('We got dem data: ', data)

    // Assign data to overview
    Assign.data(data)

    // Render detailpage on click with router
    Render.renderNerds(nerds)
  })
}
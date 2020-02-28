import {
  fetcher
} from "./helpers/fetcher.js"
import {
  store
} from "./store.js"
import {
  renderNerds
} from "./render.js"

const loadNerds = {
  overview: function() {
    const endpoint = "https://api.github.com"
    const minor = "/cmda-minor-web"
    const course = "/web-app-from-scratch-"
    const year = "1920"
    const tag = "/forks"
    const limit = "50"
    const apiLink = `${endpoint}/repos${minor}${course}${year}${tag}?per_page=${limit}`

    return new Promise((resolve, reject) => {
      fetcher.get(apiLink)
        .then(res => store.set(res))
        .then(rs => {
          const nerds = JSON.parse(localStorage.getItem("githubRepos"))
          resolve(nerds)
          return nerds
        })
        .catch(err => {
          reject(console.log(err))
        })
    })
  }

}




export {
  loadNerds
}
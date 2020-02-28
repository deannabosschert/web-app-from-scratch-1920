import {
  fetcher
} from "./helpers/fetcher.js"
import {
  store
} from "./store.js"
import {
  renderNerds
} from "./render.js"

export function loadNerds() {
  const endpoint = "https://api.github.com"
  const minor = "/cmda-minor-web"
  const course = "/web-app-from-scratch-"
  const year = "1920"
  const tag = "/forks"
  const limit = "50"
  const apiLink = `${endpoint}/repos${minor}${course}${year}${tag}?per_page=${limit}`

  return new Promise((resolve, reject) => {
    fetcher.get(apiLink)
      .then(res => {
        return store.set(res)
      })
      .then(nerds => {
        return renderNerds(nerds)
      })
      .then(nerds => {
        // store.setImage()
        resolve(nerds)
      })
      .catch(err => {
        reject(console.log(err))
      })
  })
}

export default loadNerds
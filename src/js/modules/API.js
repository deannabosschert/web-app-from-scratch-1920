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
        const nerds = filterArray(res)
        store.set(nerds)
        renderNerds(nerds)
        store.setImage()
        resolve(nerds)
      })
      .catch(err => {
        reject(console.log(err))
      })
  })
}


function filterArray(array) {
  return array.map(data => {
    return {
      name: data.owner.login,
      description: data.description,
      avatar: data.owner.avatar_url,
      homepage: data.homepage,
      id: data.id,
      node_id: data.node_id,
      name: data.name,
      full_name: data.full_name,
      private: data.private,
      owner: data.owner,
      html_url: data.html_url
    }
  })
}


export default loadNerds
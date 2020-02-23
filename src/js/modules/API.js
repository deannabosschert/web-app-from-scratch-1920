import {
  Fetcher
} from "../fetcher.js"

export function loadNerds() {
  //   // https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
  const endpoint = "https://api.github.com"
  const minor = "/cmda-minor-web"
  const course = "/web-app-from-scratch-"
  const year = "1920"
  const tag = "/forks"
  const limit = "50"
  const apiLink = `${endpoint}/repos${minor}${course}${year}${tag}?per_page=${limit}`

  Fetcher.get(apiLink)
    .then(res => {
      const nerds = filterArray(res)
      return nerds
    })
    .catch(err => {
      console.log(err)
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
      ding: data.ding,
      id: data.id,
      node_id: data.node_id,
      name: data.name,
      full_name: data.full_name,
      private: data.private,
      owner: data.owner,
      html_url: data.html_url,
      description: data.description
    }
  })
}


export default loadNerds
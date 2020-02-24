// import {
//   Transparency
// } from "./transparency.js"

export function renderNerds(nerds) {
  console.log(
    "%c Test!",
    "text-transform: uppercase; background: #000; color: #FFF; font-size: 21pt; font-weight: bold; padding: 5px 20px; text-shadow: -2px -2px 0 rgba(251, 1, 252, .7), 2px 2px 0 rgba(4, 251, 246, 0.7)"
  )

  const root = document.getElementById("overview")
  const nerdList = nerds.map(nerd => ({
    projectName: nerd.name,
    description: nerd.description,
    homepage: nerd.homepage,
    id: nerd.id,
    node_id: nerd.node_id,
    name: nerd.name,
    full_name: nerd.full_name,
    private: nerd.private,
    owner: nerd.owner,
    html_url: nerd.html_url,
    avatar: nerd.avatar

  }))

  const directives = {
    avatar: {
      src: function() {
        return this.avatar
      }
    }
  };

  Transparency.render(root, nerdList, directives)

}


export default renderNerds
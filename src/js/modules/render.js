export function renderNerds(nerds) {
  console.log(
    "%c Test!",
    "text-transform: uppercase; background: #000; color: #FFF; font-size: 21pt; font-weight: bold; padding: 5px 20px; text-shadow: -2px -2px 0 rgba(251, 1, 252, .7), 2px 2px 0 rgba(4, 251, 246, 0.7)"
  )
  const root = document.getElementById("overview")
  root.innerHTML = ""
  // 
  // Transparency.render(root, data)
  // template staat al aangegeven in html(skeletonUI)

  return nerds.map(nerd => {
    root.insertAdjacentHTML(
      "afterend",
      "<article>" +
      "<h3>" +
      nerd.name +
      "</h3><a href=" +
      nerd.homepage +
      "><p>" +
      nerd.description +
      '</p></a><img src="' +
      nerd.avatar +
      '">' +
      "<p>" +
      "id: " +
      nerd.id +
      "</p>" +
      "<p>" +
      "node_id: " +
      nerd.node_id +
      "</p>" +
      "<p>" +
      "name: " +
      nerd.name +
      "</p>" +
      "<p>" +
      "full_name: " +
      nerd.full_name +
      "</p>" +
      "<p>" +
      "private: " +
      nerd.private +
      "</p>" +
      "<p>" +
      "owner: " +
      nerd.owner +
      "</p>" +
      "<p>" +
      "html_url: " +
      nerd.html_url +
      "</p>" +
      "<p>" +
      "description: " +
      nerd.description +
      "</p>" +
      "</article>"
    )
  })
}


export default renderNerds
const renderNerds = {
  overview(nerds) {
    const overview = document.getElementById("overview")
    const nerdList = nerds.map(nerd => ({
      projectName: nerd.name,
      description: 'Description: ' + nerd.description,
      avatar: nerd.avatar,
      html_url: nerd.html_url,
      homepage: 'Link to profile: ' + nerd.homepage,
      id: 'Github ID: ' + nerd.id,
      name: 'Name: ' + nerd.name,
      full_name: 'Full name: ' + nerd.full_name,
      private: 'Private repo?: ' + nerd.private
    }))

    // const avatarIMG = nerdAvatars.map(nerdAvatar => ({
    //   avatar: nerdAvatar.transparency.model.avatar
    // }))

    const directives = {
      avatar: {
        src: function() {
          return this.avatar
        }
      },
      html_url: {
        href: function() {
          return this.html_url
        }
      }
    }

    Transparency.render(overview, nerdList, directives)
    // Transparency.render(root, avatarIMG, directives)
  },
  detail(nerds) {

  }
}


export {
  renderNerds
}
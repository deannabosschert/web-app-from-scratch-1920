const renderNerds = {
  overview: function(nerds) {
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
    // const nerdAvatars = JSON.parse(storage.getItem("githubAvatars"))
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
  stats: function(nerds) {
    const stats = document.getElementById("statistics")
    console.log(stats)
    const nerdList = nerds.map(nerd => ({
      projectName: 'Paginatwee' + nerd.name,
      description: 'Description: ' + nerd.description,
      homepage: 'Link to profile: ' + nerd.homepage,
      id: 'Github ID: ' + nerd.id,
      name: 'Name: ' + nerd.name,
      full_name: 'Full name: ' + nerd.full_name,
      private: 'Private repo?: ' + nerd.private
    }))

    Transparency.render(stats, nerdList)
  },
  detail: function(id) {
    console.log(id)
    const profile = document.getElementById("profile")
    const oneNerd = id.map(nerd => ({
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

    Transparency.render(profile, oneNerd, directives)
  }
}


export {
  renderNerds
}
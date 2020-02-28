const renderNerds = {
  overview: function(nerds) {
    const overview = document.getElementById("overview")
    const nerdList = nerds.map(nerd => ({
      projectName: nerd.name,
      description: 'Description: ' + nerd.description,
      avatar: nerd.avatar,
      html_url: nerd.html_url,
      homepage: 'Link to profile: ' + nerd.homepage,
      id: nerd.id,
      name: 'Name: ' + nerd.name,
      full_name: 'Full name: ' + nerd.full_name,
      private: 'Private repo?: ' + nerd.private,
      linkToProfile: "Link to profile:" + nerd.id
    }))
    // const nerdAvatars = JSON.parse(storage.getItem("githubAvatars"))
    // const avatarIMG = nerdAvatars.map(nerdAvatar => ({
    //   avatar: nerdAvatar.transparency.model.avatar
    // }))

    const directives = {
      avatar: {
        src: function() {
          return this.avatar
        },
        href: function() {
          return this.id
        }
      },
      linkToProfile: {
        href: function() {
          return "#/" + this.id
        }
      },
      html_url: {
        href: function() {
          return this.html_url
        }
      },
      id: {
        href: function() {
          return this.id
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
      id: nerd.id,
      name: 'Name: ' + nerd.name,
      full_name: 'Full name: ' + nerd.full_name,
      private: 'Private repo?: ' + nerd.private
    }))

    Transparency.render(stats, nerdList)
  },
  detail: function(id) {
    console.log(id)
    const profile = document.getElementById("oneNerd")
    const oneNerd = id.map(nerd => ({
      projectName: nerd.name,
      description: 'Description: ' + nerd.description,
      avatar: nerd.avatar,
      html_url: nerd.html_url,
      homepage: 'Link to profile: ' + nerd.homepage,
      id: 'Github ID: ' + nerd.id,
      name: 'Name: ' + nerd.name,
      full_name: 'Full name: ' + nerd.full_name,
      private: 'Private repo?: ' + nerd.private,
      milestones_url: nerd.milestones_url,
      notifications_url: nerd.notifications_url,
      labels_url: nerd.labels_url,
      releases_url: nerd.releases_url,
      deployments_url: nerd.deployments_url,
      created_at: nerd.created_at,
      updated_at: nerd.updated_at,
      pushed_at: nerd.pushed_at,
      git_url: nerd.git_url,
      ssh_url: nerd.ssh_url,
      clone_url: nerd.clone_url,
      svn_url: nerd.svn_url,
      homepage: nerd.homepage,
      size: nerd.size,
      stargazers_count: nerd.stargazers_count,
      watchers_count: nerd.watchers_count,
      language: nerd.language,
      has_issues: nerd.has_issues,
      has_projects: nerd.has_projects,
      has_downloads: nerd.has_downloads,
      has_wiki: nerd.has_wiki,
      has_pages: nerd.has_pages,
      forks_count: nerd.forks_count,
      mirror_url: nerd.mirror_url,
      archived: nerd.archived,
      disabled: nerd.disabled,
      open_issues_count: nerd.open_issues_count
    }))

    console.log(oneNerd)

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
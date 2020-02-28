const store = {
  set(res) {
    const nerds = filterArray(res)
    console.log(nerds)
    console.log("adding nerds to localStorage")
    localStorage.setItem("githubRepos", JSON.stringify(nerds))
    return nerds
  },
  setImage() { // unused.. yet. Will probably have to use a small package to correctly store the image..
    console.log("adding avatars to localStorage")
    const nerdAvatars = document.querySelectorAll('div.avatarWrapper');
    localStorage.setItem('githubAvatars', JSON.stringify(nerdAvatars));
    return nerdAvatars
  }
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
      html_url: data.html_url,
      milestones_url: data.milestones_url,
      notifications_url: data.notifications_url,
      labels_url: data.labels_url,
      releases_url: data.releases_url,
      deployments_url: data.deployments_url,
      created_at: data.created_at,
      updated_at: data.updated_at,
      pushed_at: data.pushed_at,
      git_url: data.git_url,
      ssh_url: data.ssh_url,
      clone_url: data.clone_url,
      svn_url: data.svn_url,
      homepage: data.homepage,
      size: data.size,
      stargazers_count: data.stargazers_count,
      watchers_count: data.watchers_count,
      language: data.language,
      has_issues: data.has_issues,
      has_projects: data.has_projects,
      has_downloads: data.has_downloads,
      has_wiki: data.has_wiki,
      has_pages: data.has_pages,
      forks_count: data.forks_count,
      mirror_url: data.mirror_url,
      archived: data.archived,
      disabled: data.disabled,
      open_issues_count: data.open_issues_count
    }
  })
}


export {
  store
}
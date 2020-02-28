const store = {
  set(res) {
    const nerds = filterArray(res)
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
      html_url: data.html_url
    }
  })
}


export {
  store
}
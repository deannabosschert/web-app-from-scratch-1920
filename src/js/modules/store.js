export function storeNerds(nerds) {
  // console.log(nerds)
  // const ava = nerds.avatar
  // console.log(ava)
  // ergens hier de images van de avatar, apart storen? --> later naar kijken, nog niet specifiek relevant.
  // https://hacks.mozilla.org/2012/02/saving-images-and-files-in-localstorage/
  return localStorage.setItem("githubRepos", JSON.stringify(nerds))
}

export default storeNerds
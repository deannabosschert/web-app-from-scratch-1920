export function storeNerds(nerds) {


  const avatarIMG = getImages(nerds)

  function getImages(array) {
    return array.map(data => {
      return {
        avatar: data.avatar
      }
    })
  }

  console.log(avatarIMG)

  // localStorage.setItem('image', document.getElementById('image').value);
  setImage(avatarIMG)

  function setImage(avatarIMG) {
    return localStorage.setItem("githubAvatars", avatarIMG);
  }

  return localStorage.setItem("githubRepos", JSON.stringify(nerds))
}

export default storeNerds
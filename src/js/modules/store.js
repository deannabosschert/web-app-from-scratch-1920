// export function storeNerds(nerds) {
//   return localStorage.setItem("githubRepos", JSON.stringify(nerds))
//
//
//
//
//   function storeAvatars(nerds) {
//     const avatarIMG = getImages(nerds)
//
//     function getImages(array) {
//       return array.map(data => {
//         return {
//           avatar: data.avatar
//         }
//       })
//     }
//
//     console.log(avatarIMG)
//
//     // localStorage.setItem('image', document.getElementById('image').value);
//     setImage(avatarIMG)
//
//     function setImage(avatarIMG) {
//       return localStorage.setItem("githubAvatars", avatarIMG);
//     }
//   }
// }

const store = {
  set(nerds) {
    console.log("adding nerds to localStorage")
    localStorage.setItem("githubRepos", JSON.stringify(nerds))
  },
  setImage() {
    console.log("adding avatars to localStorage")
    const nerdAvatars = document.querySelectorAll('img.avatar');
    return localStorage.setItem('githubAvatars', nerdAvatars);


  }

}


export {
  store
}
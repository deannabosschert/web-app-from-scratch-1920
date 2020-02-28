export function storeNerds(nerds) {

  // https://hacks.mozilla.org/2012/02/saving-images-and-files-in-localstorage/

  // // Get a reference to the image element
  // var avatar = document.getElementById("avatar");
  //
  // // Take action when the image has loaded
  // avatar.addEventListener("load", function() {
  //   var avaCanvas = document.createElement("avaCanvas"),
  //     avaContext = avaCanvas.getContext("2d");
  //
  //   // Make sure canvas is as big as the picture
  //   avaCanvas.width = avatar.width;
  //   avaCanvas.height = avatar.height;
  //
  //   // Draw image into canvas element
  //   avaContext.drawImage(avatar, 0, 0, avatar.width, avatar.height);
  //
  //   // Get canvas contents as a data URL
  //   var avaAsDataURL = avaCanvas.toDataURL(nerds.avatar);
  //
  //   // Save image into localStorage
  //   try {
  //     return localStorage.setItem("avatar", avaAsDataURL);
  //   } catch (e) {
  //     console.log("Storage failed: " + e);
  //   }
  // }, false);
  //
  // console.log(nerds)
  //
  // const avatarIMG = getImages(nerds)
  //
  //
  // function getImages(array) {
  //   return array.map(data => {
  //     return {
  //       avatar: data.avatar
  //     }
  //   })
  // }
  //
  //
  // console.log(avatarIMG)
  //
  //
  // // convertImageToBase64(avatarIMG)
  //
  //
  // function convertImageToBase64(img) {
  //   var canvas = document.createElement("canvas");
  //   let canvas.width = img.width;
  //   let canvas.height = img.height;
  //
  //
  //   console.log(canvas)
  //
  //   const ctx = canvas.getContext("CanvasRenderingContext2D");
  //   ctx.drawImage(img, 0, 0);
  //
  //
  //
  //   const dataURL = canvas.toDataURL("image/png");
  //
  //   return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  // }
  //
  // setImage()
  //
  // function setImage() {
  //   return localStorage.setItem("githubAvatars", img64);
  // }

  return localStorage.setItem("githubRepos", JSON.stringify(nerds))
}

export default storeNerds
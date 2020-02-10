// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Local_storage

// import Router from "./routie.js";
// const router = require("router");

const endpoint = "https://api.github.com";
const minor = "/cmda-minor-web";
const course = "/web-app-from-scratch-";
const year = "1920";
const tag = "/forks";
const limit = "50";
const url = `https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-1920/forks?per_page=50`;
const apiLink =
  endpoint + "/repos" + minor + course + year + tag + "?per_page=" + limit;

fetch(apiLink)
  // .then(res => res.json()) // correcte errhandling nog adden, zie linkje van Joost/Laurens in slack
  // https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
  .then(function(res) {
    return res.json();
  })
  .then(function(json) {
    console.log(json);
    const data = filterArray(json);
    console.log(data);
    // pleur de data in een string en yeet 'm vervolgens in localStorage onder "recipes"
    return localStorage.setItem("repos", JSON.stringify(data));
  });

// haal "recipes" op uit localStorage en parse ze in JSON zodat 't weer bruikbaar is (getest met wifi uitgezet)
const results = JSON.parse(localStorage.getItem("repos"));
console.log(results);
const root = document.getElementById("one");
root.innerHTML = "";

results.forEach(results => {
  // niet beter een array.map voor gebruiken?
  root.insertAdjacentHTML(
    "afterend",
    "<article>" +
      "<h2>" +
      results.name +
      "</h2><a href=" +
      results.homepage +
      "><p>" +
      results.description +
      '</p></a><img src="' +
      results.avatar +
      '">' +
      "</article>"
  );
});

function filterArray(array) {
  return array.map(results => {
    return {
      name: results.owner.login,
      description: results.description,
      avatar: results.owner.avatar_url,
      homepage: results.homepage,
      // dishtypes: results.dishTypes,
      // vegetarian: results.vegetarian,
      // vegan: results.vegan,
      // glutenFree: results.glutenFree,
      // dairyFree: results.dairyFree,
      url: results.url
    };
  });
}
//
// var router = {
//   handle: function() {
//     routie(
//       "/",
//       function() {
//         console.log("alles");
//       },
//       ":id",
//       function() {
//         console.log(id);
//       }
//     );
//   }
// };
//
// router.handle();

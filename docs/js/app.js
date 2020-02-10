// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Local_storage

// import Router from "./routie.js";
// const router = require("router");

const endpoint =
  "https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-1920/forks?per_page=50";

const tags = "&tags=dessert";
const user = "deannabosschert";
// const apiKey = "28ff3a78659d4701a49c3345bc23c33b";
// const apiKey = "6ccc29bb070043dd937ef1f10dc714d3";
// const apiKey3 = "3a0c7279c9fb4eaa96146d10ea2d6cdd"
const apiKey = "159149e54e984717be8dccce8fc3d6c9";
const limit = "3";
const url = `https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-1920/forks?per_page=50`;
// const apiLink = endpoint + limit + tags + "&apiKey=" + apiKey + "&format=json";
// const apiLink = endpoint + limit + tags + "&apiKey=" + apiKey + "&format=json";
//
fetch(url)
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

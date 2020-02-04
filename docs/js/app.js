// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Local_storage
const endpoint = "https://api.spoonacular.com/recipes/random";
const tags = "&tags=vegetarian,dessert";
const apiKey = "28ff3a78659d4701a49c3345bc23c33b";
// const apiKey2 - "6ccc29bb070043dd937ef1f10dc714d3"
// const apiKey3 = "3a0c7279c9fb4eaa96146d10ea2d6cdd"
// const apiKey4 = "159149e54e984717be8dccce8fc3d6c9"
const limit = "?number=1";
const apiLink = endpoint + limit + tags + "&apiKey=" + apiKey + "&format=json";

fetch(apiLink)
  .then(res => res.json()) // errhandling nog adden
  .then(json => {
    const response = json.recipes;
    const data = filterArray(response);
    // pleur de data in een string en yeet 'm vervolgens in localStorage onder "recipes"
    localStorage.setItem("recipes", JSON.stringify(data));
  });

// haal "recipes" op uit localStorage en parse ze in JSON zodat 't weer bruikbaar is (getest met wifi uitgezet)
const results = JSON.parse(localStorage.getItem("recipes"));
console.log(results);

const root = document.getElementById("recipe");
// d1.insertAdjacentHTML("afterend", '<div id="two">two</div>');

// if (response.status >= 200 && response.status < 400) {
results.forEach(results => {
  root.insertAdjacentHTML(
    "afterend",
    "<h2>" +
      results.title +
      "</h2><h3>" +
      results.instructions +
      '</h3><img src="' +
      results.img +
      '">'
  );
});
// } else {
// console.log('error')
// }

function filterArray(array) {
  return array.map(results => {
    return {
      title: results.title,
      instructions: results.instructions,
      servings: results.servings,
      dishtypes: results.dishTypes,
      vegetarian: results.vegetarian,
      vegan: results.vegan,
      glutenFree: results.glutenFree,
      dairyFree: results.dairyFree,
      img: results.image
    };
  });
}

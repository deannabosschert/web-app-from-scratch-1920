const endpoint = "https://api.spoonacular.com/recipes/random?number=1";
const apiKey = "28ff3a78659d4701a49c3345bc23c33b";
const tags = "&tags=vegetarian,dessert";
const apiLink = endpoint + tags + "&apiKey=" + apiKey + "&format=json";

fetch(apiLink)
  .then(res => res.json())
  .then(json => {
    const rawData = json.recipes;
    // const rawData = JSON.parse('json.recipes');
    const results = filterArray(rawData);
    console.log(results);
  });

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

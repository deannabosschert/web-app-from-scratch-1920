const endpoint =
  "https://api.spoonacular.com/recipes/complexSearch?query=pasta&diet=vegan&number=2";
const apiKey = "28ff3a78659d4701a49c3345bc23c33b";
const apiLink = endpoint + "&apiKey=" + apiKey + "&format=json";

fetch(apiLink)
  .then(res => res.json())
  .then(res => console.log(res));

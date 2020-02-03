// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Local_storage
const endpoint = "https://api.spoonacular.com/recipes/random?number=1";
const apiKey = "28ff3a78659d4701a49c3345bc23c33b";
const tags = "&tags=vegetarian,dessert";
const apiLink = endpoint + tags + "&apiKey=" + apiKey + "&format=json";

// fetch(apiLink)
//   .then(res => res.json())
//   .then(json => {
//     const rawData = json.recipes;
//     const data = filterArray(rawData);
//     // pleur de data in een string en yeet 'm vervolgens in localStorage onder "recipes"
//     localStorage.setItem("recipes", JSON.stringify(data));
//   });
//
// // haal "recipes" op uit localStorage en parse ze in JSON zodat 't weer bruikbaar is (getest met wifi uitgezet)
// const results = JSON.parse(localStorage.getItem("recipes"));
// console.log(results);
//
// const d1 = document.getElementById("one");
// d1.insertAdjacentHTML("afterend", '<div id="two">two</div>');

// const data = [1, 2, 3, 4];
// const yeet = "esketit";
// data.forEach(yeet => {
//   element.innerHTML += "<h1>yeet</h1>";
//   console.log(yeet);
// });
//

// // <div id="one">one</div>
// var d1 = document.getElementsByClassName('skrt'); // or:
// console.log(d1)
// d1[0].insertAdjacentHTML('afterend', '<div class="two">two</div>');

const name = "John";
// assuming 'el' is an HTML DOM element
el.innerHTML = name; // harmless in this case

// ...

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // harmless in this case


// At this point, the new structure is:
// <div id="one">one</div><div id="two">two</div>


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

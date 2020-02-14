// function loadData() {
const endpoint = "https://api.github.com";
const minor = "/cmda-minor-web";
const course = "/web-app-from-scratch-";
const year = "1920";
const tag = "/forks";
const limit = "50";
const apiLink = `${endpoint}/repos${minor}${course}${year}${tag}?per_page=${limit}`;

fetch(apiLink)
  // .then(res => res.json()) // correcte errhandling nog adden, zie linkje van Joost/Laurens in slack
  // https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
  .then(function(res) {
    return res.json();
  })
  .then(json => {
    const data = filterArray(json);
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Local_storage
    // pleur de data in een string en yeet 'm vervolgens in localStorage onder "repos"
    // return localStorage.setItem("repos", JSON.stringify(data));
    render(data.data);
})
  .catch(err => {
  console.log(err);
});


function filterArray(array) {
  return array.map(results => {
    return {
      name: results.owner.login,
      description: results.description,
      avatar: results.owner.avatar_url,
      homepage: results.homepage,
      id: results.id,
      ding: results.ding,
      id: results.id,
      node_id: results.node_id,
      name: results.name,
      full_name: results.full_name,
      private: results.private,
      owner: results.owner,
      html_url: results.html_url,
      description: results.description,

    };
  });
}

// function routeDingen() {
//   import Router from "./routie.js";
//   const router = require("router");
//   var router = {
//     handle: function() {
//       routie(
//         "/",
//         function() {
//           console.log("alles");
//         },
//         ":id",
//         function() {
//           console.log(id);
//         }
//       );
//     }
//   };
//
//   router.handle();
// }


// function routeDingen() {

routie({
  home: () => {
    updateUI('home');
  },
  stats: () => {
    updateUI('stats');
  },
  progress: () => {
    updateUI('progress');
  }
});
// }


// router.handle()


function render(data) {
  // haal "repos" op uit localStorage en parse ze in JSON zodat 't weer bruikbaar is (getest met wifi uitgezet)
  const results = JSON.parse(localStorage.getItem("repos"));
  console.log(
    "%c Test!",
    "text-transform: uppercase; background: #000; color: #FFF; font-size: 21pt; font-weight: bold; padding: 5px 20px; text-shadow: -2px -2px 0 rgba(251, 1, 252, .7), 2px 2px 0 rgba(4, 251, 246, 0.7)"
  );

  const root = document.getElementById("home");
  root.innerHTML = "";

  return results.forEach(results => {
    // niet beter een array.map voor gebruiken?
    root.insertAdjacentHTML(
      "afterend",
      "<article>" +
        "<h3>" +
        results.name +
        "</h3><a href=" +
        results.homepage +
        "><p>" +
        results.description +
        '</p></a><img src="' +
        results.avatar +
        '">' +
        "<p>" +
        "id: " +
        results.id +
        "</p>" +
        "<p>" +
        "node_id: " +
        results.node_id +
        "</p>" +
        "<p>" +
        "name: " +
        results.name +
        "</p>" +
        "<p>" +
        "full_name: " +
        results.full_name +
        "</p>" +
        "<p>" +
        "private: " +
        results.private +
        "</p>" +
        "<p>" +
        "owner: " +
        results.owner +
        "</p>" +
        "<p>" +
        "html_url: " +
        results.html_url +
        "</p>" +
        "<p>" +
        "description: " +
        results.description +
        "</p>" +
        "</article>"
    );
  });
}

const sections = document.querySelectorAll('section');

// update UI from route (hashchange)
function updateUI(route) {
  sections.forEach(section => {
    section.classList.remove('active');
  });
  activeSection = document.querySelector(`[data-route=${route}]`);
  console.log(activeSection);
  activeSection.classList.add('active');
}

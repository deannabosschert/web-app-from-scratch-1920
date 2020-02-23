import { Fetcher } from "./fetcher.js";

(function checkLocalStorage() {
  const storage = window.localStorage;
    if (storage.getItem("githubRepos") === null) {
      console.log("geen data in je localStorage")
      loadData()
    } else {
      console.log("wel data in je localStorage")
      const data = JSON.parse(storage.getItem("githubRepos"));
      render(data)
    }
})()

function loadData() {
  //   // https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
  const endpoint = "https://api.github.com";
  const minor = "/cmda-minor-web";
  const course = "/web-app-from-scratch-";
  const year = "1920";
  const tag = "/forks";
  const limit = "50";
  const apiLink = `${endpoint}/repos${minor}${course}${year}${tag}?per_page=${limit}`;

  Fetcher.get(apiLink)
    .then(res => {
      const data = filterArray(res);
      storeData(data)
      render(data);
    })
    .catch(err => {
      console.log(err);
    });
}

function storeData(data){
  // console.log(data)
  // const ava = data.avatar
  // console.log(ava)
// ergens hier de images van de avatar, apart storen? --> later naar kijken, nog niet specifiek relevant.
// https://hacks.mozilla.org/2012/02/saving-images-and-files-in-localstorage/
  return localStorage.setItem("githubRepos", JSON.stringify(data));
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

//
// function routeDingen() {
//
// routie({
//
//   // "":() => {
//   //   updateUI('home'); // app.init()
//   //  },
//   home: () => {
//     updateUI('home');
//   },
//   stats: () => {
//     updateUI('stats');
//   },
//   progress: () => {
//     updateUI('progress');
//   }
// });
// }

// router.handle()

function render(data) {
  console.log(
    "%c Test!",
    "text-transform: uppercase; background: #000; color: #FFF; font-size: 21pt; font-weight: bold; padding: 5px 20px; text-shadow: -2px -2px 0 rgba(251, 1, 252, .7), 2px 2px 0 rgba(4, 251, 246, 0.7)"
  );

  console.log(data);

  const root = document.getElementById("overview");
  console.log(root);

  root.innerHTML = "";

  return data.forEach(data => {
    // niet beter een array.map voor gebruiken?
    root.insertAdjacentHTML(
      "afterend",
      "<article>" +
        "<h3>" +
        data.name +
        "</h3><a href=" +
        data.homepage +
        "><p>" +
        data.description +
        '</p></a><img src="' +
        data.avatar +
        '">' +
        "<p>" +
        "id: " +
        data.id +
        "</p>" +
        "<p>" +
        "node_id: " +
        data.node_id +
        "</p>" +
        "<p>" +
        "name: " +
        data.name +
        "</p>" +
        "<p>" +
        "full_name: " +
        data.full_name +
        "</p>" +
        "<p>" +
        "private: " +
        data.private +
        "</p>" +
        "<p>" +
        "owner: " +
        data.owner +
        "</p>" +
        "<p>" +
        "html_url: " +
        data.html_url +
        "</p>" +
        "<p>" +
        "description: " +
        data.description +
        "</p>" +
        "</article>"
    );
  });
}

function filterArray(array) {
  return array.map(data => {
    return {
      name: data.owner.login,
      description: data.description,
      avatar: data.owner.avatar_url,
      homepage: data.homepage,
      id: data.id,
      ding: data.ding,
      id: data.id,
      node_id: data.node_id,
      name: data.name,
      full_name: data.full_name,
      private: data.private,
      owner: data.owner,
      html_url: data.html_url,
      description: data.description
    };
  });
}
//
// // update UI from route (hashchange)
// function updateUI(route) {
//   const sections = document.querySelectorAll('section');
//   sections.forEach(section => {
//     section.classList.remove('active');
//   });
//   activeSection = document.querySelector(`[data-route=${route}]`);
//   console.log(activeSection);
//   activeSection.classList.add('active');
// }

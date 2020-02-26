// function routeDingen() {
//   import Router from "./helpers/routie.js"
//   const router = require("router")
//   var router = {
//     handle: function() {
//       routie(
//         "/",
//         function() {
//           console.log("alles")
//         },
//         ":id",
//         function() {
//           console.log(id)
//         }
//       )
//     }
//   }
//
//   router.handle()
// }

//
// function routeDingen() {
//
// routie({
//
//   // "":() => {
//   //   updateUI('home') // app.init()
//   //  },
//   home: () => {
//     updateUI('home')
//   },
//   stats: () => {
//     updateUI('stats')
//   },
//   progress: () => {
//     updateUI('progress')
//   }
// })
// }

// router.handle()






// // update UI from route (hashchange)
// function updateUI(route) {
//   const sections = document.querySelectorAll('section')
//   sections.forEach(section => {
//     section.classList.remove('active')
//   })
//   activeSection = document.querySelector(`[data-route=${route}]`)
//   console.log(activeSection)
//   activeSection.classList.add('active')
// }
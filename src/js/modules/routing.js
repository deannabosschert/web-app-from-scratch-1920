// const sections = document.querySelectorAll('section');
//
// routie({
//   //#giphy/425367
//   // 'giphy/:id': id => {
//   //   console.log(id);
//   // },
//   network: () => {
//     updateUI('network');
//   },
//   console: () => {
//     updateUI('console');
//   },
//   debugger: () => {
//     updateUI('debugger');
//   },
//   errors: () => {
//     updateUI('errors');
//   }
// });
//
// // update UI from route (hashchange)
// function updateUI(route) {
//   sections.forEach(section => {
//     section.classList.remove('active');
//   });
//   activeSection = document.querySelector(`[data-route=${route}]`);
//   console.log(activeSection);
//   activeSection.classList.add('active');
// }
//


//
//
// function routing() {
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
export function router() {

  // function routeDingen() {
  routie({
    '/': () => {
      updateUI('/')
    },
    stats: () => {
      updateUI('stats')
    }
  })
  // }

  // router.handle()



  // update UI from route (hashchange)
  function updateUI(route) {
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      section.classList.remove('active')
    })
    const activeSection = document.querySelector(`[data-route=${route}]`)
    console.log(activeSection)
    activeSection.classList.add('active')
  }

}

export default router
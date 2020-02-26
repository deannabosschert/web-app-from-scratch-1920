# Class of 2020
## Web App From Scratch @cmda-minor-web 1920
https://wafs.netlify.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/9aec17a8-142c-40c1-a2b2-ad3e73f9f652/deploy-status)](https://app.netlify.com/sites/wafs/deploys)

![screenshot of web app](https://github.com/deannabosschert/web-app-from-scratch-1920/blob/master/src/img/screenshot_webApp.png)


<details>
  <summary><strong>Table of Contents</strong> (click to expand)</summary>

<!-- toc -->

- [✅ To-do](#--to-do)
- [📋 Concept](#---concept)
- [⚙️ Installation](#---installation)
- [🧑🏼‍ Actor Diagram](#------actor-diagram)
- [↔️ Interaction diagram](#---interaction-diagram)
- [🌍 Design patterns](#---design-patterns)
- [👍🏽 Best practices](#-----best-practices)
- [🗃 Data](#---data)
  * [🐒 Github API](#---github-api)
    + [Endpoint(s)](#endpoint-s-)
    + [Rate limiting](#rate-limiting)
  * [💽 Data cleaning](#---data-cleaning)
- [👯🏿‍ Features (+ wishlist)](#------features----wishlist-)
- [🏫 Assignment](#---assignment)
  * [Learning goals](#learning-goals)
  * [Week 1 - Hello API 🐒](#week-1---hello-api---)
  * [Week 2 - Design and Refactor 🛠](#week-2---design-and-refactor---)
  * [Week 3 - Wrapping up 🎁](#week-3---wrapping-up---)
  * [Rubric](#rubric)
- [ℹ️ Resources](#---resources)
  * [Credits](#credits)
  * [Small inspiration sources](#small-inspiration-sources)
- [🗺️ License](#----license)


<!-- tocstop -->

</details>

## ✅ To-do
- [ ] Add info about API (rate limit, etc)
- [ ] Add search (in-repo or global? idk yet)
- [ ] Error handling _everywhere_
- [ ] Add function to captitalize usernames
- [ ] Add detail page (=stats)
- [ ] Add interaction diagram
- [ ] Styling
- [ ] Add datavisualization
- [ ] Finish readme
- [ ] English-Dutch variable names, comments etc --> all in English (of Dunglish lol)
- [ ] Revert everything to arrowfunctions
- [ ] Apply nerd-score? gouden frame voor de grootste nerd
- [ ] Localstorage.getItem (ietsgetten) in een if-state
  `if (localStorage.getItem('stations')) {}`

## 📋 Concept
_What does your app do, what is the goal? (passing butter)_
This app is for keeping track of the current progress of the Web App From Scratch class in the minor Webdevelopment (2020).

## ⚙️ Installation
Clone this repository to your own device:
```bash
$ git clone https://github.com/deannabosschert/web-app-from-scratch-1920.git
```
Then, run navigate to the folder and run:

```bash
python -m SimpleHTTPServer 8000`
```

#### Helpers
The used external packages are placed in the 'helpers'-folder as a static file.
- [Transparency](https://github.com/leonidas/transparency)
- [Routie](https://github.com/jgallen23/routie)
- [Fetcher](https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939)


## 🧑🏼‍ Actor Diagram
_Which actors are there in your application? (actor diagram)_
![actor diagram](https://github.com/deannabosschert/web-app-from-scratch-1920/blob/master/src/img/actordiagram.png)

*To-do*
- [ ] 'API DB" = GitHub API-source
- [ ] LocalStorage; geef aan dat het erin wordt gezet
- [ ] render.error bij routing?? fixen 👽
- [ ] Add overview, stats etc bij router
- [ ] Nieuwe apicall bij detailpagina
-

## ↔️ Interaction diagram
_How does flowed interaction through the application? (interaction diagram)_
![interaction diagram](https://github.com/deannabosschert/web-app-from-scratch-1920/blob/master/src/img/interactiondiagram.png)

Welke volgorde heeft je code?

- [x] Overview van de huidige klas
- [ ] Detailpagina per student

- [ ] 'Stats'-pagina:
- [ ] Leaderboard per ding (aantal commits, aantal fixed issues, aantal openstaande issues)
- [ ] 'Wie heeft wat wel en wie wat niet' -> stats (branches, wiki, license)
- [ ] Wie is waar in 't programma'? (check voor bestand met 'router', 'routie', etc)
- [ ] Wie schrijft bepaalde dingen zelf? (idk if possible, nice to have)

## 🌍 Design patterns
- The usage of Modules?
- The usage of .map .filter .reduce?
- My 'filterArray'-function?

## 👍🏽 Best practices
- Work in branches, even if it's a one-man project. It helps staying focused on one feature until it's finished, and keeps your from doing 10 different things at the same time. Saves you merge conflicts, too.
- ^ also helps with 'closing' a feature, so you are more likely to move on to the next. Too little time, too much ideas.
- Commit early, commit often.
- Make single-purpose commits.
- Always fix your .gitignore-contents asap; node_modules or the like won't ever be pushed that way. 
- Styling comes last. It's gonna change anyways so most of the time, it's better to fix the technical stuff first.
- Don't use declarations in the global scope.
- Start your project with writing down the future function names (pre-actors, basically).
- Make your own template for your readme
- Google, google, google. 99% of the time, it'll get you to the solution of your problem.
- Set timers for solving problems that aren't super relevant in the current sprint but you do would like to work on; 25 mins tops, otherwise you'll be stuck with this for too long.
- Make an actor diagram halfway through, it's a great reminder to refactor the code.
- Explicitly limit the scope of your functions
- Remember that most problems/features that have to do with the UI, can be fixed with mainly CSS.
- Do not use .innerHTML
- If there's an error, walk through your code from the top/beginning; explain it to your rubber ducky and state where certain data is passed.
- Implement useful error handling.

## 🗃 Data

### 🐒 Github API
_What external data source is featured in your project and what are its properties?_
The API I've used is [Github's](https://api.github.com).

(wat is er interessant aan de data?)


#### Endpoint(s)
The endpoint I'm using on the overview page is the following:
`https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-1920/forks?per_page=50`



#### Rate limiting
For API requests using Basic Authentication or OAuth, you can make up to 5000 requests per hour. Authenticated requests are associated with the authenticated user, regardless of whether Basic Authentication or an OAuth token was used. This means that all OAuth applications authorized by a user share the same quota of 5000 requests per hour when they authenticate with different tokens owned by the same user.

For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

So, if you aren't an authenticated user, your rate limit is 60 requests per hour.

If you do exceed this limit, you'll see the following error message and it's probably a better idea to request as an Authenticated user:
``` js
HTTP/1.1 403 Forbidden
Date: Tue, 20 Aug 2013 14:50:41 GMT
Status: 403 Forbidden
X-RateLimit-Limit: 60
X-RateLimit-Remaining: 0
X-RateLimit-Reset: 1377013266
{
   "message": "API rate limit exceeded for xxx.xxx.xxx.xxx. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
   "documentation_url": "https://developer.github.com/v3/#rate-limiting"
}
```



### 💽 Data cleaning
_What has been done with the fetched data?_
*Filtering the data using array.filter*

```js
function filterArray(array) {
  return array.filter(results => {
    return {
      name: results.owner.login,
      description: results.description,
      avatar: results.owner.avatar_url,
      homepage: results.homepage,
      id: results.id,
      ding: results.ding,
      id: results.id
      }
   }
}
```

*Rendering the data to html-representation using array.map *

*Reduce the output to the browser, following a certain UI*


## 👯🏿‍ Features (+ wishlist)
_What would you like to add (feature wishlist / backlog)?_
- [x] Overview van de huidige klas
- [ ] Detailpagina per student

- [ ] Showing the latest commits per student
- [ ] Showing a 'nerd-leaderboard' based on the amount of lines/commits, fixed issues, open issues etc
- [ ] Showing stats about the implementation of certain things (who uses branches, pushes enough commits, has a wiki, has a license added etc)
- [ ] Who's where in the curriculum? (check presence of 'routing', 'templating', 'modules' etc.
- [ ] Who uses micro libraries, and who's a supernerd and e.g. writes their own virtual DOM or router?

## 🏫 Assignment
<details>
  <summary></strong> (click to expand)</summary>
In this course I learned to build a web application without frameworks or unnecessary libraries, but with vanilla HTML, CSS & JavaScript as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API of my choice, manipulated and finally shown in the UI of the App. I have learned different ways to structure code and developed my own coding style. With the gained knowledge I'm able to build interactive prototypes, based on real data. Also, I gained a better understanding of the how API's, frameworks and libraries work.

### Learning goals
- _You can add structure to your code by applying patterns. You can defend the choice for the chosen patterns_
- _You can retrieve data, manipulate it and dynamically convert it to html elements using templating_
- _You understand how you can work with an external API using asynchronous code_
- _You understand how you can manage state in your application and you inform the user of state where necessary_

### Week 1 - Hello API 🐒

Goal: Retrieve data from an API and render it in an overview page.

### Week 2 - Design and Refactor 🛠

Goal: Design the web app. Add routes and states. Rendering detail page.

### Week 3 - Wrapping up 🎁

Goal: Manipulate data. Split code into modules. Reflect on end result

</details>

### Rubric

[Rubric- detailed rating of my project](https://github.com/deannabosschert/web-app-from-scratch-1920/wiki/Rubric)
![rubric](https://github.com/deannabosschert/web-app-from-scratch-1920/blob/master/src/img/rubric.png)

## ℹ️ Resources
https://developer.github.com/v3/

### Credits
- Our superamazingteachers at the [minor WebDev @CMD](https://github.com/cmda-minor-web/web-app-from-scratch-1920)
- [Async loading- Joost](https://codepen.io/collection/AyJdPK/)
- [SPA web app- Laurens](https://vizhub.com/Razpudding/21168a56571643e8ba7951892787f9b3?edit=files&file=index.js)
- [Routie](https://codepen.io/joostf/pen/jOPPMLK)

### Small inspiration sources
- [Responsive square](https://spin.atomicobject.com/2015/07/14/css-responsive-square/) for avatar skeleton

## 🗺️ License

MIT dingen

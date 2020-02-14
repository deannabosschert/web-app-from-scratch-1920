## Web App From Scratch @cmda-minor-web 1920

# Class of 2020

https://wafs.netlify.com/
![screenshot of web app](https://github.com/deannabosschert/web-app-from-scratch-1920/blob/master/docs/img/screenshot_webApp.png)

[![Netlify Status](https://api.netlify.com/api/v1/badges/9aec17a8-142c-40c1-a2b2-ad3e73f9f652/deploy-status)](https://app.netlify.com/sites/wafs/deploys)

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

- [ ] Refactor code (all global now), but I'll save that for when I've fixed routing completely
- [ ] Functional shizzle (refactor)
- [ ] Add info about API (rate limit, etc)
- [ ] Add search (in-repo or global? idk yet)
- [ ] Add error handling
- [ ] Add function to captitalize usernames
- [ ] Add detail page
- [ ] Add stats page
- [ ] Add interaction diagram
- [ ] Styling
- [ ] Add datavisualization
- [ ] Finish readme
- [ ] Prepare peer review
- [ ] English-Dutch variable names, comments etc --> all in English (of Dunglish lol)
- [ ] Revert everything to arrowfunctions
- [ ] Better function+variablenames
- [ ] The huge ass injected html-list fixen
- [ ] Fix comments in code
- [ ] Templating engine adden
- [ ] Apply nerd-score? gouden frame voor de grootste nerd


- [ ] Localstorage.getItem (ietsgetten) in een if-state
  `if (localStorage.getItem('stations')) {}`

## 📋 Concept

What does your app do, what is the goal? (passing butter)
This app is for keeping track of the current progress of the Web App From Scratch class in the minor Webdevelopment (2020).

## ⚙️ Installation

This repository doesn't have any dependencies.. yet.

Clone this repository to your own device, then run `index.html`.
```bash
$ git clone https://github.com/deannabosschert/web-app-from-scratch-1920.git
```


```json
{
  "name": "my-package",
  "version": "1.0.0",
  "scripts": {
    "iets": "iets"
  },
  "devDependencies": {
    "iets": "*"
  }
}
```

## 🧑🏼‍ Actor Diagram

Which actors are there in your application? (actor diagram)
![actor diagram](https://github.com/deannabosschert/web-app-from-scratch-1920/blob/master/docs/img/actordiagram.png)
 
*To-do*
- [ ] 'API DB" = GitHub API-source
- [ ] LocalStorage; geef aan dat het erin wordt gepleurd
- [ ] render.error bij routing?? lmao wat 👽
- [ ] 

## ↔️ Interaction diagram

How does flowed interaction through the application? (interaction diagram)
![interaction diagram](https://github.com/deannabosschert/web-app-from-scratch-1920/blob/master/docs/img/interactiondiagram.png)

- [x] Overview van de huidige klas
- [ ] Detailpagina per student

- [ ] 'Stats'-pagina:
- [ ] Leaderboard per ding (aantal commits, aantal fixed issues, aantal openstaande issues)
- [ ] 'Wie heeft wat wel en wie wat niet' -> stats (branches, wiki, license)
- [ ] Wie is waar in 't programma'? (check voor bestand met 'router', 'routie', etc)
- [ ] Wie schrijft bepaalde dingen zelf? (idk if possible, nice to have)

## 🌍 Design patterns

- opsomming
- van
- patterns

## 👍🏽 Best practices

- opsomming
- van
- practices

## 🗃 Data

### 🐒 Github API

The API I've used is [Github's](https://api.github.com).

(wat is er interessant aan de data?)


#### Endpoint(s)
The endpoint I'm using on the overview page is the following:
`https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-1920/forks?per_page=50`



#### Rate limiting

For API requests using Basic Authentication or OAuth, you can make up to 5000 requests per hour. Authenticated requests are associated with the authenticated user, regardless of whether Basic Authentication or an OAuth token was used. This means that all OAuth applications authorized by a user share the same quota of 5000 requests per hour when they authenticate with different tokens owned by the same user.

For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

Note that the Search API has custom rate limit rules.

The returned HTTP headers of any API request show your current rate limit status.

If you aren't an authenticated user, your rate limit is 60 requests per hour.

If you do exceed this limit, you'll see the following error message:
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

Wat is er gedaan met de opgehaalde data?
*Filtering middels array.map*

```js
function filterArray(array) {
  return array.map(results => {
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

## 👯🏿‍ Features (+ wishlist)

What would you like to add (feature wishlist / backlog)?
- [x] Overview van de huidige klas
- [ ] Detailpagina per student

- [ ] 'Stats'-pagina:
- [ ] Leaderboard per ding (aantal commits, aantal fixed issues, aantal openstaande issues)
- [ ] 'Wie heeft wat wel en wie wat niet' -> stats (branches, wiki, license)
- [ ] Wie is waar in 't programma'? (check voor bestand met 'router', 'routie', etc)
- [ ] Wie schrijft bepaalde dingen zelf? (idk if possible, nice to have)

## 🏫 Assignment

In this course I learned to build a web application without frameworks or unnecessary libraries, but with vanilla HTML, CSS & JavaScript as much as possible. The end result is a modular, single page web app (SPA). Data will be retrieved from an external API of my choice, manipulated and finally shown in the UI of the App. I have learned different ways to structure code and developed my own coding style. With the gained knowledge I'm able to build interactive prototypes, based on real data. Also, I gained a better understanding of the how API's, frameworks and libraries work.

### Learning goals

- _You can add structure to your code by applying patterns. You can defend the choice for the chosen patterns_
- _You can retrieve data, manipulate it and dynamically convert it to html elements using templating_
- _You understand how you can work with an external API using asynchronous code_
- _You understand how you can manage state in your application and you inform the user of state where necessary_

### Week 1 - Hello API 🐒

Goal: Retrieve data from an API and render it in an overview page.
--> hoe heb ik dit gedaan? --> verwijzing naar wiki, of inklappen?

### Week 2 - Design and Refactor 🛠

Goal: Design the web app. Add routes and states. Rendering detail page.

### Week 3 - Wrapping up 🎁

Goal: Manipulate data. Split code into modules. Reflect on end result

### Rubric

[Rubric- detailed rating of my project](https://github.com/deannabosschert/web-app-from-scratch-1920/wiki/Rubric)
![rubric](https://github.com/deannabosschert/web-app-from-scratch-1920/blob/master/docs/img/rubric.png)

## ℹ️ Resources
https://developer.github.com/v3/

### Credits

- [Github repo cmd](https://documentup.com/shelljs/)
- [Repo klasgenoot](https://github.com)
- [idk sumting](https://github.com/)

- [Async loading- Joost](https://codepen.io/collection/AyJdPK/)

### Small inspiration sources

- [medium ofzo](https://github.com)
- [dribbble?](https://github.com)

## 🗺️ License

MIT dingen

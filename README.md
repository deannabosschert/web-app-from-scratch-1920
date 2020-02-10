## Web App From Scratch @cmda-minor-web 1819

# Class of 2020

https://wafs.netlify.com/
[screenshot]

[![Netlify Status](https://api.netlify.com/api/v1/badges/9aec17a8-142c-40c1-a2b2-ad3e73f9f652/deploy-status)](https://app.netlify.com/sites/wafs/deploys)

<details>
  <summary><strong>Table of Contents</strong> (click to expand)</summary>

<!-- toc -->

- [Concept](#Concept)
- [Installation](#Installation)
- [Actor diagram](#Actordiagram)
- [Interaction diagram](#Interactiondiagram)
- [Design patterns](#interactiondiagram)
- [Best practices](#bestpractices)
- [Data](#data)
- [Features](#features)
- [Assignment](#assignment)
- [Resources](#resources)

<!-- tocstop -->

</details>

## To-do

- [ ] Refactor code (all global now), but I'll save that for when I've fixed routing
- [ ] Functional shizzle (refactor)
- [ ] Add info about API (rate limit, etc)
- [ ] Add search (in-repo or global? idk yet)
- [ ] Add error handling
- [ ] Add function to captitalize usernames
- [ ] Styling
- [ ] Add datavisualization

## Concept

What does your app do, what is the goal? (passing butter)
This app is for keeping track of the current progress of the Web App From Scratch class in the minor Webdevelopment (2020).

## Installation

This repository doesn't have any dependencies.

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

## Actor Diagram

Which actors are there in your application? (actor diagram)
![actor diagram](https://github.com/deannabosschert/web-app-from-scratch-1920/blob/master/docs/img/actordiagram.png)

## Interaction diagram

How does flowed interaction through the application? (interaction diagram)
![interaction diagram](https://github.com/deannabosschert/web-app-from-scratch-1920/blob/master/docs/img/interactiondiagram.png)

- [x] Overview van de huidige klas
- [ ] Detailpagina per student

- [ ] 'Stats'-pagina:
- [ ] Leaderboard per ding (aantal commits, aantal fixed issues, aantal openstaande issues)
- [ ] 'Wie heeft wat wel en wie wat niet' -> stats (branches, wiki, license)
- [ ] Wie is waar in 't programma'? (check voor bestand met 'router', 'routie', etc)
- [ ] Wie schrijft bepaalde dingen zelf? (idk if possible, nice to have)

## Design patterns

- opsomming
- van
- patterns

## Best practices

- opsomming
- van
- practices

## Data

### Github API

The API I've used is [Github's](https://api.github.com).
Which API is used and what are the limitations? (rate limit)
[iets van uitleg over de api]

#### Rate limiting

For API requests using Basic Authentication or OAuth, you can make up to 5000 requests per hour. Authenticated requests are associated with the authenticated user, regardless of whether Basic Authentication or an OAuth token was used. This means that all OAuth applications authorized by a user share the same quota of 5000 requests per hour when they authenticate with different tokens owned by the same user.

For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the user making requests.

Note that the Search API has custom rate limit rules.

The returned HTTP headers of any API request show your current rate limit status:

### Data cleaning

wat is er gedaan met de opgehaalde data?

```js
```

## Features (+ wishlist)

What would you like to add (feature wishlist / backlog)
features in de app

## Assignment

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

[Rubric](https://docs.google.com/spreadsheets/d/e/2PACX-1vTjZGWGPC_RMvTMry8YW5XOM79GEIdgS7I5JlOe6OeeOUdmv7ok1s9jQhzojNE4AsyzgL-jJCbRj1LN/pubhtml?gid=0&single=true)

## Resources

### Credits

- [Github repo cmd](https://documentup.com/shelljs/)
- [Repo klasgenoot](https://github.com)
- [idk sumting](https://github.com/)

- [Async loading- Joost](https://codepen.io/collection/AyJdPK/)

### Small inspiration sources

- [medium ofzo](https://github.com)
- [dribbble?](https://github.com)

## License

MIT dingen

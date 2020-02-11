// https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Local_storage

// import Router from "./routie.js";
// const router = require("router");

const endpoint = "https://api.github.com";
const minor = "/cmda-minor-web";
const course = "/web-app-from-scratch-";
const year = "1920";
const tag = "/forks";
const limit = "50";
const url = `https://api.github.com/repos/cmda-minor-web/web-app-from-scratch-1920/forks?per_page=50`;
const apiLink =
  endpoint + "/repos" + minor + course + year + tag + "?per_page=" + limit;

fetch(apiLink)
  // .then(res => res.json()) // correcte errhandling nog adden, zie linkje van Joost/Laurens in slack
  // https://codeburst.io/fetch-api-was-bringing-darkness-to-my-codebase-so-i-did-something-to-illuminate-it-7f2d8826e939
  .then(function(res) {
    return res.json();
  })
  .then(function(json) {
    const data = filterArray(json);
    // pleur de data in een string en yeet 'm vervolgens in localStorage onder "recipes"
    return localStorage.setItem("repos", JSON.stringify(data));
  });

// haal "recipes" op uit localStorage en parse ze in JSON zodat 't weer bruikbaar is (getest met wifi uitgezet)
const results = JSON.parse(localStorage.getItem("repos"));
const root = document.getElementById("one");
root.innerHTML = "";
console.log(results);
results.forEach(results => {
  // niet beter een array.map voor gebruiken?
  root.insertAdjacentHTML(
    "afterend",
    "<article>" +
      "<h2>" +
      results.name +
      "</h2><a href=" +
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
      "<p>" +
      "fork: " +
      results.fork +
      "</p>" +
      "<p>" +
      "url: " +
      results.url +
      "</p>" +
      "<p>" +
      "forks_url: " +
      results.forks_url +
      "</p>" +
      "<p>" +
      "keys_url: " +
      results.keys_url +
      "</p>" +
      "<p>" +
      "collaborators_url: " +
      results.collaborators_url +
      "</p>" +
      "<p>" +
      "teams_url: " +
      results.teams_url +
      "</p>" +
      "<p>" +
      "hooks_url: " +
      results.hooks_url +
      "</p>" +
      "<p>" +
      "issue_events_url: " +
      results.issue_events_url +
      "</p>" +
      "<p>" +
      "events_url: " +
      results.events_url +
      "</p>" +
      "<p>" +
      "assignees_url: " +
      results.assignees_url +
      "</p>" +
      "<p>" +
      "branches_url: " +
      results.branches_url +
      "</p>" +
      "<p>" +
      "tags_url: " +
      results.tags_url +
      "</p>" +
      "<p>" +
      "blobs_url: " +
      results.blobs_url +
      "</p>" +
      "<p>" +
      "git_tags_url: " +
      results.git_tags_url +
      "</p>" +
      "<p>" +
      "git_refs_url: " +
      results.git_refs_url +
      "</p>" +
      "<p>" +
      "trees_url: " +
      results.trees_url +
      "</p>" +
      "<p>" +
      "statuses_url: " +
      results.statuses_url +
      "</p>" +
      "<p>" +
      "languages_url: " +
      results.languages_url +
      "</p>" +
      "<p>" +
      "stargazers_url: " +
      results.stargazers_url +
      "</p>" +
      "<p>" +
      "contributors_url: " +
      results.contributors_url +
      "</p>" +
      "<p>" +
      "subscribers_url: " +
      results.subscribers_url +
      "</p>" +
      "<p>" +
      "subscription_url: " +
      results.subscription_url +
      "</p>" +
      "<p>" +
      "commits_url: " +
      results.commits_url +
      "</p>" +
      "<p>" +
      "git_commits_url: " +
      results.git_commits_url +
      "</p>" +
      "<p>" +
      "comments_url: " +
      results.comments_url +
      "</p>" +
      "<p>" +
      "issue_comment_url: " +
      results.issue_comment_url +
      "</p>" +
      "<p>" +
      "contents_url: " +
      results.contents_url +
      "</p>" +
      "<p>" +
      "compare_url: " +
      results.compare_url +
      "</p>" +
      "<p>" +
      "merges_url: " +
      results.merges_url +
      "</p>" +
      "<p>" +
      "archive_url: " +
      results.archive_url +
      "</p>" +
      "<p>" +
      "downloads_url: " +
      results.downloads_url +
      "</p>" +
      "<p>" +
      "issues_url: " +
      results.issues_url +
      "</p>" +
      "<p>" +
      "pulls_url: " +
      results.pulls_url +
      "</p>" +
      "<p>" +
      "milestones_url: " +
      results.milestones_url +
      "</p>" +
      "<p>" +
      "notifications_url: " +
      results.notifications_url +
      "</p>" +
      "<p>" +
      "labels_url: " +
      results.labels_url +
      "</p>" +
      "<p>" +
      "releases_url: " +
      results.releases_url +
      "</p>" +
      "<p>" +
      "deployments_url: " +
      results.deployments_url +
      "</p>" +
      "<p>" +
      "created_at: " +
      results.created_at +
      "</p>" +
      "<p>" +
      "updated_at: " +
      results.updated_at +
      "</p>" +
      "<p>" +
      "pushed_at: " +
      results.pushed_at +
      "</p>" +
      "<p>" +
      "git_url: " +
      results.git_url +
      "</p>" +
      "<p>" +
      "ssh_url: " +
      results.ssh_url +
      "</p>" +
      "<p>" +
      "clone_url: " +
      results.clone_url +
      "</p>" +
      "<p>" +
      "svn_url: " +
      results.svn_url +
      "</p>" +
      "<p>" +
      "homepage: " +
      results.homepage +
      "</p>" +
      "<p>" +
      "size: " +
      results.size +
      "</p>" +
      "<p>" +
      "stargazers_count: " +
      results.stargazers_count +
      "</p>" +
      "<p>" +
      "watchers_count: " +
      results.watchers_count +
      "</p>" +
      "<p>" +
      "language: " +
      results.language +
      "</p>" +
      "<p>" +
      "has_issues: " +
      results.has_issues +
      "</p>" +
      "<p>" +
      "has_projects: " +
      results.has_projects +
      "</p>" +
      "<p>" +
      "has_downloads: " +
      results.has_downloads +
      "</p>" +
      "<p>" +
      "has_wiki: " +
      results.has_wiki +
      "</p>" +
      "<p>" +
      "has_pages: " +
      results.has_pages +
      "</p>" +
      "<p>" +
      "forks_count: " +
      results.forks_count +
      "</p>" +
      "<p>" +
      "mirror_url: " +
      results.mirror_url +
      "</p>" +
      "<p>" +
      "archived: " +
      results.archived +
      "</p>" +
      "<p>" +
      "disabled: " +
      results.disabled +
      "</p>" +
      "<p>" +
      "open_issues_count: " +
      results.open_issues_count +
      "</p>" +
      "<p>" +
      "license: " +
      results.license +
      "</p>" +
      "<p>" +
      "forks: " +
      results.forks +
      "</p>" +
      "<p>" +
      "open_issues: " +
      results.open_issues +
      "</p>" +
      "<p>" +
      "watchers: " +
      results.watchers +
      "</p>" +
      "<p>" +
      "default_branch: " +
      results.default_branch +
      "</p>" +
      "</article>"
  );
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
      fork: results.fork,
      url: results.url,
      forks_url: results.forks_url,
      keys_url: results.keys_url,
      collaborators_url: results.collaborators_url,
      teams_url: results.teams_url,
      hooks_url: results.hooks_url,
      issue_events_url: results.issue_events_url,
      events_url: results.events_url,
      assignees_url: results.assignees_url,
      branches_url: results.branches_url,
      tags_url: results.tags_url,
      blobs_url: results.blobs_url,
      git_tags_url: results.git_tags_url,
      git_refs_url: results.git_refs_url,
      trees_url: results.trees_url,
      statuses_url: results.statuses_url,
      languages_url: results.languages_url,
      stargazers_url: results.stargazers_url,
      contributors_url: results.contributors_url,
      subscribers_url: results.subscribers_url,
      subscription_url: results.subscription_url,
      commits_url: results.commits_url,
      git_commits_url: results.git_commits_url,
      comments_url: results.comments_url,
      issue_comment_url: results.issue_comment_url,
      contents_url: results.contents_url,
      compare_url: results.compare_url,
      merges_url: results.merges_url,
      archive_url: results.archive_url,
      downloads_url: results.downloads_url,
      issues_url: results.issues_url,
      pulls_url: results.pulls_url,
      milestones_url: results.milestones_url,
      notifications_url: results.notifications_url,
      labels_url: results.labels_url,
      releases_url: results.releases_url,
      deployments_url: results.deployments_url,
      created_at: results.created_at,
      updated_at: results.updated_at,
      pushed_at: results.pushed_at,
      git_url: results.git_url,
      ssh_url: results.ssh_url,
      clone_url: results.clone_url,
      svn_url: results.svn_url,
      homepage: results.homepage,
      size: results.size,
      stargazers_count: results.stargazers_count,
      watchers_count: results.watchers_count,
      language: results.language,
      has_issues: results.has_issues,
      has_projects: results.has_projects,
      has_downloads: results.has_downloads,
      has_wiki: results.has_wiki,
      has_pages: results.has_pages,
      forks_count: results.forks_count,
      mirror_url: results.mirror_url,
      archived: results.archived,
      disabled: results.disabled,
      open_issues_count: results.open_issues_count,
      license: results.license,
      forks: results.forks,
      open_issues: results.open_issues,
      watchers: results.watchers,
      default_branch: results.default_branch
    };
  });
}
//
// var router = {
//   handle: function() {
//     routie(
//       "/",
//       function() {
//         console.log("alles");
//       },
//       ":id",
//       function() {
//         console.log(id);
//       }
//     );
//   }
// };
//
// router.handle();

// (async function () {
//     const articleId = getArticleId()
//     const article = await getArticle(articleId)
//     hydrateArticle(article)
// })()

// function getArticleId () {
//     return new URL (location.href).searchParans.get("id")
// }

// function getArticle(articleId) {
//     return fetch(${articleId})
//     .then(function(httpBodyResponse) {
//         return httpBodyResponse.json()
//     )}
//     .then(function(articles) {
//         return articles
//     })
//     .catch(function(error) {
//         alert(error)
//     })
// }

// function hydrateArticle(article) {
//  document.getElementById("blog_tilte").textContent = article.title
//  document.getElementById("blog_body").textContent = article.body
// }

//




const queryString_url_id = window.location.search;

//methode 1
//const id = queryString_url_id.slice

//methode 2
const urlSearchParams = new urlSearchParams(queryString_url_id)
const id = urlSearchParams.get("id")
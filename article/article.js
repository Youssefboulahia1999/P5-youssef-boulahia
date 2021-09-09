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




// const queryString_url_id = window.location.search;

// //methode 1
// //const id = queryString_url_id.slice

// //methode 2
// const urlSearchParams = new URLSearchParams(queryString_url_id)
// const id = urlSearchParams.get("id")
// console.log(id)
// //afficher le produit avec id 
// //methode 1
// let dataApi = fetch("http://localhost:3000/api/cameras/"+id);

// dataApi
// .then(async (responseData) => {
//    console.table(responseData);

//    camera = await responseData.json();
//    console.table(camera);
//   // document.getElementById("main").innerHTML = "ok" 

// //  creeDiv(response[0])
// creeDiv(camera)
//    try {


//    } catch (err) {
//        console.log(err);
//    }

// });

// function creePlusieurDiv(cameras) {
// for (let i = 0; i < cameras.length; i++)
// creeDiv(cameras[i])
// }

function creeDiv(data) {
document.getElementById("main").innerHTML +=
`
<div class="tete">
<img src="${data.imageUrl}">
<div class="text">
<h2>${data.name}<h2>
<p>${data.price}<p>
</div>
<option id="option" class="option">
</option>
</div>`
}




//ajouter les option
divOption = document.getElementById("option")
divOption.innerHTML += "ok"
//let creeDivOption = document.createElement("option");
for (b =0; b < lenses.length; b++){
    creeDivOption.innerHTML += `<option value="${b}">${lenses[b]}</option>`}



//ajouter un bouton - la quantite et le bouton +
let creeBoutonMoins = document.createElement("button")
creeBoutonMoins = element.appendChild(loge);
creeBoutonMoins.textContent ="-"
creeBoutonMoins.addEventListener("click",function(a){a.stopPropagation();
    if(inputNombre > 1){
        creeInput.value = `${--InputNombre}`
    }
})

let creeInput = document.createElement("input");
creeInput = element.appendChild(loge);
let inputNombre = 1;
creeInput.value =`1`;
creeInput.addEventListener("input",function(a){a.stopPropagation();
if(a.target.value >=0){
inputNombre = atarget.value;
}
})

let creeBoutonPlus = document.createElement("button")
creeBoutonPlus = element.appendChild(loge);
creeBoutonPlus.textContent ="+"
creeBoutonPlus.addEventListener("click",function(a){a.stopPropagation();
        creeInput.value = `${++InputNombre}`
})

//bouton du panier
const creeBoutonPanier = document.createElement("button-panier");
creeBoutonPanier =element.appendChild(loge);
const boutonPanier = document.querySelector("#button-panier");
boutonPanier.addEventListener("click",(event)=>{
    event.preventDefault
})

//recuper les valeur pour le panier
let lesArticle = {
namProduit: idProduitSelectiionner.namProduit,
id_ProduitSelectionner: idProduitSelectiionner.id_ProduitSelectionner,
Option: option.DivOption,
quantite: inputNombre.quantite,
prix:(idProduitSelectiionner.prix * quantite) /100
}

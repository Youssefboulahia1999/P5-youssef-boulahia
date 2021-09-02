// const urlCameras ="http://localhost:3000/api/cameras"

// dataApi = fetch("http://localhost:3000/api/cameras");

// dataApi
//     .then(async (responseData) => {
//         console.table(responseData);

// //         response = await responseData.json();
// //         console.log(response);

// //         try {


// //         } catch (err) {
// //             console.log(err);
// //         }

// //     });

// // // function creePlusieurDiv() {
// // //for (div of divs) {
// // //    creeUneDiv(Div)}

// // function créeDiv(main, data) {
// //     document.getElementById("main").innerHTML +=
// //     `
// //     <div class="tete">
// //     <a class="clik" href = "./article/index.html" >
// //     <img src="${data.imageUrl}">
// //     <div class="text">
// //     <h2>${data.name}<h2>
// //     <p>${data.price}<p>
// //     </div>
// //     </a>
// //     </div>`
// //     }














// main()

// async function main() {
//     const articles = await getArticles()

//     for (article of articles) {
//         displayArticle(article)
//     }
// }

// function getArticle() {
//     return fetch("http://localhost:3000/api/cameras")
//         .then(function (httpBodyResponse) {
//             return httpBodyResponse.json()
//         })
//         .then(function (articles) {
//             return articles
//         })
//         .catch(function (error) {
//             alert(error)
//         })
// }

// function displayArticles() {
//     document.getElementById("main").innerHTML += ` 
//     <article class="tete">
//     <a class="clik" href="./article/index.html">
//         <img src="">
//         <div class="text">
//             <h2><h2>
//                     <p><p>
//         </div>
//     </a>
// </article>`
// }











// dataApi = fetch("http://localhost:3000/api/cameras");

// dataApi
//     .then(async (responseData) => {
//         console.table(responseData);

//         response = await responseData.json();
//         console.table(response);

//         try {


//         } catch (err) {
//             console.log(err);
//         }

//     });

// const cree_une_div = `
//              <a class="clik" href="./article/index.html">
//              <article class="tete">
//                       <img src="${imgUrl =[i]}">
//                       <div class="text">
//                          <h2>${name[i]}<h2>
//                          <p>${description[i]}<p>
//                          <p>${prince[i]}<p>
//                      </div>
//                      </article>
//                   </a>
//                   `
// document.querySelector('.main').innerHTML =
//     cree_une_div;




// let imgUrl = [];
// let name = [];
// let prince = [];
// let description = [];
// let cree_une_div = "";
// let i = [];

// dataApi.forEach((element, i) => {
//     imageUrl[i] = element.imageUrl;
// });

// function affichageProduits(response) {
//     const positionElement = document.querySelector('main')


// }





//le code n'est de moi pascal je les prit comme exemple pour comprendre mais je n'arrive pas a le faire de moi




// function createDiv(divId, product) {
//     document.getElementById(divId).innerHTML+=
//     `<div class="col-md-6 col-xl-4 mt-2">
//         <div class="card bg-light  px-0">
//             <a class="stretched-link" href="pages/product.html?productType=${divId}&id=${product._id}"></a>
//             <img class="card-img-top rounded-top" src="${product.imageUrl}" alt="${product.description}">
//             <div class="card-body">
//                 <h5 class="card-title">${product.name}</h5>
//                 <h6 class="card-text">${product._id}</h6>
//                 <p class="card-text text-right">${product.price/100},00 €</p>
//             </div>
//         </div>
//     </div>`;
// }


// // Récupère les données de l'api
// function getAll (url, divId) {
//     fetch(url)
//     .then( function (response) {
//         if(response.ok) {
//             return response.json();
//           } else {
//             console.log('Mauvaise réponse du réseau');
//           }
//     })
//     .then(function (value){
//         for (let element of value){
//             createDiv(divId, element);
//         }
//     })
//     .catch(function (err){
//         //catch error
//         console.error(err);
//     })
// }
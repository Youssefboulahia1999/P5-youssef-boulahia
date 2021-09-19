const queryString_url_id = window.location.search;

//methode 2
const urlSearchParams = new URLSearchParams(queryString_url_id)
const id = urlSearchParams.get("id")
console.log(id)
//afficher le produit avec id 
//methode 1
let dataApi = fetch("http://localhost:3000/api/cameras/"+id);

dataApi
.then(async (responseData) => {
   console.table(responseData);

   camera = await responseData.json();
   console.table(camera);
// document.getElementById("main").innerHTML = "ok" 

// creeDiv(response[0])
creeDiv(camera)
try {
  console.log(camera.lenses)
} catch (err) {
    console.log(err);
}

});



function creeDiv(data) {
    document.getElementById("main").innerHTML +=
   `<div class="tete">
    <img src="${data.imageUrl}">
    <h2>${data.name}<h2>
    <p>${data.price /100}€<p>
    <select name="optionSelect" id="optionSelect"></select>
    </div>
    <button id="btMoins" id="btMoins" type="button">-</button>
    <input type="text" id="quantite" value="1">
    <button id="btPluss" id="btPlus" type="button">+</button>
    <button id="valide" type"submit">Ajouter au panier</buttun>
    </div>`;
}


// function creePlusOption(camera){
// for (let z = 0; z < cameras.length; z++){
// document.getElementById("#optionSelect").innerHTML +=`
// <option value="${z}">${camera.lenses}</option>
//`}
// }


 const creeInput = document.getElementById("quantite");

//ajouter un bouton - la quantite et le bouton +
document.getElementById("btMoins").addEventListener("click",function(a){a.stopPropagation();
    if(document.getElementById("quantite").value > 0){
      document.getElementById("quantite").value = `${--document.getElementById("quantite").value}`
    }
});

document.getElementById("btPlus").addEventListener("click",function(b){b.stopPropagation();
document.getElementById("quantite").value = `${++document.getElementById("quantite").value}`
});


document.getElementById("quantite").addEventListener("input",function(a){a.stopPropagation();
if(target.value >=0){
document.getElementById("quantite") = target.value;
}
})


//recuper les donnees selectiones
const optionPris = document.querySelector("#optionSelect");
const btnPanier = document.querySelector("#valide");


btnPanier.addEventListener("click", (event)=>{
event.preventDefault();
 
//  le choix de l'utlisateur qu'il faut garder dans le add sinon l'option ne sera pas pris en compte
const choixOption = optionPris.value;

//recuperation des valeurs du produit du const camera = api du produit
let optionProduit = {
    id: camera._id,
    name: camera.name,
    price: camera.price / 100,
    optionPris: choixOption,
    quantite:  document.getElementById("quantite"),
}

//popup
const popupConfirmation = () => {
    if(window.confirm(`${id} option: ${choixOption} a bien éte ajouté au panier 
    Consultez le panier OK ou revenir à l'accueill ANNULER`)){
        window.location.href = "panier.html";
    }

    else{
        window.location.href = "index.HTML";
    }    
}

    //cree la variable enregistreLocal 
    // fonction pour que les donnees soit en forma json dans le local dans la key produit
    let enregistreLocal = JSON.parse(localStorage.getItem("produit"));

//envoyer les produit choisi dans le local key produit
    const ajoutDoneeLocal = () => {
          enregistreLocal.push(optionProduit);
        localStorage.setItem("produit", JSON.stringify(enregistreLocal));
    };
     
    //si il n'y a pas de produit dans le local alors il va  en cree (null,false)
    if(enregistreLocal){
        //alors elle va ajoute le donnee plus popup va apparetre 
        ajoutDoneeLocal();
    popupConfirmation();
    }
    //si il y a des produit alors un tableau va ce cree[]
    else{
     enregistreLocal = [];
     ajoutDoneeLocal();
     popupConfirmation();
    }
})

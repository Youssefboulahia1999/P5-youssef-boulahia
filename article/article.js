const queryString_url_id = window.location.search;

//methode 2
const urlSearchParams = new URLSearchParams(queryString_url_id)
const id = urlSearchParams.get("id")
console.log(id)
//afficher le produit avec id 
//methode 1
let dataApi = fetch("http://localhost:3000/api/cameras/" + id);

dataApi
    .then(async (responseData) => {
        console.table(responseData);

        camera = await responseData.json();
        console.table(camera);
        // document.getElementById("main").innerHTML = "ok" 
        // creeDiv(response[0])
        creeDiv(camera);
        creePlusOption(camera);
        boutonMoins();
        boutonPlus();
        quantite();
        click ();
        //apresClick();

        try {
            const optionCamera = camera.lenses;
            console.log(optionCamera);
        } catch (err) {
            console.log(err);
        }

    });



function creeDiv(data) {
    document.getElementById("main").innerHTML +=
        `<div class="tete">
    <img src="${data.imageUrl}">
    <h2>${data.name}<h2>
    <p>Prix: ${data.price / 100}€<p>
    <select class="rtp" name="optionSelect" id="optionSelect"></select>
    </div>
    <div class="choix">
    <button id="btMoins" type="button">-</button>
    <input type="text" id="quantite" value="1">
    <button id="btPlus" type="button">+</button>
    </div>
    <button class="valide" id="valide" type"submit">Ajouter au panier</buttun>
    </div>`
        ;
}
//-------------------------------------------------option-----------------------------------------------------

function creePlusOption(camera) {
    const optionCamera = camera.lenses;
    for (let z = 0; z < optionCamera.length; z++) {
        document.getElementById("optionSelect").innerHTML += `
        <option value="${optionCamera[z]}">${optionCamera[z]}</option>
        `}
    };

//------------------------------------------------fin option-----------------------------------------------------

//--------------------------------------------bouton + - = --------------------------------------------------------

function boutonMoins (){
    const creeInput = document.getElementById("quantite");
    const btMoins = document.getElementById("btMoins");
    
    //ajouter un bouton - la quantite et le bouton +
    document.getElementById("btMoins").addEventListener("click", function (a) {
    a.stopPropagation();
    if (document.getElementById("quantite").value > 0) {
        document.getElementById("quantite").value = `${--document.getElementById("quantite").value}`
    }
});
}
function boutonPlus (){
    document.getElementById("btPlus").addEventListener("click", function (a) {
        a.stopPropagation();
        if (document.getElementById("quantite").value > 0) {
            document.getElementById("quantite").value = `${++document.getElementById("quantite").value}`
        }
    });
}

function quantite(){
    document.getElementById("quantite").addEventListener("input", function (a) {
        a.stopPropagation();
        if (quantiteChoisie >= 0) {
            document.getElementById("quantite").value = quantiteChoisie;
        }
    })
}

//-----------------------------------------------fin bouton + - = -----------------------------------------

//-----------------------------------------donnees----------------------------------------------------
  //recuper les donnees selectiones
  
  function click (){
    const btnPanier = document.querySelector("valide");
    const optionPris = document.querySelector("optionSelect");

btnPanier.addEventListener("click", (event) => {
      event.preventDefault();
      //  le choix de l'utlisateur qu'il faut garder dans le add sinon l'option ne sera pas pris en compte
      const choixOption = optionPris.value;
      
      //recuperation des valeurs du produit du const camera = api du produit
      let optionProduit = {
          id: camera._id,
      name: camera.name,
      price: camera.price / 100,
      optionPris: choixOption,
      quantite: quantiteChoisie,
  }
  
  //popup
  const popupConfirmation = () => {
      if (window.confirm(`${id} option: ${choixOption} a bien éte ajouté au panier 
  Consultez le panier OK ou revenir à l'accueill ANNULER`)) {
      window.location.href = "panier.html";
      }

      else {
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
  if (enregistreLocal) {
      //alors elle va ajoute le donnee plus popup va apparetre 
      ajoutDoneeLocal();
      popupConfirmation();
  }
  //si il y a des produit alors un tableau va ce cree[]
  else {
      enregistreLocal = [];
      ajoutDoneeLocal();
      popupConfirmation();
  }
})
}


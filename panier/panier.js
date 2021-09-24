//local
let enregistreLocal = JSON.parse(localStorage.getItem("produit"));

const panier = document.querySelector("main");

//si le panier est vide 
if (enregistreLocal === null || enregistreLocal == 0) {
    const panierVide = `
     <div class="paniervide>
     <h2>le panier est vide </h2>
     </div>
     `;
    panier.innerHTML = panierVide;

} else {
    let lesProduit = [];

    for (p = 0; p < enregistreLocal.length; p++) {
        lesProduit = enregistreLocal + `
    <div class="objet">
    <div class="quantite">quantite :${enregistreLocal[p].name} Options :${enregistreLocal[p].lenses}</div>
        <div class="supprime">${enregistreLocal[p].price}€ <button class="boutonSuprimer">suprimer</button></div>
    </div>
        `;
    }
    if (p == enregistreLocal) {
        panier.innerHTML = enregistreLocal
    }

}

//buttom supprime 
let boutonSuprimer = document.querySelectorAll(",boutonSupprimer");


for (l = 0; l < boutonSuprimer.length; l++) {
    boutonSuprimer[l].addEventListener("click", (event) => {
        event.preventDefault();

        //selection de id qui va etre supprimer
        let idSupprimer = enregistreLocal[l].id;

        //supprimer l'element selectionner avec l'invertion 
        enregistreLocal = enregistreLocal.filter(
            (el) => el.idSupprimer !== idSupprimer
        );


        //puis tu envoie le tout dans le local
        localStorage.setItem("produit", JSON.stringify(enregistreLocal));

        //recharge la page 
        alert("produit supprimmer");
        window.location.href = "./panier.html";
    });
}


//vide le panier 
const boutonTousVider = `
<button class="buttonVider"> Vider le panier </button> `;

//le bouton apres le dernier 
panier.insertAdjacentElement("beforeend", boutonTousVider);

const buttonTousVider = document.querySelector("buttonVider");
//suppression de la key produit
buttonTousVider.addEventListener("click", (e) => {
    e.preventDefault();
    localStorage.removeItem("produit");

    alert("le panier a été vidé")
    window, location.href = "./panier.html"
});


//total du panier
let prixTotalCalculer = [];

for (let t = 0; t < enregistreLocal.length; t++) {
    let prixProduit = enregistreLocal[t].price;

    // mettre le total des valeurs dans le tableau "prixTotalCalculer"
    prixTotalCalculer.push(prixProduit);
}

//additionner le total
const reducer = (accumulator, currentValeur) => acuumulator + currentValeur;
const prixTotal = prixTotalCalculer.reduce(reducer, 0);

const affichagePrix = `
<div class="affichage-prix>Le prix total est de: ${prixTotal}€ </div>`

panier.insertAdjacentHTML("beforeend", affichagePrix);



//formulaire

const afficherFormulaire = () => {

    const panier = document.querySelector("#main");

    const structureFormulaire = `
    <div id="formulaire">
    <h2>Remplissez le formulaire pour valider la commande</h2>
    <form action="#">
        <label for="prenom">prenom</label>
        <input type="text" id="prenom" name="prenom" required>
        
<label for="nom">nom :</label>
<input type="text" id="prenom" name="nom" required>

<label for="adresse">adresse :</label>
<textarea name="adresse" id="adresse" name="adresse" required></textarea>

<label for="ville">ville :</label>
<input type="text" id="ville" name="ville" required>

<label for="codePostal">codepostal :</label>
<input type="text" id="codePostal" name="codePostal" required>

<label for="Email">Email :</label>
<input type="text" id="Email" name="Email" required>

<button id="envoyerFormulaire" type="submit" name="envoyerFormulaire">
Confirmation de la commande 
</button>
</div>`;

    panier.insertAdjacentHTML("beforeend", structureFormulaire);
};

afficherFormulaire();


//recuperation de value du formulaire
//button fomrmuliare
const boutonFormulaire = document.querySelector("#envoyerFormulaire");
boutonFormulaire.addEventListener("click", (e) => {
    preventDefault();

    // class dans la quelle on aura les objet dans la quelle iront les values du formulaire
    class Formulaire {
        constructor() {
            this.prenom = document.querySelector("#prenom").value;
            this.nom = document.querySelector("#nom").value;
            this.adresse = document.querySelector("#adresse").value;
            this.ville = document.querySelector("#ville").value;
            this.codePostal = document.querySelector("#codePostal").value;
            this.email = document.querySelector("#Email").value;
        }
    }

    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regexCodePostal = /[0-9]/;
    let regexAddress = /\d([ ])(\w+[ ]?)+/;

    if  (!firstName.value ||
        !lastName.value ||
        !regexAddress.test(address.value) ||
        !city.value ||
        !regexCodePostal.test(codePostal.value) ||
        !regexEmail.test(email.value)){
        console.log("Il manque des valeurs à renseigner");
        let selectH2Formulaire = document.querySelector("h2.h2Formulaire");
        selectH2Formulaire.innerHTML = "Veuillez renseigner vos données correctement";
        selectH2Formulaire.style.color = "red";
    }

    else{
        const options = {
            method: "POST",
            body: JSON.stringify(command),
            headers: { "Content-Type": "application/json" },
        };


    // const formulaireValue = {
    //     prenom : document.querySelector("#prenom").value,
    //     nom : document.querySelector("#nom").value,
    //     adresse :  document.querySelector("#addresse").value,
    //     ville : document.querySelector("#ville").value,
    //     codePostal : document.querySelector("#codePostal").value,
    //     email : document.querySelector("#Email").value,
    // }

    if (prenomControle() && villeControle() ) {
        // mettre l'objet "formulaireValue" dans le local storage 
        localStorage.setItem("formulaireValue", JSON.stringify(formulaireValue));
    } else {
        alert("veulliez bien remplir le formulaire");
    }


    //je met le formulaire et les produit selectionnes dans un objet a envoyer au serveur
    const aEnvoyer = {
        enregistreLocal,
        formulaireValue
    }
})

// sauvegarder le info dans le formulaire 

//prendre la key du local et la mettre dans une variable
const dataLocalStorge = localStorage.getItem("formulaireValue");

//convertir la chaine de caractere en objet javascript
const dataLocalStorge = JSON.parse(dataLocalStorge);


//fonction qui va sauvegarder les data du client
function remplireChampLocal(input) {
    document.querySelector(`#${input}`).value = dataLocalStorge[input];
};
remplireChampLocal("prenom");
remplireChampLocal("nom");
remplireChampLocal("adresse");
remplireChampLocal("ville");
remplireChampLocal("codePostal");
remplireChampLocal("Email");

//mettre les value du local dans les champs du formulaire
// document.querySelector("#prenom").value = dataLocalStorge.prenom;
// document.querySelector("#nom").value = dataLocalStorge.nom;
// document.querySelector("#adresse").value = dataLocalStorge.adresse;
// document.querySelector("#ville").value = dataLocalStorge.ville;
// document.querySelector("#codePostal").value = dataLocalStorge.codePostal;
// document.querySelector("#Email").value = dataLocalStorge.Email;
//local
let enregistreLocal = JSON.parse(localStorage.getItem("produit"));
const panier = document.getElementById("main");

function div() {
    const panier = document.getElementById("main");
    panier.innerHTML =
        `
<div class="premier" id="premier"></div>
<div class="deuxieme" id="deuxieme"></div>
<div class="troisieme" id="troisieme"></div>
`
}
div();

//si le panier est vide 
const liste = () => {
    const premier = document.getElementById("premier")

    // const panier = document.getElementById("main");

    if (enregistreLocal == null) {
        premier.innerHTML +=
            `
     <div class="paniervide">
     <h2>le panier est vide </h2>
     </div>
     `;

    } else {

        for (p = 0; p < enregistreLocal.length; p++) {
            var fois = enregistreLocal[p].price*enregistreLocal[p].quantite; 
            console.log(fois);
            premier.innerHTML += `
            <div class="objet">
            <div class="l1">
            <div class="image" id="image"><img src="${enregistreLocal[p].img}"></div>
            </div>
            <div class="l2">
            <P class="quantite">Nom :${enregistreLocal[p].name}</p> <p>Options :${enregistreLocal[p].optionPris}</P>
            <p class="supprime">Prix :${enregistreLocal[p].price}€</p>
            <p class="quantite"id="quantite">quantite: ${enregistreLocal[p].quantite}</p>
            </div>
            <div class="l3">
            <h3>Prix total: ${fois}</h3>
            </div>
    </div>
        `;
        }
        // if (p == enregistreLocal) {
        //     panier.innerHTML = enregistreLocal
        // }
        console.log(enregistreLocal);
        
        console.log(liste);

        // function supprime () {
//     //buttom supprime 
//     let boutonSuprimer = document.getElementById("boutonSupprimer");

//     for (l = 0; l < boutonSuprimer.length; l++) {
    //         boutonSuprimer[l].addEventListener("click", (event) => {
//             event.preventDefault();

//             console.log(boutonSuprimer);
//             //selection de id qui va etre supprimer
//             let idSupprimer = enregistreLocal[l];
//             //supprimer l'element selectionner avec l'invertion 
//             enregistreLocal = enregistreLocal.filter(
    //                 (el) => el.idSupprimer !== idSupprimer
//                 );


//                 //puis tu envoie le tout dans le local
//             localStorage.setItem("produit", JSON.stringify(enregistreLocal));

//             //recharge la page 
//             alert("produit supprimmer");
//             window.location.href = "./panier.html";
//         });
//     }
// }
// supprime();
// console.log(idSupprimer);
//vide le panier 



const tousSUprimer = () => {
    if(enregistreLocal == null){
        deuxieme.innerHTML +=
        `
     <div class="paniervide>
     <h2>le panier est vide </h2>
     </div>
     `;
     
    }else{
        const troisieme = document.getElementById("troisieme")
    
        troisieme.innerHTML = `<button class="buttonVider" id ="buttonVider"> Vider le panier </button> `;
    
        //le bouton apres le dernier 
        
        const buttonTousVider = document.getElementById("buttonVider");
        //suppression de la key produit
        buttonTousVider.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.removeItem("produit");
            
            alert("le panier a été vidé")
            window, location.href = "./panier.html"
        });
    }
    
    }
    tousSUprimer();
    
    
    const total = () => {
        //total du panier
        let prixTotalCalculer = [];
        
        
        
        for (let t = 0; t < enregistreLocal.length; t++) {
    var fois = enregistreLocal[t].price*enregistreLocal[t].quantite; 
    console.log(fois);
    // mettre le total des valeurs dans le tableau "prixTotalCalculer"
    prixTotalCalculer.push(fois);
}

//additionner le total
const reducer = (acumulator, currentValeur) => acumulator + currentValeur;
const prixTotal = prixTotalCalculer.reduce(reducer, 0);

const deuxieme = document.getElementById("deuxieme");
deuxieme.innerHTML = `
<h2 class="affichage-prix">Le prix total est de: ${prixTotal}€ </h2>`;
console.log(deuxieme);
}
total();

//formulaire

const afficherFormulaire = () => {
    
    const panier = document.querySelector("#main");
    
    const structureFormulaire = `
    <div id="formulaire">
    <h2>Remplissez le formulaire pour valider la commande</h2>
    <form class="form" action="#">
    <label for="prenom">prenom</label>
    <input type="text" id="prenom" name="prenom" placeholder="prenom" required>
    
    <label for="nom">nom :</label>
    <input type="text" id="nom" name="nom" placeholder="nom" required>
    
    <label for="adresse">adresse :</label>
    <textarea name="adresse" id="adresse" name="adresse" placeholder="adresse" required></textarea>
    
    <label for="ville">ville :</label>
<input type="text" id="ville" name="ville" placeholder="ville" required>

<label for="codePostal">codepostal :</label>
<input type="text" id="codePostal" name="codePostal" placeholder="codePostal" required>

<label for="Email">Email :</label>
<input type="email" id="email" name="Email" placeholder="Email" required>

</div>
<div class="envoyerFormulaire">
<button class="envoyerFormulaire" id="envoyerFormulaire" type="submit" name="envoyerFormulaire">
Confirmation de la commande 
</button>
</div>
`;

panier.insertAdjacentHTML("beforeend", structureFormulaire);
};

afficherFormulaire();


//recuperation de value du formulaire
//button fomrmuliare
const boutonFormulaire = document.getElementById("envoyerFormulaire");
boutonFormulaire.addEventListener("click", (e) => {
    e.preventDefault();
     
        const info = {
            contact: {
                prenom: prenom.value,
                nom: nom.value,
                adresse: adresse.value,
                ville: ville.value,
                codePostal: codePostal.value,
                email: email.value,
            }
        }
        console.log(info);
    // // class dans la quelle on aura les objet dans la quelle iront les values du formulaire
    // class Formulaire {
        //     constructor() {
            //         this.prenom = document.getElementById("prenom").value;
            //         this.nom = document.getElementById("nom").value;
            //         this.adresse = document.getElementById("adresse").value;
    //         this.ville = document.getElementById("ville").value;
    //         this.codePostal = document.getElementById("codePostal").value;
    //         this.email = document.getElementById("Email").value;
    //     }
    // }
    // // const formulaireValues = new Formulaire();
    
        // //gestion de validation du formulaire 
        let regexNom = /[A-Za-z éèçàêëñöùä\-]/;
        let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regexCodePostal = /[0-9]{5}/;
        let regexAddress = /\d([ ])(\w+[ ]?)+/;
       
       
        // Vérification du formulaire pour savoir si on envoie ou non la commande dans le local storage
        
        if  (!regexNom.test(prenom.value) ||
            !regexNom.test(nom.value) ||
            !regexAddress.test(adresse.value) ||
            !regexNom.test(ville.value) ||
            !regexCodePostal.test(codePostal.value) ||
            !regexEmail.test(email.value)) {
            
            console.log("Il manque des valeurs à renseigner");
            const probleme = document.getElementById("error");
            console.log(probleme);
            document.getElementById("error").innerHTML += `<div>Veuillez renseigner vos données correctement<div>`;
            console.log(error);
    }
    
    else {
        //metre les infos du formulaire dans le localstorage
        const formulaireValue = localStorage.setItem("info",JSON.stringify(info));

        console.log(formulaireValue);
        //je met le formulaire et les produit selectionnes dans un objet a envoyer au serveur
        const aEnvoyer = {
            enregistreLocal,
            formulaireValue
        };
        //envoyer
        const promise = fetch("http://localhost:3000/api/cameras/order", {
            method: "POST",
            body: JSON.stringify(aEnvoyer),
            headers: { "Content-Type": "application/json", },
        });
        // envoyer les objet vers le serveur
        // const promese = {
        //     method: "POST",
        //     body: JSON.stringify(aEnvoyer),
        //     headers: { "Content-Type": "application/json", },
        // };
        // VOIR LE RESULTA DU SERVEUR
        promise.then(async (response) => {
            try {
                const contenu = await response.json();
                console.log(contenu);
            } catch (e) {
                console.log("erreur du catch")
                
            }
        })
    }
    
});
}
}
liste();


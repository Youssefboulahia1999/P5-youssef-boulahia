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
            var fois = enregistreLocal[p].price * enregistreLocal[p].quantite;
            console.log(fois);
            premier.innerHTML += `
            <div class="objet">
            <div class="l1">
            <div class="image" id="image"><img src="${enregistreLocal[p].img}" alt="${enregistreLocal[p].description}"></div>
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
            if (enregistreLocal == null) {
                deuxieme.innerHTML +=
                    `
     <div class="paniervide>
     <h2>le panier est vide </h2>
     </div>
     `;

            } else {
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
                var fois = enregistreLocal[t].price * enregistreLocal[t].quantite;
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
    <label for="prenom :">prenom
    <div id="error1" style="color: white" class="error1">Veuillez renseigner vos données correctement sans chiffre et caractère spécial</div></label>
    <input type="text" id="prenom" name="prenom" placeholder="prenom" required>
    
    <label for="nom">nom :
    <div id="error2" style="color: white" class="error2">Veuillez renseigner vos données correctement sans chiffre et caractère spécial</div></label>
    <input type="text" id="nom" name="nom" placeholder="nom" required>
    
    <label for="adresse">adresse :
    <div id="error3" style="color: white" class="error3">Veuillez renseigner vos données correctement exemple: 12 rue dupont </div></label>
    <textarea name="adresse" id="adresse" name="adresse" placeholder="adresse" required></textarea>
    
    <label for="ville">ville :
    <div id="error4" style="color: white" class="error4">Veuillez renseigner vos données correctement sans chiffre et caractère spécial</div></label>
<input type="text" id="ville" name="ville" placeholder="ville" required>

<label for="codePostal">codepostal :
<div id="error5" style="color: white"  class="error5">Veuillez renseigner vos données correctement a cinq chiffre</div></label>
<input type="number" id="codePostal" name="codePostal" placeholder="codePostal" max="99999" required>

<label for="Email">Email :
<div id="error6" style="color: white" class="error6">Veuillez renseigner vos données correctement</div></label>
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
            
            const contact = {
                    firstName: prenom.value,
                    lastName: nom.value,
                    address: adresse.value,
                    city: ville.value,
                    email: email.value,

            }
            console.log(contact);

            // //gestion de validation du formulaire 
            let regexNom = /^[a-z ,.'-]+$/i;
            let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            let regexCodePostal = /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/;
            let regexAddress = /\d([ ])(\w+[ ]?)+/;


            // Vérification du formulaire pour savoir si on envoie ou non la commande dans le local storage
            //console.log(enregistreLocal);

            if (!regexNom.test(prenom.value)) {
                const problemeA = document.getElementById("error1");
                problemeA.style.color = "red";
            } else {
                const problemeA = document.getElementById("error1");
                problemeA.style.color = "#0000";
            }
            if (!regexNom.test(nom.value)) {
                const problemeB = document.getElementById("error2");
                problemeB.style.color = "red";
            } else {
                const problemeB = document.getElementById("error2");
                problemeB.style.color = "#0000";
            }
            if (!regexAddress.test(adresse.value)) {
                const problemeC = document.getElementById("error3");
                problemeC.style.color = "red";
            } else {
                const problemeC = document.getElementById("error3");
                problemeC.style.color = "#0000";
            }
            if (!regexNom.test(ville.value)) {
                const problemeD = document.getElementById("error4");
                problemeD.style.color = "red";
            } else {
                const problemeD = document.getElementById("error4");
                problemeD.style.color = "#0000";
            }
            if (!regexCodePostal.test(codePostal.value)) {
                const problemeE = document.getElementById("error5");
                problemeE.style.color = "red";
            } else {
                const problemeE = document.getElementById("error5");
                problemeE.style.color = "#0000";
            }
            if (!regexEmail.test(email.value)) {
                const problemeF = document.getElementById("error6");
                problemeF.style.color = "red";
            } else {
                const problemeF = document.getElementById("error6");
                problemeF.style.color = "#0000";
            }
            if (
                !regexEmail.test(email.value) ||
                !regexAddress.test(adresse.value) ||
                !regexCodePostal.test(codePostal.value) ||
                !regexNom.test(prenom.value) ||
                !regexNom.test(ville.value) ||
                !regexNom.test(nom.value)
                
                ) {
                    console.log("FAUX")
                    
                }
                

            else {
                console.log("VRAI")
                //metre les infos du formulaire dans le localstorage
                //je met le formulaire et les produit selectionnes dans un objet a envoyer au serveur
                const formulaireValue = localStorage.setItem("contact", JSON.stringify(contact));
                //
                const formulaire = JSON.parse(localStorage.getItem("contact"));
               

                let products = [];
                    for (o = 0; o < enregistreLocal.length; o++){
                        var productsId = enregistreLocal[o].id;
                        products.push(productsId);
                    }
                    console.log(products);

const aEnvoyer = {
    enregistreLocal,
    contact
};
//envoyer
                const promise = fetch("http://localhost:3000/api/cameras/order", {
                    method: "POST",
                    body: JSON.stringify(aEnvoyer),
                    headers: { "Content-Type": "application/json", },
                });

                // VOIR LE RESULTA DU SERVEUR
                promise.then(async (response) => {
                    try {
                        const contenu = await response.json();
                        console.log(contenu);
                        if (response.ok) {
                            console.log(`resultat de response.ok: ${response.ok}`);

                            //recuper l'id  
                            console.log(contenu.orderId);

                            //metre l'id dans le local storage
                            localStorage.setItem("responseId", contenu.orderId);

                            window.location = "confirmation-commande.html";
                        } else{
                            console.log(`reponse du serveur : ${response.status}`);
                            alert(`Probleme avec le serveur:  erreur ${response.status}`);
                        }
                    } catch (e) {
                        console.log("erreur du catch")

                    }

                })

            }



        });
    }
}
liste();


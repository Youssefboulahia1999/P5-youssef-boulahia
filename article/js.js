// function click (){
//     const btnPanier = document.querySelector("valide");
//     const optionPris = document.querySelector("optionSelect");

// btnPanier.addEventListener("click", (event) => {
//       event.preventDefault();
//       //  le choix de l'utlisateur qu'il faut garder dans le add sinon l'option ne sera pas pris en compte
//       const choixOption = optionPris.value;
      
//       //recuperation des valeurs du produit du const camera = api du produit
//       let optionProduit = {
//           id: camera._id,
//       name: camera.name,
//       price: camera.price / 100,
//       optionPris: choixOption,
//       quantite: quantiteChoisie,
//   }
  
//   //popup
//   const popupConfirmation = () => {
//       if (window.confirm(`${id} option: ${choixOption} a bien éte ajouté au panier 
//   Consultez le panier OK ou revenir à l'accueill ANNULER`)) {
//       window.location.href = "panier.html";
//       }

//       else {
//           window.location.href = "index.HTML";
//       }
//   }
  
//   //cree la variable enregistreLocal 
//   // fonction pour que les donnees soit en forma json dans le local dans la key produit
//   let enregistreLocal = JSON.parse(localStorage.getItem("produit"));
  
//   //envoyer les produit choisi dans le local key produit
//   const ajoutDoneeLocal = () => {
//       enregistreLocal.push(optionProduit);
//       localStorage.setItem("produit", JSON.stringify(enregistreLocal));
//   };
  
//   //si il n'y a pas de produit dans le local alors il va  en cree (null,false)
//   if (enregistreLocal) {
//       //alors elle va ajoute le donnee plus popup va apparetre 
//       ajoutDoneeLocal();
//       popupConfirmation();
//   }
//   //si il y a des produit alors un tableau va ce cree[]
//   else {
//       enregistreLocal = [];
//       ajoutDoneeLocal();
//       popupConfirmation();
//   }
// })
// }

const id = localStorage.getItem("responseId")

const prixTotal = localStorage.getItem("prixTotal")

//html
const html = document.getElementById("container");
console.log(html);
if(localStorage.prixTotal== null){
    html.innerHTML = `
    <h2>votre commande a bien été prise pour commander plus de produit retourner la page accueil<h2>
    `}else{

        
        html.innerHTML  = `
<h2>Récapitulatif de votre commande</h2>
<div class="recapCommande" >
    <p>merci pour votre commande</p>
    <p>Votre commande a pour numero: <span class="gras">${id}</span> a bien ete prise en compte</p>
    <p>Le montant de votre commande est de : <span class="gras">${prixTotal}</span>€</p>
    `;
// effacer le local
function effacer(key){
    localStorage.removeItem(key);
};
effacer("prixTotal");
effacer("responseId");
effacer("produit");

}
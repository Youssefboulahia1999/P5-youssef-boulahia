let btnEnoyerFormulaire = document.querySelector("button");
console.log(btnEnoyerFormulaire);

btnEnoyerFormulaire.addEventListener("click", () => {
//recuper les donnes du formulaire 
 let genre = document.querySelectorAll("input[name = 'genre']");
 
 for (i = 0; i < genre.length; i++) {
     if (genre[i].checked === true) {
         leGenre = genre[i].value;
     }
 }
 //stocke les saisies
 localStorage.setItem("Nom",document.querySelector("#nom").value);
 localStorage.setItem("Prenom",document.querySelector("#prenom").value);
 localStorage.setItem("leGenre", leGenre);
 localStorage.setItem(
     "Texte formulaire",
     document.querySelector("#textformulaire").value
     );
 console.log(document.querySelector("#nom"));

});
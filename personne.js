let noeud = 'personne.json';
let url = 'https://projettestfirebase-72677-default-rtdb.europe-west1.firebasedatabase.app/' + noeud;


let listePersonne = [];
lire();
// on va regarder si tableau != undefined => si vrai => initialise => sinon ajoute nvlle personne


//----------------------------------------------------------------
// ajouter
//----------------------------------------------------------------
function ajouterPersonne() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let personne = {};
    personne.nom = nom;
    personne.prenom = prenom;

    listePersonne.push(personne); // add l'objet personne dans le tableau

    // console.log(listePersonne);
    
    afficherHTML()
}
//----------------------------------------------------------------
// afficher
//----------------------------------------------------------------

function afficherHTML() {
    // je vide le tableau
    document.getElementById("liste").innerHTML = "";
    // parcours le tableau js pour ajouter <tr><td> ...
    for (let personne of listePersonne) {

        let tr = document.createElement("tr"); // créer balise <tr> </tr>
        let td1 = document.createElement("td"); // créer balise <td> </td>
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");


        let boutonSuppr = document.createElement("button")
        boutonSuppr.setAttribute('class', 'btn btn-danger')
        let icone = document.createElement('i');
        icone.setAttribute('class', 'fa fa-trash');
        boutonSuppr.appendChild(icone);
        td3.appendChild(boutonSuppr);

        boutonSuppr.textContent = "Supprimer";
        boutonSuppr.setAttribute("class", "rouge"); // attribut du bouton
        boutonSuppr.onclick = function () { // on définit l'action du bouton => appel de la fonction supprimerPersonne()
            //supprimerPersonne();
            //this.parentElement.parentElement.remove();
            //ajouterFire();

            // j'ai besoin de l'indice afficherHTML();

            let indice = this.parentElement.parentElement.rowIndex -1;
            //console.log("indice : "+indice);
            listePersonne.splice(indice, 1); // effacer 
            afficherHTML()
            ajouterFire()
        }



        td1.textContent = personne.prenom;
        td2.textContent = personne.nom;

        // mettre le td1 dans la balise tr
        tr.appendChild(td1);
        tr.appendChild(td2);

        td2.appendChild(boutonSuppr)

        document.getElementById("liste").appendChild(tr) // <tbody><tr>...
    }
    ajouterFire();
}


//----------------------------------------------------------------
// ajouter dans firebase
//----------------------------------------------------------------


function ajouterFire() {
    let param = {}
    param.method = 'PUT'
    param.header = { 'Content-Type': 'application/json' };
    param.body = JSON.stringify(listePersonne); // serialise le tableau en chaine de caractere


    fetch(url, param)
        .then(response => response.json())
        .then(info => {
            console.log(info);

        });
}


function lire() {

    fetch(url)
        .then(response => response.json())
        .then(tab => {
            if (tab != undefined) {
                listePersonne = tab;
                afficherHTML();
            }
        })

}


function supprimerPersonne() {

    // pour l'index de la personne dans la liste on va supprimer la personne qui correspond a son index

    // => on reprend la liste et on supprime la personne et on le re-put la liste


    //document.getElementById("liste").deleteRow(##### recupere index de la ligne dans son tableau)






    /**  
        for (let idListe in listePersonne) {
        //if(idListe == listePersonne.indexOf()){
            console.log("listePersonne.indexOf() : " + idListe);
        //}
      
      
      for (let idDansLaListe in listePersonne) { // in => recupere index
         if(idDansLaListe = listePersonne.indexOf()){
             console.log(idDansLaListe);
             console.log("listePersonne.indexOf()"+listePersonne.indexOf());
         }
       
     }
     */




    let param = {}
    param.method = 'DELETE'
    param.header = { 'Content-Type': 'application/json' };
    param.body = JSON.stringify(listePersonne); // serialise le tableau en chaine de caractere


    fetch(url, param)
        .then(response => response.json())
        .then(info => {
            console.log(info);

        });

}


//  TP 3 déployer sur Git et sur Firebase hosting :
//  Ajouter un répertoire docs et venir bloquer avec .gitingore

//	Ajouter  une branche develop à votre repository et merger cette branche

//  Ajouter la possibilité d'enlever une personne de la liste et faire un commit & un push
//  Bonus utiliser fontawesome
//  Lien git


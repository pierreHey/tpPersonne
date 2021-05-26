let noeud = 'personne.json';
let url = 'https://projettestfirebase-72677-default-rtdb.europe-west1.firebasedatabase.app/' + noeud;


let listePersonne = [];
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

    console.log(listePersonne);

    let param = {}
    param.method = 'PUT'
    param.header = { 'Content-Type': 'application/json' };
    param.body = JSON.stringify(listePersonne); // serialise le tableau en chaine de caractere


    fetch(url, param)
        .then(response => response.json())
        .then(info => {
            console.log(info);

        });


        afficherHTML()
}
//----------------------------------------------------------------
// afficher
//----------------------------------------------------------------

function afficherHTML()
{
    // je vide le tableau
    document.getElementById("liste").innerHTML="";
    // parcours le tableau js pour ajouter <tr><td> ...
    for(let personne of listePersonne){
        
        let tr = document.createElement("tr"); // créer balise <tr> </tr>
        let td1 = document.createElement("td"); // créer balise <td> </td>
        let td2 =document.createElement("td");
        td1.textContent = personne.prenom;
        td2.textContent = personne.nom;
        // mettre le td1 dans la balise tr
        tr.appendChild(td1);
        tr.appendChild(td2);
        document.getElementById("liste").appendChild(tr) // <tbody><tr>...
    }

}




















function lire() {

    fetch(url)
        .then(response => response.json())
        .then(info => {
            console.log(info);

        });

  console.log("function lire() =>>>>>>"+lire22());
  
}




async function lire22() {
    const response = await fetch(url, {});
    const json = await response.json();

    
    return json;
}








let noeud = 'personne.json';
let url = 'https://projettestfirebase-72677-default-rtdb.europe-west1.firebasedatabase.app/' + noeud;


let listePersonne = [];
// on va regarder si tableau != undefined => si vrai => initialise => sinon ajoute nvlle personne



function ajouterPersonne() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let personne = {};
    personne.nom = nom;
    personne.prenom = prenom;

    listePersonne.push(personne);

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








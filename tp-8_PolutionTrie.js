let polutionData = {};

function init() {
  fetch("https://digicode.cleverapps.io/json/pays/pollution")
    .then(function (reponse) {
      return reponse.json();
    }).then(function (data) {
      polutionData = data;
      afficherStructureTableau();
    })
}

function afficherStructureTableau() {

  let eltContainer = document.querySelector(".container");
  let eltTable = document.createElement("Table");
  eltTable.classList.add("table", "caption-top");
  let eltCaption = document.querySelector("#titre")
  eltCaption.innerText = "Pays les plus poluants pour le " + polutionData.polluant + "(" + polutionData.unite + ")" + " en " + polutionData.annee;
  let donneesPolutionPays = polutionData.pays;
  // **** Création du thead
  let eltTHead = document.createElement("thead");
  let eltTr = document.createElement("tr");
  // colonne 1
  let eltTh1 = document.createElement("th");
  eltTh1.innerText = "";
  eltTr.appendChild(eltTh1);
  // colonne 2
  let eltTh2 = document.createElement("th");
  eltTh2.innerText = "Nom";
  eltTr.appendChild(eltTh2);
  // colonne 3
  let eltTh3 = document.createElement("th");
  eltTh3.innerText = "Valeur";
  eltTr.appendChild(eltTh3);
  // colonne 4
  let eltTh4 = document.createElement("th");
  eltTh4.innerText = "%";
  eltTr.appendChild(eltTh4);
  // Ajout ligne head
  eltTHead.appendChild(eltTr);
  // Ajout du tr au thead
  eltTable.appendChild(eltTHead);

  // ****  Préparation du tbody
  let eltBody = document.createElement("tbody");
  eltBody.setAttribute("id", "bodyTable");
  eltTable.appendChild(eltBody);
  eltContainer.appendChild(eltTable);

  // Création de la table
  affichierTBody(donneesPolutionPays);
}

/*
  Affiche le détail des donnnées du tableau
  @param : données à afficher
*/
function affichierTBody(dataBody) {
  // Ré-intialisation du tableau
  document.querySelector("#bodyTable").innerHTML = "";

  dataBody.forEach(element => {
    let eltTrDetail = document.createElement("tr");
    // colonne 1
    let eltTh1Det = document.createElement("td");
    eltTh1Det.innerHTML = "<img src=\" https://flagcdn.com/32x24/" + element.code + ".png\">";
    eltTrDetail.appendChild(eltTh1Det);
    // colonne 2
    let eltTh2Det = document.createElement("td");
    eltTh2Det.innerText = element.nom;
    eltTrDetail.appendChild(eltTh2Det);
    // colonne 3
    let eltTh3Det = document.createElement("td");
    eltTh3Det.innerText = element.valeur;
    eltTrDetail.appendChild(eltTh3Det);
    // colonne 4
    let eltTh4Det = document.createElement("td");
    eltTh4Det.innerText = element.pourcentage;
    eltTrDetail.appendChild(eltTh4Det);

    document.querySelector("tbody").appendChild(eltTrDetail);

  });
}

function valider() {
  console.log("controles");
  let min = Number(document.querySelector("#min").value);
  let max = Number(document.querySelector("#max").value);
  let message = document.querySelector("#message");

  if (min > max) {
    message.innerText = "La valeur max ne doit pas être suppérieur à la valeur min";
  }
  if (min < 0 || max < 0) {
    message.innerText = "La valeur min et max ne doivent pas être négatives";
    message.classList.add("p-2");
  }
  if (!min) {
    min = 0;
    document.querySelector("#min").value = 0
  }
  if (!max) {
    max = Number.MAX_VALUE;
    document.querySelector("#max").value = Number.MAX_VALUE; // aucun effet ?? 
  }
  filtrerDonnees(min, max);
}


function filtrerDonnees(valMin, valMax) {
  console.log("filtre des données à afficher");
  let newData = [];
  
  polutionData.pays.forEach((element) => {
    if (element.valeur > valMin && element.valeur < valMax) {
      newData.push(element);
    }

  });
 
  affichierTBody(newData);
}
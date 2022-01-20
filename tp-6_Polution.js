function init() {
    let eltDiv = document.querySelector(".container");
    let eltP = document.createElement("p");
    fetch("https://digicode.cleverapps.io/json/pays/pollution")
        .then(function (reponse) {
           // console.log("reponseRequete", reponse);
            return reponse.json();
        }).then(function (data) {
          //  console.log("data", data);
          afficherPoltution(data);
            //eltP.innerHTML = data;
            //eltDiv.appendChild(eltP)
        })
}

function afficherPoltution(data){
 
  let eltContainer = document.querySelector(".container");
  let eltTable = document.createElement("Table");
  eltTable.classList.add("table", "caption-top");
  let eltCaption = document.createElement("caption");
  eltCaption.innerText = "Pays les plus poluants pour le " + data.polluant + "(" + data.unite + ")" + " en " + data.annee;
  eltTable.appendChild(eltCaption);
  let donneesPolutionPays = data.pays;
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

  donneesPolutionPays.forEach(element => {
      let eltTrDetail = document.createElement("tr");
      // colonne 1
      let eltTh1Det = document.createElement("td");
      eltTh1Det.innerHTML = "<img src=\" https://flagcdn.com/32x24/" + element.code +".png\">";
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

      eltTable.appendChild(eltTrDetail);
  });
  eltContainer.appendChild(eltTable);
}
function init() {
    let eltDiv = document.querySelector(".container");
    let eltP = document.createElement("p");
    fetch("https://restcountries.com/v3.1/all")
        .then(function (reponse) {
           // console.log("reponseRequete", reponse);
            return reponse.json();
        }).then(function (data) {
          //  console.log("data", data);
          afficherCapitales(data);
            //eltP.innerHTML = data;
            //eltDiv.appendChild(eltP)

        })
}

function afficherCapitales(data){
  let eltContainer = document.querySelector(".container");
  let eltTable = document.createElement("Table");
  eltTable.classList.add("table", "caption-top");
 // let eltCaption = document.createElement("caption");
 // eltCaption.innerText = "Pays les plus poluants pour le " + data.polluant + "(" + data.unite + ")" + " en " + data.annee;
 // eltTable.appendChild(eltCaption);
 // let donneesPolutionPays = data.pays;
  // **** Création du thead
  let eltTHead = document.createElement("thead");
  let eltTr = document.createElement("tr");
  // colonne 1
  let eltTh1 = document.createElement("th");
  eltTh1.innerText = "Pays";
  eltTr.appendChild(eltTh1);
  // colonne 2
  let eltTh2 = document.createElement("th");
  eltTh2.innerText = "Capitale";
  eltTr.appendChild(eltTh2);
  // colonne 3
  let eltTh3 = document.createElement("th");
  eltTh3.innerText = "Population";
  eltTr.appendChild(eltTh3);
  // colonne 4
  let eltTh4 = document.createElement("th");
  eltTh4.innerText = "Région";
  eltTr.appendChild(eltTh4);
  // Ajout ligne head
  eltTHead.appendChild(eltTr);
  // Ajout du tr au thead
  eltTable.appendChild(eltTHead);

  data.forEach(element => {
    console.log(element);
    let eltTrDetail = document.createElement("tr");
    // colonne 1
    let eltTh1Det = document.createElement("td");
   eltTh1Det.innerHTML = element.name.common;
    
   eltTrDetail.appendChild(eltTh1Det);
    // colonne 2
    let eltTh2Det = document.createElement("td");
    eltTh2Det.innerText = element.capital ? element.capital : "";
    eltTrDetail.appendChild(eltTh2Det);
    // colonne 3
    let eltTh3Det = document.createElement("td");
    eltTh3Det.innerText = element.population;
    eltTrDetail.appendChild(eltTh3Det);
    // colonne 4
    let eltTh4Det = document.createElement("td");
    eltTh4Det.innerText = element.region;
    eltTrDetail.appendChild(eltTh4Det);

    eltTable.appendChild(eltTrDetail);
});




  eltContainer.appendChild(eltTable);
}
function init() {
    let eltDiv = document.querySelector(".container");
    let eltP = document.createElement("p");
    fetch("https://api.openweathermap.org/data/2.5/weather?q=Nantes&lang=fr&units=metric&appid=e7600d82a734460a8fc05666f3f03c12")
        .then(function (reponse) {
           // console.log("reponseRequete", reponse);
            return reponse.json();
        }).then(function (data) {
          //  console.log("data", data);
          rechercherMeteo(data);
           
        })
}

function rechercherMeteo(data){
 console.log(data)
  let eltContainer = document.querySelector(".container");
  let eltTable = document.createElement("Table");
  eltTable.classList.add("table", "caption-top");
  let eltCaption = document.createElement("caption");
  eltCaption.innerText = "Météo pour la ville de Nantes";
  eltTable.appendChild(eltCaption);
  let donneesPolutionPays = data.pays;
  // **** Création du thead
  let eltTHead = document.createElement("thead");
  let eltTr = document.createElement("tr");
  // colonne 1
  let eltTh1 = document.createElement("th");
  eltTh1.innerText = "Heure";
  eltTr.appendChild(eltTh1);
  // colonne 2
  let eltTh2 = document.createElement("th");
  eltTh2.innerText = "Température";
  eltTr.appendChild(eltTh2);
  // colonne 3
  let eltTh3 = document.createElement("th");
  eltTh3.innerText = "Description du temps";
  eltTr.appendChild(eltTh3);
  // colonne 4
  let eltTh4 = document.createElement("th");
  eltTh4.innerText = "Pression";
  eltTr.appendChild(eltTh4);
  //colonne 5
  let eltTh5 = document.createElement("th");
  eltTh5.innerText = "Vitesse et direction du vent";
  eltTr.appendChild(eltTh5);
  // Ajout ligne head
  eltTHead.appendChild(eltTr);
  // Ajout du tr au thead
  eltTable.appendChild(eltTHead);

  //data.forEach(element => {
      let eltTrDetail = document.createElement("tr");
      // colonne 1
      let eltTh1Det = document.createElement("td");
      eltTh1Det.innerHTML = new Date(data.dt*1000).toLocaleDateString();
      eltTrDetail.appendChild(eltTh1Det);
      // colonne 2
      let eltTh2Det = document.createElement("td");
      eltTh2Det.innerText = data.main.temp + '°';
      eltTrDetail.appendChild(eltTh2Det);
      // colonne 3
      let eltTh3Det = document.createElement("td");
      eltTh3Det.innerHTML = "<img src=\"https://openweathermap.org/img/w/" + data.weather[0].icon +".png\">";
      eltTrDetail.appendChild(eltTh3Det);
      // colonne 4
      let eltTh4Det = document.createElement("td");
      eltTh4Det.innerText = data.main.pressure + " hPA";
      eltTrDetail.appendChild(eltTh4Det);
       // colonne 5
       let eltTh5Det = document.createElement("td");
       eltTh5Det.innerText = data.wind.speed + " - " + data.wind.deg ;
       eltTrDetail.appendChild(eltTh5Det);

      eltTable.appendChild(eltTrDetail);
  //});
  eltContainer.appendChild(eltTable);
}
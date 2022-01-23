function init() {
   // console.log("init");
    fetch("https://digicode.cleverapps.io/utilisateurs")
        .then(function (reponse) {
            //console.log("reponseRequete", reponse);
            return reponse.json();
        }).then(function (data) {
            afficherUtilisateurs(data);
        })
}

function afficherUtilisateurs(data) {
    console.log("data", data);
    let eltTable = document.querySelector("Table");
    eltTable.classList.add("caption-top");
    let eltCaption = document.createElement("caption");
    eltCaption.innerText = "Liste des utilisateurs existants";
    eltTable.appendChild(eltCaption);
    // **** Création du thead
    let eltTHead = document.createElement("thead");
    let eltTr = document.createElement("tr");
    // colonne 1
    let eltTh1 = document.createElement("th");
    eltTh1.innerText = "Nom";
    eltTr.appendChild(eltTh1);
    // colonne 2
    let eltTh2 = document.createElement("th");
    eltTh2.innerText = "Prénom";
    eltTr.appendChild(eltTh2);
    // colonne 3
    let eltTh3 = document.createElement("th");
    eltTh3.innerText = "Date de naissance";
    eltTr.appendChild(eltTh3);
    // Ajout ligne head
    eltTHead.appendChild(eltTr);
    // Ajout du tr au thead
    eltTable.appendChild(eltTHead);

    data.forEach(element => {
        let eltTrDetail = document.createElement("tr");
        // colonne 1
        let eltTh1Det = document.createElement("td");
        eltTh1Det.innerHTML = element.nom;
        eltTrDetail.appendChild(eltTh1Det);
        // colonne 2
        let eltTh2Det = document.createElement("td");
        eltTh2Det.innerText = element.prenom;
        eltTrDetail.appendChild(eltTh2Det);
        // colonne 3
        let eltTh3Det = document.createElement("td");
        eltTh3Det.innerHTML = element.dateNaissance;
        eltTrDetail.appendChild(eltTh3Det);
        
  
        eltTable.appendChild(eltTrDetail);
    });
    eltContainer.appendChild(eltTable);
}

function valider() {
    console.log('valider');
    let objetUser = {};
    //JSON.stringify(Object.fromEntries(formData.entries()))
    console.log( document.querySelector("#nom").value);
    objetUser.nom = document.querySelector("#nom").value;
    objetUser.prenom = document.querySelector("#prenom").value;
    console.log(document.querySelector("#dateNaissance").value);
    objetUser.dateNaissance = document.querySelector("#dateNaissance").value;
    objetUser.lieuNaissance = document.querySelector("#lieuNaissance").value;
    objetUser.departementNaissance = document.querySelector("#departementNaissance").value;
    objetUser.numeroRue = document.querySelector("#numeroRue").value;
    objetUser.libelleRue = document.querySelector("#libelleRue").value;
    objetUser.codePostal = document.querySelector("#codePostal").value;
    objetUser.ville = document.querySelector("#ville").value;
         
    fetch('https://digicode.cleverapps.io/utilisateurs', {
        method: 'POST',
        headers: {
            'Accept': "application/json",
            'Content-Type': 'application/json;charset=UTF-8'
        },
        body: JSON.stringify(objetUser)
    })
    .then(response => response.text().then(text => {
        console.log(text);
       init();
    })
    );
}


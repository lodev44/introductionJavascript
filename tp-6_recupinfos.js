function init() {
    let eltDiv = document.querySelector(".container");
    let eltP = document.createElement("p");
    fetch("https://restcountries.com/v3.1/all")
        .then(function (reponse) {
           // console.log("reponseRequete", reponse);
            return reponse.text();
        }).then(function (data) {
          //  console.log("data", data);
            eltP.innerHTML = data;
            eltDiv.appendChild(eltP)
        })
}
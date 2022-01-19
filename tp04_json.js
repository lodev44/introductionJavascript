let jsonVariable = {
    "nom": "Google",
    "siegeSocial": "Googleplex, Mountain View, California, United States",
    "fondateurs": [
        {
            "nom": "Larry Page",
            "dateNaissance": "26/03/1973",
            "ville": "East Lansing",
            "pays": "Michigan"
        },
        {
            "nom": "Sergey Brin",
            "dateNaissance": "21/08/1973",
            "ville": "Moscou",
            "pays": "Union Soviétique"
        }
    ],
    "chiffresAffaire" : [
        {"annee" : 2018, "ca" : 16.49},
        {"annee" : 2012, "ca" : 37.97},
        {"annee" : 2016, "ca" : 89.46},
        {"annee" : 2018, "ca" : 136.2}
    ]
}

//console.log(jsonVariable);
//console.log(jsonVariable.chiffresAffaire);
jsonVariable.fondateurs.forEach(element =>{
    console.log("fondateur :",element);
});

jsonVariable.chiffresAffaire.forEach(element=>{
    console.log("Chiffre d'affaire ", element);
})
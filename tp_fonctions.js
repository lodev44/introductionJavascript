//Ecrivez une fonction qui ne prend pas de paramètre et retourne le nombre 33.
function const33() {
    return 33;
}

console.log(const33());



//Ecrivez une fonction qui prend en paramètre une variable de type chaine de caractères et affichage « Bonjour » suivi de la variable.
function bonjourUntel(nom) {
    if (nom != undefined) {
        console.log("Bonjour ", nom);
    } else {
        console.log("Bonjour");
    }
}

bonjourUntel("Laurence");
bonjourUntel();

//Ecrivez une fonction qui prend 2 nombres a et b en paramètres et retourne le résultat suivant : a * b + a + b
function calcul(a, b) {
    /* arguments.array.forEach(element => {
         console.log(element)
     });*/
    if (!a || !b) {
        throw ("vous devez fournir deux paramètres")
    } else if (typeof a !== 'number' || typeof b !== 'number') {
        throw ("Attention un des paramètre n'est pas un nombre")
    }
    return a * b + a + b;
}
console.log(calcul(1, 2));
//console.log(calcul(1, 'a')); // renvoie l'exeption "Attention un des paramètre n'est pas un nombre"
//console.log(calcul(1));// renvoie l'exeption "vous devez fournir deux paramètres"


//Créer une fonction qui vérifie le contenu d’un tableau
function controlerTableau(tableau) {
    let verifNumber = true;
    !Array.isArray(tableau) ||tableau.length == 0 ? verifNumber = false : verifNumber = true;
    tableau.forEach(element => {
        if (typeof element != 'number') {
            verifNumber = false;
        }
    });
    return verifNumber
}

console.log('Control tableau numerique', controlerTableau([1, 2, 3]));
console.log('Control tableau alphanumerique', controlerTableau([1, 'a', 3]));
console.log('Control tableau alphanumerique', controlerTableau([]));


//Créer une fonction qui calcule et retourne la moyenne d’un tableau passé en paramètre.
function moyenne(tableau) {
    let moyenne = 0;
    let somme = 0;
    if (tableau.length !== 0) {
        tableau.forEach(element => {
            if (typeof element !== 'number') {
                throw "Attention ce tableau comprend des chaines de caractères"
            }
            somme += element;
        });
        moyenne = somme / tableau.length;
    }
    return moyenne;
}

console.log("Moyenne d'un tableau de valeurs numériques:",moyenne([9,19,16,15,19,14,17]));
//console.log(moyenne(['oups',19,16,15,19,14,17])); // résultat attendu "Attention ce tableau comprend des chaines de caractères"
console.log("Moyenne d'un tableau vide : ",moyenne([]));
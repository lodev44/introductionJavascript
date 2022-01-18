let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

// Afficher les numéro suppérieurs à 3
console.log("Numéro suppérieurs à 3 : ");
array.forEach(number => {
    if (number > 3) {
        console.log(number);
    }
});

// Afficher les nombres pairs
console.log("Numéro pairs :");
array.forEach(number=>{
    if(number%2===0){
        console.log(number);
    }
});

// Afficher les nombres pairs
console.log("Numéro impairs :");
array.forEach(number=>{
    if(number%2!==0){
        console.log(number);
    }
});


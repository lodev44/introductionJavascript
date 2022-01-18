let array = [1, 15, -3, 0, 8, 7, 4, -2, 28, 7, -1, 17, 2, 3, 0, 14, -4];

for (let i = 0; i<array.length; i++) {
    if (array[i] < 0) {
        let elSupp =array.splice(i, 1);
        // controle
      console.log("Element supprimé: ",elSupp);
    }
}
console.log(array);
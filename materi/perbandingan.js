var angka = 100;
console.log(angka == 100); //true 
console.log(angka == 20); //false

var sifat = "rajin";
console.log(sifat != "males"); //true 
console.log(sifat != "bandal"); //true 

//strict equals
var angka = 8;
console.log(angka == "8"); //true,padhal "8" adalah string 
console.log(angka === "8"); //true, karena tipe data nya berbeda 
console.log(angka === 8); //true 

var angka = 11;
console.log(angka != "11"); //false,padhal "11" adalah string 
console.log(angka !== "11"); //true, karena tipe data nya berbeda 
console.log(angka !== 11); //false 

var angka = 11;
console.log(number < 20); //true
console.log(number > 17);//false
console.log(number >= 17);//true,karena terdapat sama dengan
console.log(number <= 20);//true
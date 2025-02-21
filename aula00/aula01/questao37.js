
// variaveis
let fatiaQueijo = 50; // 50g, cada fatia
let fatiaPresunto = 50;  
let hamburguer = 100; 

// entrada
let sanduichesAFazer = 5;

// processamnto
let quiloQueijo = (sanduichesAFazer * fatiaQueijo * 2) / 1000;
let quiloPresunto = (sanduichesAFazer * fatiaPresunto) / 1000;
let quiloHamburguer = (sanduichesAFazer * hamburguer) / 1000;

// saida
console.log("\t*** LANCHONETE ***");
console.log(" Para " + sanduichesAFazer + " sanduiches é necessario: ");
console.log("- " + quiloQueijo + "kg de quiejo");
console.log("- " + quiloPresunto + "kg de presunto");
console.log("- " + quiloHamburguer + "kg de hambuguer");










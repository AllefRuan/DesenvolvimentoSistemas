
let salarioBruto = 1000;
let inss = salarioBruto * 0.07; // 7%
let irrf = salarioBruto * 0.14; // 14%
let salarioLiquido = salarioBruto - (inss + irrf);

console.log("Salario Bruto: R$" + salarioBruto);
console.log("(-) INSS: R$" + inss);
console.log("(-) IRRF: R$" + irrf);
console.log("Salario liquido R$:" + salarioLiquido);




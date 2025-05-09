//elabora uma função que verifique se o numero é par ou impar

function parImpar(n) {
    if (n % 2 == 0) {
        return 'é par';
    }
    else{
        return 'é impar'
    }
}

console.log(parImpar(3));

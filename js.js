function esPar(n){
    n % 2 == 0 ? console.log(n, "es par") : console.log(n, "es impar");
}

function saludar(nombre){
    console.log("Hola", nombre);
}

for(let i = 1; i <= 10; i++){
    console.log(i);
}

console.log(saludar("Andres"));
console.log(esPar(4));


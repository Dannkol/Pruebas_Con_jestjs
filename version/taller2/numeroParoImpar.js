const ParoImpar = (numero) => {
    let num = numero;


    return (
        `${num % 2 == 0 ? "El numero es par" : "El numero no es par"} y ${num > 10 ? "el numero es mayor a 10" : "el numero es menor a 10"
        }`
    );

}

export { ParoImpar }
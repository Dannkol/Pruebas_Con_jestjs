const calcularNumero = (num1, num2) => {
    return (
        num1 > num2 ? `su suma es ${num1 + num2} y su diferencia es ${num1 - num2}` : `Su producto es ${num1 * num2} y su division es ${num1 / num2}`
    );
}

export { calcularNumero }
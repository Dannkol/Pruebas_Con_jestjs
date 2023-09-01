const sumatoria = (array) => {
    let num = array



    let maxval = Math.max(...num);
    let minval = Math.min(...num);
    let sumtotal = num.reduce((pre, cur) => pre += cur)
    let total = num.length;
    let promt = sumtotal / total;
    return (`
        El promedio es: ${promt.toFixed(2)}
        \nEl total de valores agregados son ${total}
        \nEl total de la suma de los valores es ${sumtotal}
        \nEl mayor valor es ${maxval}
        \nEl menor valor es ${minval}`)
}

export { sumatoria }
const factura = (obj) => {
    let produc = {
        result: obj,
    };


    let valor = produc.result.reduce((a, b) => a + b.price, 0);

    return (`El valor de su factura es de $${valor}`);
}

export { factura }
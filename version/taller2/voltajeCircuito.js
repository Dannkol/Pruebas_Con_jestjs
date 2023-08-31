const CalcularVoltaje = (resistencia, intensidad) => {

    const res = resistencia;
    const int = intensidad;

    return (
        `El voltaje del circuito es ${res * int}`
    );

}

export { CalcularVoltaje }
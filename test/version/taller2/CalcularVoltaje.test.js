import { CalcularVoltaje } from "../../../version/taller2/voltajeCircuito.js";

describe("Construir el algoritmo para determinar el voltaje de un circuito a partir de la resistencia y la intensidad de corriente.", () => {
    it("Debería calcular el voltaje de un circuito a partir de la resistencia y la intensidad de corriente.", () => {
        expect(CalcularVoltaje(100, 100)).toBe("El voltaje del circuito es 10000");
    });
    it("Debería calcular el voltaje de un circuito a partir de la resistencia y la intensidad de corriente.", () => {
        expect(CalcularVoltaje(2, 2)).toBe("El voltaje del circuito es 4");
    });
    
});
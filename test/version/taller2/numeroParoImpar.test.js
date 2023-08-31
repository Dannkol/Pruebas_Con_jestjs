import { ParoImpar } from "../../../version/taller2/numeroParoImpar.js";

describe("Dado un número indicar si es par o impar y si es mayor de 10.", () => {
    it("Deberia retornar impar", () => {
        expect(ParoImpar(11)).toBe('El numero no es par y el numero es mayor a 10');
    })
    it("Deberia retornar par", () => {
        expect(ParoImpar(8)).toBe('El numero es par y el numero es menor a 10');
    })
})  
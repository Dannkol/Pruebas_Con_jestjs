import { calcularNumero } from "../../../version/taller2/calcularnumero.js";

describe("si el primero es mayor al segundo informar su suma y diferencia, en caso contrario, informar el producto y la división del primero respecto al segundo.", () => {
    it("Calcula la producto y division", () => { 
        expect(calcularNumero(2, 3)).toBe("Su producto es 6 y su division es 0.6666666666666666");
     })

     it("Calcula la suma y diferencia", () => { 
        expect(calcularNumero(4, 3)).toBe("su suma es 7 y su diferencia es 1");
     })
});
import { nombrePersonaMayor } from "../../../version/taller2/nombrePersonaMayor.js";

describe("Construir el algoritmo que solicite el nombre y edad de 3 personas y determine el nombre de la persona con mayor edad.", () => {
    it("Debería retornar el nombre de la persona con mayor edad", () => {
        expect(nombrePersonaMayor(["persona1", "persona2", "persona3"], [20,18,21])).toBe(`la persona con mayor edad es persona3 con 21`);
    });
    it("Debería retornar el nombre de la persona con mayor edad", () => {
        expect(nombrePersonaMayor(["persona1", "persona2", "persona3"], [28,18,21])).toBe(`la persona con mayor edad es persona1 con 28`);
    });
});
   
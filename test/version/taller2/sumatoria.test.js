import { sumatoria } from "../../../version/taller2/sumatoria.js";


describe("calcularEstadisticas", () => {
    it("Debería devolver estadísticas correctas para una serie de números", () => {

        const resultado = sumatoria([1, 2, 3, 4]);

        expect(resultado).toBe(`
        El promedio es: 2.50
        \nEl total de valores agregados son 4
        \nEl total de la suma de los valores es 10
        \nEl mayor valor es 4
        \nEl menor valor es 1`);


    });
});

import { estudiante } from "../../../version/taller2/estudiante.js";

/*       
{ 
    name: nombre, 
    sexo: sex, 
    edad: age 
} 
*/

describe("Construir el algoritmo en Javascript para un programa para cualquier cantidad de estudiantes que lea el nombre, el sexo y la nota definitiva y halle al estudiante con la mayor nota y al estudiante con la menor nota y cuantos eran hombres y cuantos mujeres.", () => {
    it("Debería devolver un array de objetos", () => {
        expect(estudiante([{
            name: "Juan",
            sexo: "M",
            nota: 12
        },
        {
            name: "Maria",
            sexo: "F",
            nota: 21
        },
        {
            name: "Jose",
            sexo: "M",
            nota: 20
        }
        ])).toEqual(["nota maxima : nombre Maria y edad 21","nota minima : nombre Juan y edad 12","la cantidad de mujeres es 1"])
    })
});
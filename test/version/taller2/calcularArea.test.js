import { calcularAreas } from "../../../version/taller2/calcularAreas.js";

describe('Programa que Ingrese por teclado: a. el valor del lado de un cuadrado para mostrar por pantalla el perímetro del mismo b. la base y la altura de un rectángulo para mostrar el área del mismo', () => {
    it('a. el valor del lado de un cuadrado para mostrar por pantalla el perímetro del mismo', () => {
        expect(calcularAreas('a',[4])).toBe("el perimetro es 16");
    });
    it('b. la base y la altura de un rectángulo para mostrar el área del mismo', () => {
        expect(calcularAreas('b',[4,4])).toBe("el area es 16");
    });
    it('Debería lanzar un error cuando se le pasa un valor incorrecto', () => {
        expect(() => {
            factura('0');
        }).toThrow(); // Esto verifica si se lanza una excepción
    });
})
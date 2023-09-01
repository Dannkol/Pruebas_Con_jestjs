import { factura } from "../../../version/taller2/factura.js";

/* 
{
    name: nombre,
    price: price,
}
 */
describe('Programa que pida el ingreso del nombre y precio de un artículo y la cantidad que lleva el cliente. Mostrar lo que debe pagar el comprador en su factura.', () => {
    it('Debería mostrar la factura correctamente', () => {
        expect(factura([
            {
                name: "nombre",
                price: 32,
            },
            {
                name: "nombre2",
                price: 2,
            },
            {
                name: "nombre3",
                price: 22,
            }
        ])).toEqual('El valor de su factura es de $56');
    });

    it('Debería lanzar un error cuando se le pasa un valor incorrecto', () => {
        expect(() => {
            factura('0');
        }).toThrow(); // Esto verifica si se lanza una excepción
    });
})
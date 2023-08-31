import { calcularPromedio } from "../../../version/taller2/promedioNotas.js";

describe("calcularPromedio", () => {
    it("debería calcular correctamente el promedio de las notas", () => {
      const notas = [4, 3, 5];
      const resultado = calcularPromedio(notas);
      expect(resultado).toBe("Becado con un promedio de 4.00");
    });
  
    it("debería lanzar un error si no se proporcionan notas", () => {
      const notas = [];
      expect(() => calcularPromedio(notas)).toThrow("No se pueden calcular promedios sin notas");
    });
  
    it("debería calcular correctamente el promedio para un becado", () => {
      const notas = [5, 5, 5];
      const resultado = calcularPromedio(notas);
      expect(resultado).toBe("Becado con un promedio de 5.00");
    });
  });

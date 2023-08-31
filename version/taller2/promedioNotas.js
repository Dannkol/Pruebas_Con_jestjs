const calcularPromedio = (notas) => {
    if (notas.length === 0) {
      throw new Error("No se pueden calcular promedios sin notas");
    }
  
    const promedio = notas.reduce((acc, cur) => acc + cur, 0) / notas.length;
  
    if (promedio >= 3.9) {
      return `Becado con un promedio de ${promedio.toFixed(2)}`;
    } else {
      return `Estudie su promedio es de ${promedio.toFixed(2)}`;
    }
  }

export {calcularPromedio}
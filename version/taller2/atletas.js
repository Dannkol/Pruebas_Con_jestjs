function encontrarMejoresAtletas(atletas, record) {
    let maxSalto = -Infinity;
    let mejoresAtletas = [];
  
    for (let i = 0; i < atletas.length; i++) {
      const atleta = atletas[i];
  
      if (atleta.salto > maxSalto) {
        maxSalto = atleta.salto;
        mejoresAtletas = [{ name: atleta.name, salto: atleta.salto }];
      } else if (atleta.salto === maxSalto) {
        mejoresAtletas.push({ name: atleta.name, salto: atleta.salto });
      }
    }
  
    const resultados = mejoresAtletas.map((atleta) => {
      if (atleta.salto > record) {
        return `${atleta.name}, con un salto de ${atleta.salto} rompió el récord y gana 500 millones`;
      } else {
        return `${atleta.name}, con un salto de ${atleta.salto}`;
      }
    });
  
    return resultados;
  }
  
export { encontrarMejoresAtletas }
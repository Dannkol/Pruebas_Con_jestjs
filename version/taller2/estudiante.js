const estudiante = (obj) => {
    let estudiantes = {
        resul: obj,
    };

    /*       { 
            name: nombre, 
            sexo: sex, 
            nota: age 
            } */


    let maxval = Math.max(...estudiantes.resul.map((x) => parseInt(x.nota)));

    let minval = Math.min(...estudiantes.resul.map((x) => parseInt(x.nota)));

    let valor = estudiantes.resul.filter((x) => x.nota == maxval);
    let valormin = estudiantes.resul.filter((x) => x.nota == minval);
        
    let result = [];

    for (let i = 0; i < valor.length; i++) {
        result.push(`nota maxima : nombre ${valor[i].name} y edad ${valor[i].nota}`);
    }

    for (let i = 0; i < valormin.length; i++) {
        result.push(`nota minima : nombre ${valormin[i].name} y edad ${valormin[i].nota}`);
    }

    result.push(`la cantidad de mujeres es ${estudiantes.resul.filter(x => x.sexo == 'F').length}`)

    return result;
}

export { estudiante }
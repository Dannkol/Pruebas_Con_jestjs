import { encontrarMejoresAtletas } from "../../../version/taller2/atletas.js";

describe('encontrarMejoresAtletas', () => {
    it('Debería devolver el resultado correcto cuando un atleta rompe el récord', () => {
        const atletas = [
            { name: 'Atleta1', salto: 16.0 },
            { name: 'Atleta2', salto: 14.0 },
        ];
        const record = 15.5;
        const resultado = encontrarMejoresAtletas(atletas, record);
        expect(resultado).toEqual([
            'Atleta1, con un salto de 16 rompió el récord y gana 500 millones',
        ]);
    });

    it('Debería devolver el resultado correcto cuando varios atletas empatan en el primer lugar', () => {
        const atletas = [
            { name: 'Atleta1', salto: 15.5 },
            { name: 'Atleta2', salto: 15.5 },
        ];
        const record = 15.5;
        const resultado = encontrarMejoresAtletas(atletas, record);
        expect(resultado).toEqual([
            'Atleta1, con un salto de 15.5',
            'Atleta2, con un salto de 15.5',
        ]);
    });

    it('Debería devolver el resultado correcto cuando un atleta rompe el récord', () => {
        const atletas = [
            { name: 'Atleta1', salto: 14.0 },
            { name: 'Atleta3', salto: 13.0 },
        ];
        const record = 11;
        const resultado = encontrarMejoresAtletas(atletas, record);
        expect(resultado).toEqual([
            "Atleta1, con un salto de 14 rompió el récord y gana 500 millones"
        ]);
    });

    it('Debería devolver el resultado correcto cuando un atleta rompe el récord', () => {
        const atletas = [
            { name: 'Atleta1', salto: 14.0 },
            { name: 'Atleta3', salto: 13.0 },
        ];
        const record = 16;
        const resultado = encontrarMejoresAtletas(atletas, record);
        expect(resultado).toEqual([
            "Atleta1, con un salto de 14"
        ]);
    });
});
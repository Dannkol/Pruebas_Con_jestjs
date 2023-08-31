import { saludar } from "../../../version/V1/user";

describe("test del archivo user.js", ()=>(
    test('La funcion saludar devuelve "hola mundo"', ()=>{
        let app = saludar();
        expect(app).toBe("hola mundo")
    })
))
import { expect, test } from "vitest";
import { crearPerrito } from "../src/funcional";

test('debe crear un perrito', ()=>{
    expect(crearPerrito('Teo', 10, 'tricolor')).toMatchObject({nombre: 'Teo', edad: 10})
})

test('debe crear con clase mamíferos', () => { 
    expect(crearPerrito('Kira', 10, 'bicolor')).toContain({clase: 'mamíferos'})
})
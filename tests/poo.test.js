import { test, expect } from "vitest";
import { Perrito } from "../src/poo";

test('debe crear un perrito', () => {
    expect(new Perrito('Kira', 10, 'bicolor')).toMatchObject({nombre: 'Kira', edad: 10})
})
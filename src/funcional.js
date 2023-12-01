//PROGRAMACIÓN FUNCIONAL

console.log('Esto es con programación funcional')

//Vamos a crear perritos

//Atributos:
//mamíferos . clase
//color
//raza
//nombre
//temperamento
//edad

//Metódos:
//ladrar
//morder
//correr
//comer
//jugar

//DRY - don't repeat yourself
//Single responsability

function crearPerrito(nombre, edad, color){
    const perrito = {
        nombre: nombre,
        edad: edad,
        color: color,
        clase: 'mamíferos'
    }
    return perrito
}

function ladrar(perrito){
    return `${perrito.nombre} está ladrando`
}

function correr(perrito){
    return `${perrito.nombre} corre 2 metros`
}

function cumplirAnios(perrito){
    perrito.edad += 1
    return `${perrito.nombre} ha cumplido ${perrito.edad} años`
}

export { crearPerrito, ladrar, correr, cumplirAnios}







const teddy = crearPerrito('Teddy', 1, 'caramelo')
console.log(teddy)

const lola = crearPerrito('Lola', 7, 'caramelo')
console.log(lola)

console.log(ladrar(teddy))
console.log(ladrar(lola))

console.log(correr(lola))

console.log(cumplirAnios(teddy))
console.log(cumplirAnios(lola))

console.log(teddy)


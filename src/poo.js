//POO

console.log('Esto es con poo')


export class Perrito{

    constructor(nombre, edad, color){
        this.nombre = nombre,
        this.edad = edad,
        this.color = color,
        this.clase = 'mamífero'
    }

    ladrar(){
        return `${this.nombre} está ladrando`
    }

    correr(){
        return `${this.nombre} corre 2 metros`
    }

    cumplirAnios(){
        this.edad +=1
        return `${this.nombre} ha cumplido ${this.edad} años`
    }

}


const taxi = new Perrito('Taxi', 8, 'Marrón claro')

console.log(taxi.cumplirAnios(), taxi.ladrar())

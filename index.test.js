
function Square(side){
    this.side = side
}

Square.prototype.perimeter= function(){return this.side*4}
Square.prototype.area= function(){return Math.pow(this.side, 2)}


function Person(name, weight, height){
    this.name = name
    this.weight = weight
    this.height = height
}

Person.prototype.bmi = function(){return Math.pow((this.weight/this.height), 2)}
Person.prototype.greet = function(person){ return `Hi ${person.name} muy name is ${this.name}`}

function Room(number){
    this.number = number
    this.available = true
    this.guests = 0
}




describe('Square Function Tests', () => {
    
    const s1 = new Square(5)

    it('Should expect a Square object => {side: 5}', () =>{
        expect(new Square(5)).toMatchObject({side: 5})
    })

    it('Should expect the perimeter of the square(5) => 20', () =>{
        expect(s1.perimeter()).toBe(20)
    })

    it('Should expect the area of the square(5) => 25', () =>{
        expect(s1.area()).toBe(25)
    })
})


describe('Person Function Test', () => {
    const p1 = new Person('Pedro', 72, 1.5)
    const p2 = new Person('Maria', 54, 1.7)

    
    it('Should expect a Person object => {name: "Pedro", weight: 72, height: 1.5}', () => {
        expect(new Person('Pedro', 72, 1.5)).toMatchObject({ name: 'Pedro', weight: 72, height: 1.5 })
    })

    it('Should expect a Person object => {name: "Maria", weight: 54, height: 1.7}', () => {
        expect(new Person('Maria', 54, 1.7)).toMatchObject({ name: 'Maria', weight: 54, height: 1.7 })
    })

    it('Should expect => Hi Maria muy name is Pedro', () => {
        expect(p1.greet(p2)).toBe('Hi Maria muy name is Pedro')
    })

    it('Should expect => Hi Pedro muy name is Maria', () => {
        expect(p2.greet(p1)).toBe('Hi Pedro muy name is Maria')
    })

})

describe('Room Function Test', () => {
    const r1 = new Room(101)
    
    it('Should expect Room object => {number: 101, available: true, guests: 0}', () => {
        expect(new Room(101)).toMatchObject({number: 101, available: true, guests: 0})
    })
})


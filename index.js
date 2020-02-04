// Requirement 1

function Square(side){
    this.side = side
}

Square.prototype.perimeter= function(){return this.side*4}
Square.prototype.area= function(){return Math.pow(this.side, 2)}

const s1 = new Square(5)
console.log(s1.perimeter())
console.log(s1.area())

//Using class keyword
/*
class Square{
    constructor(side){
        this.side=side
    }

    perimeter(){return this.side*4}
    area(){return Math.pow(this.side,2)}
}

const s1 = new Square(5)
console.log(s1.perimeter())
console.log(s1.area())
*/



// Requirement 2

function Person(name, weight, height){
    this.name = name
    this.weight = weight
    this.height = height
}

Person.prototype.bmi = function(){return Math.pow((this.weight/this.height), 2)}
Person.prototype.greet = function(person){ return `Hi ${person.name} muy name is ${this.name}`}


const p1 = new Person('Pedro', 72, 1.5)
const p2 = new Person('Maria', 54, 1.7)

console.log(p1.greet(p2))
console.log(p2.greet(p1))

console.log(new Person('Maria', 54, 1.7))

// Using class keyword
/*
class Person{
    constructor(name, weight, height){
        this.name = name
        this.weight = weight
        this.height = height
    }

    bmi(){return Math.pow((this.weight/this.height), 2)}
    greet(person){ return `Hi ${person.name} muy name is ${this.name}`}

}

const p1 = new Person('Pedro', 72, 1.5)
const p2 = new Person('Maria', 54, 1.7)

console.log(p1.greet(p2))
console.log(p2.greet(p1))
*/

// requiment 3

function Room(number){
    this.number = number
    this.available = true
    this.guests = 0
}

// Add extra functionatality
Room.prototype.reserve = function(guest){ 
    this.available = false
    this.guests = guest
}

Room.prototype.leave = function(){
    this.available = true
    this.guests = 0
}

const r1 = new Room(101)

console.log(`${r1.number}\n${r1.available}\n${r1.guests}`)
r1.reserve(3)
console.log(`${r1.number}\n${r1.available}\n${r1.guests}`)
r1.leave()
console.log(`${r1.number}\n${r1.available}\n${r1.guests}`)

/*
class Room{
    constructor(number){
        this.number = number
        this.available = true
        this.guests = 0
    }

    reserve(guest){ 
        this.available = false
        this.guests = guest
    }

    leave(){
        this.available = true
        this.guests = 0
    }
}

const r1 = new Room(101)

console.log(`${r1.number}\n${r1.available}\n${r1.guests}`)
r1.reserve(3)
console.log(`${r1.number}\n${r1.available}\n${r1.guests}`)
r1.leave()
console.log(`${r1.number}\n${r1.available}\n${r1.guests}`)
*/



// LeetCode 771. Jewels and Stones

const numJewelsInStones = (j, s) => {
    let stonesArr = s.split('')
    let jewelsArr = j.split('')
    let countJewels = 0
    for(let i=0;i<stonesArr.length;i++){
        for(let x=0;x<jewelsArr.length;x++){
            if(stonesArr[i] === jewelsArr[x]){
                countJewels++;
                break;
            }
        }
    }

    return countJewels;
}

console.log(numJewelsInStones("aA", "aAAbbbb"))
console.log(numJewelsInStones("z", "ZZ"))

// ES6 solution
/*
const numJewelsInStones = (j, s) => {
    let stonesArr = s.split('')
    let jewelsArr = j.split('')
    let countJewels=0
    stonesArr.forEach((stone) => jewelsArr.forEach(j => {
        if(stone === j){countJewels++}
    }))
    return countJewels
}
console.log(numJewelsInStones("aA", "aAAbbbb"))
console.log(numJewelsInStones("z", "ZZ"))
*/


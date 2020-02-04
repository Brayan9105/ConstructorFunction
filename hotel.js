function Room(number){
    this.number = number
    this.available = true
    this.guests = 0
}

class Hotel{
    constructor(roomNums){
        this.roomNums = roomNums
        this.rooms = []
    }
    
    createRooms(){
        for(let i=1; i <= this.roomNums; i++){
            this.rooms.push(new Room(i))
        }
    }

    checkin(number, guestNum=1){
        if( (number > 0 && number <= this.roomNums)  && this.rooms[number-1].available === true){
            this.rooms[number-1].available = false
            this.rooms[number-1].guests = guestNum
            return true
        }else{
            return false
        }
    }

    checkout(number){
        if( (number > 0 && number <= this.roomNums)  && this.rooms[number-1].available === false){
            this.rooms[number-1].available = true
            this.rooms[number-1].guests = 0
            return true
        }else{
            return false
        }
    }

    getAvailableRooms(){
        return this.rooms.filter(habi => habi.available === true )
    }

    getOccupiedRooms(){
        return this.rooms.filter(habi => habi.available === false )
    }

}

const myHotel = new Hotel(4)
myHotel.createRooms()
console.log(myHotel.rooms)
console.log(myHotel.checkin(1, 2))
console.log(myHotel.rooms)
console.log(myHotel.checkout(1))
console.log(myHotel.rooms)
console.log(myHotel.checkout(1))
console.log(myHotel.rooms)
console.log(myHotel.checkin(2, 2))
console.log('Disponibles')
console.log(myHotel.getAvailableRooms())
console.log('Disponibles')










// function Hotel(roomNums){
//     this.roomNums = roomNums
//     this.rooms = []
// }

// Hotel.prototype.createRooms = function(){
//     for(let i=1; i<= this.roomNums; i++){
//         this.rooms.push(new Room(i))
//     }
// }




// const myHotel = new Hotel(2)

Room
interface WaterVehicle{
    getDescription():string,
    getSpeed?():string
}

/* By using the implements keyword with the interface name, we mean that all class
that we use the WaterVehicle interface with (also with the implement keyword),
 must have the getDescription method and the method must return a string 
 we made the getSpeed optional, hence it won't be required.*/

class Ship implements WaterVehicle{
    private name:string;
    private colour:string;
    
    constructor(name:string, colour:string){
        this.name = name; //here we assigned the name sent from the instance to the name property
        this.colour = colour //here we assigned the colour sent from the instance to the colour property
    }
    
    getDescription():string {
        return `This ${this.name} is ${this.colour} in colour`;
    }
}

const titanic = new Ship('Titanic', 'red').getDescription(); // notice here you only have access to the method cause no private
console.log(titanic)

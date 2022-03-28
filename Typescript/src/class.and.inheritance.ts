class Bikes {
    name:string;
    colour:string;

    constructor(name:string, colour:string){
        this.name = name; //here we assigned the name sent from the instance to the name property
        this.colour = colour //here we assigned the colour sent from the instance to the colour property
    }

    getDescription():string {
        return `This ${this.name} is ${this.colour} in colour`;
    }
}

const bike1 = new Bikes('Suzuki', 'red').getDescription(); // notice here you only have access to the method cause no private
console.log(bike1)

class Scoot extends Bikes {
    private noOfTyres:string;

    setTyreNo(noOfTyres:string):void{
        this.noOfTyres = noOfTyres;
    }

    getTyreNo(): string{
        return `${this.name} ${this.noOfTyres}`;
    }
}

/*Notice that if you want to be supplying a value from outside, you need to do this.propname = propname
in the method that is setting the property. */
const scoot = new Scoot('bus','blue');
console.log(scoot.setTyreNo('5'))
console.log(scoot.getTyreNo())
/*notice that Scoot class inherits all the properties of the parent class
i.e Bike. The Scoot class also has its own methods and properties*/
 /*notice for classes, take the properties in the constructore method as properties supplied
to that class from outside. the constructor acts as () for function i.e image a class written
like class(){} where what is in the constructor are d args supplied. the constructor
helps us map/attach args supplied from outside to the properties specified inside. Constructor
are need only when you intend varying the values of the properties inside the class, from the
instances.
 */

/* Notice that typeScript gives you the option to make propeties and methods in a class private or public.
By default it is public, meaning the properties and methods of a class are pulic to all its children
and instances. to make a method or property private, add the private keyword
*/

/* There is also a third option called protected, this allows props and method to only be open
to a class childeren.

you can also attach the readonly keyword to a property and this will make the property a constant
*/
class User {
    firstName:string;
    lastName:string;

    constructor(firstName:string, lastName:string){
        this.firstName = firstName; //here we assigned the firstName sent from the instance to the firstName property
        this.lastName = lastName //here we assigned the lastName sent from the instance to the lastName property
    }

    getFullName():string {
        return this.firstName + " " + this.lastName;
    }
}

const user1 = new User('sam', 'james').getFullName();// notice here you only have access to the method and properties
console.log(user1)



class Car {
    private name:string;
    private colour:string;
    readonly unChangeableName: string;
    constructor(name:string, colour:string){
        this.name = name; //here we assigned the name sent from the instance to the name property
        this.colour = colour //here we assigned the colour sent from the instance to the colour property
        this.unChangeableName = name
    }

    changeUnchangeableName():void{
        // this.unChangeableName = 'sam'
    }
    getDescription():string {
        return `This ${this.name} is ${this.colour} in colour`;
    }
}

const bently = new Car('Bentley', 'Blue').getDescription(); // notice here you only have access to the method cause no private
console.log(bently)


/*Another keynote are static propeties. static properties are accessble only within the class
they are not accessible aside it to its instance.
*/

class Planes {
    private name:string;
    private colour:string;
    static readonly maxAge:number = 23;
    constructor(name:string, colour:string){
        this.name = name; //here we assigned the name sent from the instance to the name property
        this.colour = colour //here we assigned the colour sent from the instance to the colour property
    }

    getDescription():string {
        return `This ${this.name} is ${this.colour} in colour`;
    }
}

const booing = new Planes('Boeing', 'red').getDescription(); // notice here you only have access to the method cause no private
console.log(booing)

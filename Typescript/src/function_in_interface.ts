//defining functions in an interface

interface CarsInterface {
    name:string,
    color:string, 
    move(km:number, time:string):string,
    drive?(fast:boolean):boolean
}

/*notice how we created the function, the string in the right
means it should return a string. we could also specify the datatypes
each argument should be. note we made drive method optional*/

const car1:CarsInterface = {
    name:'benz',
    color:'red',
    move(km,time){
        return `${km}/${time}`
    }
}

const makemove = car1.move(45,'s');
console.log(makemove)
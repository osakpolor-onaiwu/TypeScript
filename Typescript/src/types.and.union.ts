//UNION
/* | is the union operator, and it allows us specify if a var or arg can be of diff types*/

const pageNumber : string | number = 'joe'; //this meaans pageNumber can be string or number
const errorMess : string | null = null;

//u can also use interface with union

interface BoysInterface {
    name:string,
    age:number
}

const people: null | BoysInterface = null; //people can accept null or an object that uses BoysInterface

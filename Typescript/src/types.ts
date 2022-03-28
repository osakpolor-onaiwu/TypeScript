//type script has the following types

/*1. void: e.g when a function does not return anything, the return value is void. 
its almost equivalent to returning null or undefined */
const doSomething = (): void =>{
    console.log('do something')
}

/*2. any: allow any type, it's adviced not to use it*/


/*3. never: a function that returns never, means the code would never end*/

/*4. unknown: works like any, but is better. We can't assigned unknow directly in other type */
let vUnknown: unknown = 10;
// let s:string = vUnknown; //notice it will throw error

//TYPE ASSERTION: this means we want to convert one type to another.
/* we use the as keyword/operator to make type assertion. 
We can use the assertion only when converting from unknown to other datatypes*/

let s1:string = vUnknown as string; //notice no error, we converted type unknown to string.
let age:number = 14;
// let highestAge: string = age as string 
/* notice this won't work, the type assertion will 
ask you to make age unknown, before convertion to string. to fiz this do*/
let lowestAge:string = (age as unknown) as string;
 
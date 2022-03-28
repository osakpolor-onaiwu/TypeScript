const addId = <T> (obj:T, age?:number) =>{
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
        age
    };
};

interface UserInterface {
    name:string
}

const users: UserInterface ={
    name: 'jack'
}

const result = addId<UserInterface>(users,34);
const resultb = addId<string>('samuel')
console.log('result---', result);

/*Notice <T> is used for defining generics. Generics is to almost specify that any
datatype is require. use it instead of any. however when we call the function,
we sent <UserInterface> meaning that the generic T must be an object that follows the UserInterface pattern.
it is adviced to specify what datatype T will be, just like we specified it should be UserInterface

ALso Notice i did name?:string, This means the name arg is optional. you can use ? even without interface.
*/

const addId2 = <T extends object> (obj:T, age?:number) =>{
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
        age
    };
};

const results = addId2<UserInterface>(users,34);
// const resultsb = addId2<string>('samuel') this won't work because T won' accept string
console.log('result---', results);

//notice because we make T extends object it means T can only accept objects.


//You can provide many generic
const practice = <T, V> (obj:T, age:V) =>{
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
        age
    };
};

const resp = practice<UserInterface, string[]>(users,['sam',"has"]);
console.log('result---', results);
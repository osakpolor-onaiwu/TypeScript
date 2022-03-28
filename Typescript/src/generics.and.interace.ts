const addIds = <T> (obj:T, age?:number) =>{
    const id = Math.random().toString(16);
    return {
        ...obj,
        id,
        age
    };
};

interface TestInterface <T> {
    name:string,
    data: T;
}

const test: TestInterface<{meta: string}> ={
    name: 'jack',
    data: {
        meta:'jackson'
    }
}

const test2: TestInterface<string[]> ={
    name: 'sam',
    data: ['dam', 'jam']
}

const res = addIds(test);
console.log('result---', res);
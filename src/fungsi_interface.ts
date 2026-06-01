export interface AddFunction{
    (value1:number, value2:number):number;
}

const add:AddFunction=(value1:number, value2:number):number=>{
    return value1-value2;
}

export interface Person{
    name:string;
    sayHello(name:string):string;
}

console.info(add(2,3))

console.info(add(2,3));
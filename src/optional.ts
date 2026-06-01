const person:{
    id:string;
    name:string;
    hobbies?:string[];
}={
    id:"1",
    name:"Eddie"
}

console.info(person);

person.hobbies=["makan","tidur"]
person.name="Suria"
console.info(person);
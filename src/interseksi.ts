export interface HasName{
    name:string;

}

export interface HasID{
    id:string;

}

export type Domain=HasName & HasID;

const domain : Domain={
    id:"1",
    name:"Aditya"

}

console.log(domain);
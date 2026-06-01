interface StringArray{
    [index:number]:string;
}

interface StringDictionary{
    [key:string]:string;
}

const names:StringArray=[
    "Aditya",
    "Wahyu",
    "Baskoro"
]

const dictionary:StringDictionary={
   name: "Aditya",
    address:"Wahyu street",
    
}

console.info(names[0]);
console.info(dictionary["name"]);
console.info(dictionary["address"]);    
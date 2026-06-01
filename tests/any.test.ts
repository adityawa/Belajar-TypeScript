import { describe, it } from "@jest/globals";

describe('Data Type', function(){
    it("should Must Declare", function(){
        const person:any={
            id:1,
            name:"Aditya Wahyu Baskoro",
            age:38
        };

        person.age=32;
        person.Alamat="JL. Jamuju Raya";
        console.info(person);
    
    })
    })
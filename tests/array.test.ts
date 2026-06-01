import { describe, it } from "@jest/globals";

describe('Array', function () {
    it("should Must Declare", function () {
        const names: string[]=["eko", "budi", "joko"]

        console.info(names);
        
    })

     it("should be Support ReadOnly", function () {
        
        const hobbies:ReadonlyArray<string>=["membaca", "menulis", "tidur"]
        console.info(hobbies);
        
        
    })

     it("should be Support Tupple", function () {
        const person:readonly[string, string, number]=["Aditya", "Wahyu", 231988]
        console.info(person);
        
        
     })
})
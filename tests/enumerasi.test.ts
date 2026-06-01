import { describe, it } from "@jest/globals";
import { CustomerType, type Customer } from "../src/enumerasi";

describe('enum', function(){
    it("should Must Support Enum", function(){
        const customer : Customer={
    id:1,
    name:"Aditya",
    type:CustomerType.GOLD
}

console.info(customer);
    })
})


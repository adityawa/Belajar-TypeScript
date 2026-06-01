import { describe, expect, it } from "@jest/globals";
import { sayHello } from "../src/undefinisi";

describe('Hello', function(){
    it("should say undefined", function(){
       sayHello("Eko");
       expect(sayHello("Eko")).toBe("Hello Eko");

        const name:string|undefined=undefined;
        console.info(sayHello(name));
        expect(sayHello(name)).toBe("Hello");

       console.info(sayHello(null));
        expect(sayHello(null)).toBe("Hello");
    });
        
})

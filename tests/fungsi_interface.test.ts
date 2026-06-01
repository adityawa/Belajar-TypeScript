import { describe, expect, it } from "@jest/globals";
import type { Person } from "../src/fungsi_interface";
import { sayHello } from "../src/say-hello";

const orang: Person = {
    name: "Aditya",
    sayHello: (nama): string =>{
        return `Hello ${nama}`
    }
}
describe('Hello', function () {
    it("should say hello", function () {
        orang.sayHello("Aditya");
        console.log(orang.sayHello("Aditya"));
        expect(orang.sayHello("Aditya")).toBe("Hello Aditya");
    });


     it("should say hello", function () {
        orang.sayHello("cungkring");
        console.log(orang.sayHello("cungkring"));
        expect(orang.sayHello("cungkring")).toBe("Hello cungkring");
    });
});

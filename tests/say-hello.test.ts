import { describe, expect, it } from "@jest/globals";
import { sayHello } from "../src/say-hello";

describe('sayHello', function():void{
    it("should return Hello Aditya", function():void{
        expect(sayHello('Aditya')).toBe('Hello Aditya');
    });
});
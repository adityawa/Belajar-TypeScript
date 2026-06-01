import { describe, it } from "@jest/globals";
import type { employee, manager } from "../src/extending_interface";


describe('ExtendingInterface', function(){
    it("should say support extending interface", function(){
      const adit:employee={
        id:"2",
        name:"Aditya",
        division:"IT"
      }
      console.info(adit);
    
      const bos:manager={
        id:"1",
        name:"Arya",
        division:"Non SAP",
        numberOfEmploye:20
      }
      console.info(bos);
    
    });
        
    });
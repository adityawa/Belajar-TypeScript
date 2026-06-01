import { describe, it } from "@jest/globals";
import type { Seller } from "../src/lat_interface";

describe("interface", function () {
    it("should support in interface", function () {
        const seller: Seller = {
            id: 1,
            name: "Toko Handphone",
            nib:"12345",
            npwp:"1234567"
        };
//seller.npwp="2222222";
        console.info(seller);
    })
})


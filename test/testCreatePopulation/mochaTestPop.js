import {expect} from 'chai';
import {wareHouses} from "../../Population.js";

describe("test Creation Population", () => {
    describe("Test Creation Points",() => {
        it('should return an array', () => {
            expect(wareHouses).to.be.an('array');
        });
    });
    describe("Test Creation Points",() => {
        it('should return an Object', () => {
            expect(wareHouses[0]).to.be.an('Object');
        });
    });
});
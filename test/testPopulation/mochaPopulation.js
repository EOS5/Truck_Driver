import {expect} from "chai";
import {generateListOfOrder, orderOfPoints, population} from "../../Population.js";

describe('Test Population', () => {
    describe('Test Creation Population', () => {
        it('should return an array of numbers from 0 to 1', function () {
            expect(generateListOfOrder).to.eql([0,1,2,3,4]);
        });
    });

    describe('Test shuffle',() => {
        it('should return an array', function () {
            expect(orderOfPoints).to.be.an('array');
        });
        it('should return a different list', function () {
            expect(orderOfPoints).to.not.eql([0,1,2,3,4]);
        });
    });

    describe('Test Population', () => {
        it('should return an array', function () {
            expect(population).to.be.an('array');
        });
        it('should return an object', function () {
            expect(population[0]).to.be.an('Object');
        });
        it('should return a array', function () {
            expect(population[0]['order']).to.be.an('array');
        });
        it('should return a number in the array', function () {
            expect(population[0]['order'][0]).to.be.an('number');
        });
        it('should return a number', function () {
            expect(population[0]['distance']).to.be.an('number');
        });
    });
});
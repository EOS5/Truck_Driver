import {expect} from 'chai';
import {createNewOrder, nextGeneration} from "../../NewPopulation.js";
import {populationSorted} from "../../Population.js";

describe('New Population', () =>{
    describe('Mutation Order', () =>{
        it('should return an array', () => {
            expect(createNewOrder).to.be.an('array');
        });
    });
    describe('Next Generation',() => {
        it('should return a new array', () => {
            expect(nextGeneration).to.not.equal(populationSorted);
        });
    });
});

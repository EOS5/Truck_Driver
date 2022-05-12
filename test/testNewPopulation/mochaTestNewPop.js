import {expect} from 'chai';
import {createNewOrder} from "../../NewPopulation.js";

describe('New Population', () =>{
    describe('Mutation Order', () =>{
        it('should return an array', () => {
            expect(createNewOrder).to.be.an('array');
        });
    })
})
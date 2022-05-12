
import {expect} from 'chai';
import {mutateDistance, mutateOrder} from "../../GenMutation.js";
import {populationSorted} from "../../Population.js";

const testPop = [
    {order: [0,1,2,3,4],distance:10}
]

describe('Mutation', () => {
    describe('TestGenMutate', () => {
        it('should return an array', () =>{
            expect(mutateOrder(populationSorted[0])).to.be.an('array');
        });
        it('should return a number', () =>{
            expect(mutateDistance(testPop[0])).to.be.an('number');
        });
    });
    // describe('Test calcul mutated distance', () =>{
    //     it('should return the mutated distance', function () {
    //
    //     });
    // });
});

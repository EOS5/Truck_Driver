import {expect} from 'chai';
import {createNewOrder, nextGeneration} from '../../new-population.js';
import {populationSorted} from '../../population.js';

describe('New Population', () => {
	describe('Mutation Order', () => {
		it('should return an array', () => {
			expect(createNewOrder).to.be.an('array');
		});
	});
	describe('Next Generation', () => {
		it('should return a new array', () => {
			expect(nextGeneration).to.not.equal(populationSorted);
		});
	});
});

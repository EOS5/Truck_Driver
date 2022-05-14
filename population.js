import * as R from 'ramda';
import {computeDistanceWithOrder, randomFunc} from './basic-calculs.js';
import {shuffle} from './shuffle.js';

const numberOfPoints = 5;
const popSize = 100;

const generatePoint = R.applySpec({
	name: 'Point 1',
	pos: {
		x: randomFunc,
		y: randomFunc,
	},
});

const createWarehouse = R.times(generatePoint);
const wareHouses = createWarehouse(numberOfPoints);

const generateListOfOrder = R.times(R.identity, numberOfPoints);
const jsp = R.repeat(generateListOfOrder, popSize);

const ordPoints = R.map(shuffle, jsp);
const shuffling = R.applySpec({
	order: shuffle,
});
const orderOfPoints = R.map(shuffling, ordPoints);
// =======================WIP================
const calcDist = computeDistanceWithOrder(wareHouses);
console.log(calcDist(25));

const generatePopulation = R.applySpec({
	order: R.prop('order'),
	distance: calcDist,
});
// =======================WIP================
const population = R.map(generatePopulation, orderOfPoints);

const byDistance = R.ascend(R.prop('distance'));
const populationSorted = R.sort(byDistance, population);
// Console.log(populationSorted);
// console.log(wareHouses);
export {wareHouses, populationSorted, byDistance, numberOfPoints, generateListOfOrder, orderOfPoints, population};

import * as R from 'ramda';
import {computeDistanceWithOrder, kaka, randomFunc} from './basic-calculs.js';
import {shuffle} from './shuffle.js';

const numberOfPoints = 5;
const popSize = 100;

const generatePoint = R.applySpec({
	name: R.always('Point'),
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
const calcDist = computeDistanceWithOrder(10);


const generatePopulation = R.applySpec({
	order: R.prop('order'),
	distance: calcDist,
});

// console.log(generatePopulation(orderOfPoints[0]))
// =======================WIP================

const population = R.map(generatePopulation, orderOfPoints);
console.log(wareHouses);
console.log(orderOfPoints[0].order);
console.log(kaka(wareHouses)(orderOfPoints[0].order));
console.log(calcDist(orderOfPoints[0]));

console.log(orderOfPoints[1].order);
console.log(kaka(wareHouses)(orderOfPoints[1].order));
console.log(calcDist(orderOfPoints[1]));

const byDistance = R.ascend(R.prop('distance'));
const populationSorted = R.sort(byDistance, population);
// console.log(populationSorted);
// console.log(wareHouses);
export {wareHouses, populationSorted, byDistance, numberOfPoints, orderOfPoints, population};

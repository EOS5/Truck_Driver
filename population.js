import * as R from 'ramda';
import {calcDistanceWithOrder, randomFunc} from './basic-calcul.js';
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
const populationGenerator = R.repeat(generateListOfOrder, popSize);

const ordPoints = R.map(shuffle, populationGenerator);
const shuffling = R.applySpec({
	order: shuffle,
});
const orderOfPoints = R.map(shuffling, ordPoints);
const calDist = R.pipe(
	R.prop('order'),
	calcDistanceWithOrder(wareHouses),
);
const generatePopulation = R.applySpec({
	order: R.prop('order'),
	distance: calDist,
});

const population = R.map(generatePopulation, orderOfPoints);

const byDistance = R.ascend(R.prop('distance'));
const populationSorted = R.sort(byDistance, population);

export {wareHouses, populationSorted, byDistance, numberOfPoints, generateListOfOrder, orderOfPoints, population};

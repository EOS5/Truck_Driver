import * as R from 'ramda';
import {swap} from './shuffle.js';
import {calcDistanceWithOrder, random} from './basic-calcul.js';
import {numberOfPoints, wareHouses} from './population.js';

const randomNumber = random(0, numberOfPoints - 1, false);

const mutateOrder = R.pipe(
	R.prop('order'),
	swap(randomNumber, randomNumber),
);
const newOrder = R.applySpec({
	order: mutateOrder,
});
const mutateDistance = R.pipe(
	R.prop('order'),
	calcDistanceWithOrder(wareHouses),
);
const newDistance = R.applySpec({
	order: R.prop('order'),
	distance: mutateDistance,
});

export {mutateOrder, mutateDistance, newOrder, newDistance, randomNumber};

import * as R from 'ramda';
import {swap} from './shuffle.js';
import {computeDistanceWithOrder, random} from './basic-calculs.js';
import {wareHouses} from './population.js';

const mutateOrder = R.pipe(
	R.prop('order'),
	swap(random(0, 4, false), random(0, 4, false)),
);
const newOrder = R.applySpec({
	order: mutateOrder,
});
const mutateDistance = R.pipe(
	R.prop('order'),
	computeDistanceWithOrder(wareHouses),
);
const newDistance = R.applySpec({
	order: R.prop('order'),
	distance: mutateDistance,
});

export {mutateOrder, mutateDistance, newOrder, newDistance};

import * as R from 'ramda';

const random = R.curry((min, max, isFloat) => {
	const range = max - min;
	const random = (Math.random()) * (range + min);
	return isFloat ? random : Math.floor(random);
});

const randomFunc = () => R.identity(random(1, 10, false));

const getCordAxisX = R.pipe(
	R.pluck('pos'),
	R.pluck('x'),
);
const getCordAxisY = R.pipe(
	R.pluck('pos'),
	R.pluck('y'),
);
const pow = x => x ** 2;
const subtractOnX = (object1, object2) => R.subtract(getCordAxisX([object1]), getCordAxisX([object2]));

const subtractOnY = (object1, object2) => R.subtract(getCordAxisY([object1]), getCordAxisY([object2]));

const sqrt = x => Math.sqrt(x);
const normVector = R.curry((object1, object2) => sqrt(R.add(pow(subtractOnX(object1, object2)), pow(subtractOnY(object1, object2)))));

const computeDistance = value => acc => acc.totalDistance + normVector(value, acc.currentPosition);

const computeDistanceWithOrder = R.curry(
	(travel, constraint) => R.reduceWhile(

		acc => acc.totalDistance < constraint,

		(acc, value) => R.applySpec({
			totalDistance: computeDistance(value),
			totalScore: R.pipe(R.prop('totalScore'), R.add(acc.totalDistance)),
			currentPosition: value.pos,
		})(acc),
		{totalDistance: 0, totalScore: 0, currentPosition: travel[0]},
		travel,
	),
);

export {randomFunc, normVector, computeDistanceWithOrder, random};


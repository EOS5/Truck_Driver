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

// J'ai pas réussi à parfairement intégrer la fonction que vous m'avez passé (retourne pas le bon résultat)
// Voici ce que j'ai fait:
// ===========================WIP===========================
// const computeDistance = value => acc => acc.totalDistance + normVector(wareHouses[value], wareHouses[acc.currentPoint]);
//
// const computeDistanceWithOrder = R.curry(
// 	(constraint,travel) => R.reduceWhile(
// 		acc => acc.totalScore < constraint,
// 		(acc, value) => R.applySpec({
// 			totalDistance: computeDistance(value),
// 			totalScore: R.pipe(R.prop('totalScore'), R.add(value)),
// 			currentPoint: value,
// 		})(acc),
//
// 		{totalDistance: 0, totalScore: 0, currentPoint: travel[0]},
// 		travel.order,
// 	),
// );
// ===========================WIP===========================
const calcDistanceWithOrder = R.curry((points, order) => {
	let sum = 0;
	for (let i = 0; i < order.length - 1; i++) {
		const pointAIndex = order[i];
		const pointA = points[pointAIndex];
		const pointBIndex = order[i + 1];
		const pointB = points[pointBIndex];
		const d = normVector(pointA, pointB);
		sum += d;
	}

	return sum;
});

export {randomFunc, normVector, calcDistanceWithOrder, random};


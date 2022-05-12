import * as R from 'ramda';

// ToDo: Modify those functions to be Ramda ?
const shuffler = R.curry((random, list) => {
	let idx = -1;
	const length = list.length;
	let position;
	const result = [];
	while (++idx < length) {
		position = Math.floor((idx + 1) * random());
		result[idx] = result[position];
		result[position] = list[idx];
	}

	return result;
});
const shuffle = shuffler(Math.random);

const swap = R.curry((index1, index2, list) => R.move(index1, index2, list));
export {shuffle, swap, shuffler};

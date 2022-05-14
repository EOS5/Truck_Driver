import * as R from 'ramda';

const shuffle = R.sort(() => Math.random() - 0.5);

const swap = R.curry((index1, index2, list) => R.move(index1, index2, list));
export {shuffle, swap};

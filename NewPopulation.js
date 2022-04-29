import * as R from 'ramda';
import {populationSorted} from "./Population.js";
import {swap} from "./Shuffle.js";
import {randomFunc} from "./BasicCalculs.js";

// const takeDistance = R.pluck('distance');
const popOrder = R.pluck('order');

const newPopulation = R.take(30,populationSorted);

const mutate = R.map(swap(randomFunc(),randomFunc()),popOrder(newPopulation))


export {mutate,newPopulation}

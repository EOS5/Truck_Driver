import * as R from 'ramda';
import {populationSorted} from "./Population.js";

// const takeDistance = R.pluck('distance');
// const popOrder = R.pluck('order');

const newPopulation = R.take(30,populationSorted);
export {newPopulation}

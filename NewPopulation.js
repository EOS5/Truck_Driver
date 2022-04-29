import * as R from 'ramda';
import {populationSorted} from "./Population.js";
import {swap} from "./Shuffle.js";
import {randomFunc} from "./BasicCalculs.js";

// const takeDistance = R.pluck('distance');
// const popOrder = R.pluck('order');

const newPopulation = R.take(30,populationSorted);

const mutate = (list) => {
    return R.map(swap(randomFunc(),randomFunc()),list)
}
console.log(newPopulation)
const mutatedPopulation = R.map(mutate,newPopulation)

console.log(mutatedPopulation)

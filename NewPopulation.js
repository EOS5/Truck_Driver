import * as R from 'ramda';
import {byDistance, populationSorted, wareHouses} from "./Population.js";
import {swap} from "./Shuffle.js";
import {calcDistanceWithOrder, randomFunc} from "./BasicCalculs.js";


const newPopulation = R.take(30,populationSorted);
console.log(newPopulation)
// const popOrder = R.prop('order');

const mutateOrder = R.pipe(
    R.prop('order'),
    swap(randomFunc(),randomFunc())
)
const mutateDistance = R.pipe(
    R.prop('order'),
    calcDistanceWithOrder(wareHouses)
)
const newOrder = R.applySpec({
    order: mutateOrder,
})
const newDistance = R.applySpec({
    order: R.prop('order'),
    distance: mutateDistance,
})
const createNewOrder = R.map(newOrder,newPopulation)
const createNextGeneration = R.map(newDistance,createNewOrder)
const NextGeneration = R.sort(byDistance,createNextGeneration)
console.log(NextGeneration)



import * as R from 'ramda';
import {populationSorted, wareHouses} from "./Population.js";
import {swap} from "./Shuffle.js";
import {calcDistanceWithOrder, randomFunc} from "./BasicCalculs.js";


const newPopulation = R.take(30,populationSorted);

// const popOrder = R.prop('order');

const mutateOrder = R.pipe(
    R.prop('order'),
    swap(randomFunc(),randomFunc())
)
const nextGeneration = R.applySpec({
    order: mutateOrder,
})

const createNextGeneration = R.map(nextGeneration,newPopulation)

const mutateDistance = R.pipe(
    R.prop('order'),
    calcDistanceWithOrder(wareHouses)
)
const newDistance = R.applySpec({
    distance: mutateDistance,
})

const createJsp = R.map(newDistance,createNextGeneration)

console.log(createJsp)











// R.modify('order',swap(randomFunc(),randomFunc()));

// const Lens = R.lensProp('distance');
// const newDistance = R.pipe(
//     R.pick(['order']),
//     R.prop('order'),
//     calcDistanceWithOrder(wareHouses)
// )




import * as R from 'ramda';
import {byDistance, populationSorted} from './population.js';
import {newDistance, newOrder} from './gen-mutation.js';

const newPopulation = R.take(30, populationSorted);
const createNewOrder = R.map(newOrder, newPopulation);
const createNextGeneration = R.map(newDistance, createNewOrder);
const nextGeneration = R.sort(byDistance, createNextGeneration);

// Ici je voulais loop les 4 lignes au dessus pour avoir le meilleur path
// const jsp3 = (listOrder,listToCalcul) => {
//     return R.applySpec({
//         order: R.map(
//             R.pipe(
//                 R.prop('order'),
//                 swap(randomNumber, randomNumber)
//             ),(listOrder)),
//         distance: R.map(
//             R.pipe(
//                 R.prop('order'),
//                 calcDistanceWithOrder(wareHouses)
//             ),(listToCalcul))
//     })
// };
// console.log(jsp3(newPopulation,newPopulation));
console.log('Best Path:', nextGeneration[0]);

export {createNewOrder, createNextGeneration, nextGeneration};

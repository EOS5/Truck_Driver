import * as R from 'ramda';
import {byDistance, populationSorted} from "./Population.js";
import {newDistance, newOrder} from "./GenMutation.js";


const newPopulation = R.take(30,populationSorted);
const createNewOrder = R.map(newOrder,newPopulation);
const createNextGeneration = R.map(newDistance,createNewOrder);
const nextGeneration = R.sort(byDistance,createNextGeneration);

// Ici je voulais loop les 4 lignes au dessus...
// const bestPath = nextGeneration[0];
//
// const loop = (nextGeneration) => {
//     return loop(R.pipe(
//         R.map(newOrder,nextGeneration),
//         R.map(newDistance),
//         R.sortBy(byDistance)
//     ))
// }
// loop(nextGeneration);

export {createNewOrder,createNextGeneration,nextGeneration}
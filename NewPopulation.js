import * as R from 'ramda';
import {calcDistanceWithOrder} from "./BasicCalculs.js";
import {populationShuffled, wareHouses} from "./Population.js";

const distanceByPath = R.map(calcDistanceWithOrder(wareHouses),populationShuffled);
const square = n => n * n;
const bestDistance = R.reduce(R.minBy(square),Infinity,distanceByPath);
const calculFitness = (x) => R.divide(1,x+1);


const fitness = R.map(calculFitness,distanceByPath);
const sumElemList = R.sum;
// console.log(fitness)

const normalization = R.divide(R.__,sumElemList(fitness));
const normalizedFitness = R.map(normalization,fitness);

const indexOfBestPath = R.indexOf(bestDistance,distanceByPath);
const bestPath = populationShuffled[indexOfBestPath];

// console.log(fitness);
// console.log(normalizedFitness);
console.log(bestPath);


// const randomval = Math.random();
// const randomIsSup = x => x > 0;
//
// const subtractWhile = R.reduceWhile(randomIsSup,R.subtract,randomval,normalizedFitness)
// console.log(randomval)
// console.log(subtractWhile)

export {normalizedFitness}
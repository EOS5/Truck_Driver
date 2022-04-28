import * as R from 'ramda';
import {calcDistanceWithOrder, randomFunc} from "./BasicCalculs.js";
import {populationShuffled, wareHouses} from "./Population.js";
import {swap} from "./Shuffle.js";

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

const pickOne = R.curry((list,prob) => {
    var index = 0;
    var r = Math.random();
    while (r > 0){
        r = r - prob[index];
        index ++;
    }
    index --;
    return list[index];
})
const pop = pickOne(populationShuffled,normalizedFitness);
const mutatePopulation = swap(randomFunc(),randomFunc(),pop);
console.log(mutatePopulation);
export {normalizedFitness}
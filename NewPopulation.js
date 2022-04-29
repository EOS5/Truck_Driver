import * as R from 'ramda';
import {calcDistanceWithOrder, randomFunc} from "./BasicCalculs.js";
import {populationShuffled, wareHouses} from "./Population.js";
import {swap} from "./Shuffle.js";

//TODO: This code is trash and useless redo it
//TODO: Maybe make a dictionnary with fitness and the points order because the results are hard to read

const distanceByPath = R.map(calcDistanceWithOrder(wareHouses),populationShuffled);
// const square = n => n * n;
// const bestDistance = R.reduce(R.minBy(square),Infinity,distanceByPath);
const calculFitness = (x) => R.divide(1,x+1);


const fitness = R.map(calculFitness,distanceByPath);
const sumElemList = R.sum;
// console.log(fitness)

const normalization = R.divide(R.__,sumElemList(fitness));
const normalizedFitness = R.map(normalization,fitness);

// const indexOfBestPath = R.indexOf(bestDistance,distanceByPath);
// const bestPath = populationShuffled[indexOfBestPath];
//
// console.log(bestPath);
// -----------------------------
//TODO: To Ramda
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
// -----------------------------

const populationPick = pickOne(populationShuffled,normalizedFitness);
const listPopulation = R.times(R.identity(populationPick),10);
const mutatePopulation = R.map(swap(randomFunc(),randomFunc()),listPopulation);
const populationMutated = mutatePopulation;

export {listPopulation,populationMutated};
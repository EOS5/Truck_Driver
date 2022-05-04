import * as R from 'ramda';
import {byDistance, populationSorted} from "./Population.js";
import {newDistance, newOrder} from "./GenMutation.js";


const newPopulation = R.take(30,populationSorted);
console.log(newPopulation)

const createNewOrder = R.map(newOrder,newPopulation);
const createNextGeneration = R.map(newDistance,createNewOrder);
const nextGeneration = R.sort(byDistance,createNextGeneration);
console.log(createNextGeneration);
console.log(nextGeneration);



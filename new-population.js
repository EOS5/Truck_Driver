import * as R from 'ramda';
import {byDistance, populationSorted} from './population.js';
import {newDistance, newOrder} from './gen-mutation.js';

const newPopulation = R.take(30, populationSorted);
// Console.log(newPopulation) //Population initiale

const createNewOrder = R.map(newOrder, newPopulation);
const createNextGeneration = R.map(newDistance, createNewOrder);
const nextGeneration = R.sort(byDistance, createNextGeneration);
// Console.log(createNextGeneration);
// console.log(nextGeneration);

export {createNewOrder, createNextGeneration, nextGeneration};

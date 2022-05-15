import * as R from 'ramda';
import {byDistance, populationSorted, wareHouses} from './population.js';
import {newDistance, newOrder} from './gen-mutation.js';

const newPopulation = R.take(30, populationSorted);
const createNewOrder = R.map(newOrder, newPopulation);
const createNextGeneration = R.map(newDistance, createNewOrder);
const nextGeneration = R.sort(byDistance, createNextGeneration);

console.log('Best Path:', nextGeneration[0]);

const orderPath = x => console.log(wareHouses[x]);

console.log('Order of points:', R.forEach(orderPath, nextGeneration[0].order));

export {createNewOrder, createNextGeneration, nextGeneration};

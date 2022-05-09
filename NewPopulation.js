import * as R from 'ramda';
import {byDistance, populationSorted} from "./Population.js";
import {newDistance, newOrder} from "./GenMutation.js";


const newPopulation = R.take(5,populationSorted);
console.log(newPopulation) //Population initiale

const createNewOrder = R.map(newOrder,newPopulation); // Application de la mutation de population
const createNextGeneration = R.map(newDistance,createNewOrder); // Calcul de distance avec population mutée
const nextGeneration = R.sort(byDistance,createNextGeneration); // Sort Population
console.log(createNextGeneration); //Population après mutation
console.log(nextGeneration); //Nouvelle population sorted
// Exemple:
// Population[0] = { order: [ 0, 3, 2, 4, 1 ], distance: 10.899494936611665 },
// Mutation + recalcul de distance = { order: [ 0, 4, 2, 3, 1 ], distance: 20.213591931880696 },


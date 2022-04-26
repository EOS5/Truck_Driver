import * as R from 'ramda';
import {wareHouses,populationShuffled} from "./Population.js";
import {calcDistance} from "./BasicCalculs.js";

//
// const points = R.prop('pos');
// const listDistancePointsToTruck = R.applySpec({
//     pos: points,
//     distance: normVector(fleet[1])
// })
//
// const listOfPointsToTruck = R.map(listDistancePointsToTruck,wareHouses);
// const sortByDistance = R.sortBy(R.prop('distance'));
// const distanceSorted = sortByDistance(listOfPointsToTruck);

//
// const listOfPosWarehouse = R.applySpec({
//     pos: points,
//     distance: normVector(wareHouses[0])
// })
//
// const closestWarehouse = R.map(listOfPosWarehouse,wareHouses);
// console.log(sortByDistance(closestWarehouse));

const distanceByPath = R.map(calcDistance(wareHouses),populationShuffled);
const square = n => n * n;
const bestDistance = R.reduce(R.minBy(square),Infinity,distanceByPath);
const calculFitness = (x) => R.divide(1,x+1);


const fitness = R.map(calculFitness,distanceByPath);
const sumElemList = R.sum;
// console.log(fitness)

const normalization = R.divide(R.__,sumElemList(fitness));
const normalizeFitness = R.map(normalization,fitness);

const indexOfBestPath = R.indexOf(bestDistance,distanceByPath);
const bestPath = populationShuffled[indexOfBestPath]

console.log(fitness);
console.log(normalizeFitness);
console.log(bestPath);




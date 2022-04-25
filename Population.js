import * as R from 'ramda'
import {randomFunc} from "./BasicCalculs.js";
import {shuffler} from "./Shuffle.js";

const numberOfPoints = 10;
const numberOfTruck = 1;
// const bestPop = [];
const generatePoint = R.applySpec({
    name: 'Point1',
    pos: {
        x: randomFunc,
        y: randomFunc
    }
});

const createWarehouse = R.times(generatePoint);
const generateTruck = R.applySpec({
    name: "Truck1",
    trunk: R.always(Infinity),
    fuelTank: R.always(Infinity),
    pos: {
        x: randomFunc,
        y: randomFunc
    }
});

const createFleet = R.times(generateTruck);

const fleet = createFleet(numberOfTruck);
const wareHouses = createWarehouse(numberOfPoints);

const creatOrderOfPoints = R.times(R.identity,numberOfPoints);
const population  = R.repeat(creatOrderOfPoints,numberOfPoints);

//console.log(population);

const shuffle = shuffler(Math.random);

const populationShuffled = R.map(shuffle,population);

console.log(populationShuffled)

export {wareHouses,fleet}
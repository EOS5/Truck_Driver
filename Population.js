import * as R from 'ramda'
import {calcDistanceWithOrder, randomFunc} from "./BasicCalculs.js";
import {shuffle} from "./Shuffle.js";

const numberOfPoints = 5;
const numberOfTruck = 1;
const popSize = 100;


const generatePoint = R.applySpec({
    name: "Point 1",
    pos: {
        x: randomFunc,
        y: randomFunc
    }
});

const generateTruck = R.applySpec({
    name: "Truck1",
    trunk: R.always(Infinity),
    fuelTank: R.always(Infinity),
    pos: {
        x: randomFunc,
        y: randomFunc
    }
});

const createWarehouse = R.times(generatePoint);
const createFleet = R.times(generateTruck);

const fleet = createFleet(numberOfTruck);
const wareHouses = createWarehouse(numberOfPoints);

const generateListOfOrder = R.times(R.identity,numberOfPoints);
const jsp = R.repeat(generateListOfOrder,popSize);

const ordPoints = R.map(shuffle,jsp);
const bish = R.applySpec({
    order: shuffle,
})
const orderOfPoints = R.map(bish,ordPoints);
const pd = R.pipe(
    R.prop('order'),
    calcDistanceWithOrder(wareHouses)
)
const generatePopulation = R.applySpec({
    order: R.prop('order'),
    distance: pd
});

const population = R.map(generatePopulation,orderOfPoints);

const byDistance = R.ascend(R.prop('distance'));
const populationSorted = R.sort(byDistance,population);
// console.log(populationSorted);
// console.log(wareHouses);
export {wareHouses,fleet,populationSorted,byDistance,numberOfPoints,generateListOfOrder,orderOfPoints,population}
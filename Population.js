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
//TODO: Population est totalement cassé à refaire.
const orderOfPoints = () => {
    return shuffle(generateListOfOrder);
}

// const calculateDistance = () => calcDistanceWithOrder(wareHouses, orderOfPoints())

const generatePopulation2 = R.applySpec({
    order: orderOfPoints,
})
const generatePopulation = R.applySpec({
    order: R.prop("order",generatePopulation2),
    distance: calcDistanceWithOrder(wareHouses,generatePopulation2)
})

const createPopulation = R.times(generatePopulation);
const population = createPopulation(popSize);
const byDistance = R.ascend(R.prop('distance'));
const populationSorted = R.sort(byDistance,population);
// console.log(wareHouses);
export {wareHouses,fleet,populationSorted,byDistance,numberOfPoints}
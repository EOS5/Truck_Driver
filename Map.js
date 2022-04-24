import * as R from 'ramda'
import {randomFunc,normVector} from "./Contraintes.js";


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


const generatePoint = R.applySpec({
    name: 'Point1',
    pos: {
        x: randomFunc,
        y: randomFunc
    }
});

const createPoint = R.times(generatePoint);

const fleet = createFleet(2);
const wareHouses = createPoint(10);

console.log(normVector(fleet[1],wareHouses[1]));
// console.log(R.map())
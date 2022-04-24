import * as R from 'ramda'
import {randomfunc} from "./Contraintes.js";

const QuantitiesPoints = 10;
const QuantitiesOfTrucks = 2;
const Points = R.aperture(2,R.times(randomfunc, QuantitiesPoints));
const Trucks = R.aperture(2,R.times(randomfunc, QuantitiesOfTrucks));

console.log(Points)
console.log(Trucks)



//const f = R.map(console.log,Points)

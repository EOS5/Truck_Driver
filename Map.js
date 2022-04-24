import * as R from 'ramda'
import {randomfunc} from "./Contraintes.js";

const QuantitiesPoints = 10;
const QuantitiesOfTrucks = 2;
const Points = R.aperture(2,R.times(randomfunc, QuantitiesPoints));
const Trucks = R.aperture(2,R.times(randomfunc, QuantitiesOfTrucks));

//console.log(Points)
//console.log(Trucks)


//-----------------------------Fonctionne pas
const calculDistance = (x) => {
    Math.sqrt(Math.pow(R.subtract( Trucks[0][0], x[0]),2) + Math.pow(R.subtract( Trucks[0][1], x[1]),2));
}
//const f = R.map(calculDistance,Points)
const f = R.pipe(
    R.map(calculDistance,Points),
    R.sort,
)
console.log(f)

//-----------------------------------------
const coord = R.map
const calcVecteur = R.pipe(
    coord,
    calculDistance,
)
console.log(calcVecteur(Points))

//-----------------------------------------
const G = R.pipe(Math.pow, R.negate, R.inc);

console.log(G(3, 4));






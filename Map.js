import {GetVector, Random,} from "./Contraintes.js";

import {Distributeur, Marchandise} from "./Ville.js";
import {Camion} from "./Camion.js";

const listPoints = [];
const listOfTrucks  = [];
const listDistributeur = [];

for (let i = 0; i<5; i++){
    listPoints[i] = new Marchandise("Paris", Random(1, 10, false), Random(1, 10, false), "Chanel", Random(1, 500, false), Random(1, 5, false));
}
for (let j = 0; j<2; j++){
    listOfTrucks[j] = new Camion(j,Random(100,500,false),0,0,0,Random(1,10,false),Random(1,10,false));
}
for (let j = 0; j<2; j++) {
    listDistributeur[j] = new Distributeur("Paris", Random(1, 10, false), Random(1, 10, false), "Leclerc", Random(1, 500, false));
}

const listArrayPosition = [];
const getArrayPosition = () => {
    for (let i = 0; i<listPoints.length; i++){
        listArrayPosition[i] = listPoints[i].getCorrdEntrepot();
    }
}

const calcDistance = (positionCamion) => {
    var sum = 0;
    for (let i = 0; i < listArrayPosition.length; i++){
        var d = GetVector(positionCamion,listArrayPosition[i]);
        sum = sum + d;
    }
    return sum;
}
const getClosestPoint = (PositionCamion) => {
    var smallestValue = calcDistance(listOfTrucks[0].getCoordCamion())
    for (let i = 0; i < listArrayPosition.length; i++){
        var d = GetVector(PositionCamion,listArrayPosition[i]);
        if (smallestValue > d){
            smallestValue = listArrayPosition[i];
        }
    }
    return smallestValue;
}

console.log(listOfTrucks[0].getCoordCamion())
getArrayPosition();
calcDistance(listOfTrucks[0].getCoordCamion());
listOfTrucks[0].setCoordCamion(getClosestPoint(listOfTrucks[0].getCoordCamion()));
console.log(listOfTrucks[0].getCoordCamion())

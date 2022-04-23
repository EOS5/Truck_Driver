import * as R from 'ramda'
import {List} from "./Map.js";

const getArrayPosition = () => {
    const listArrayPosition = [];
    for (let i = 0; i<List.length; i++){
        listArrayPosition[i] = List[i].getCorrdEntrepot();
    }
    return listArrayPosition;
}

const CalcDistance = positionCamion => {
    var sum = 0;
    for (let i = 0; i < getArrayPosition().length; i++){
        var d = GetVector(positionCamion,List[i].getCorrdEntrepot());
        sum = sum + d;
    }
    return sum;
}

const GetVector = (x, y) => {
    return Math.sqrt(Math.pow(R.subtract(x[0],y[0]),2) + Math.pow(R.subtract(x[1],y[1]),2));
}

const CalculPaye = (quantite, prixUnite) => {
    return R.multiply(quantite,prixUnite);
}

const random = R.curry((min, max, isFloat) => {
    return isFloat ? Math.random() * (max - min) + min : Math.floor(Math.random() * (max - min) + min);
})


export {GetVector,CalculPaye,random,CalcDistance}


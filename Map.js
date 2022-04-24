import * as R from 'ramda'

const randomNumberGenerator = R.curry((min, max, isFloat) => {
    return isFloat ? (max - min) : Math.floor(Math.random() * (max - min) + min);
})
const generateNumber = () =>{
    return R.identity(randomNumberGenerator(1,10,false));
}
const generatePoints = (quantite) => {
    return R.times(generateNumber, quantite);
}

const numberToTuple = (listOfPoints) => {
    return R.aperture(2,listOfPoints)
}
const generateCoordonates = (quantite) => {
    return numberToTuple(generatePoints(quantite));
}
//-----------------------------------------------------
//const GetVector = (x, y) => {
//    return Math.sqrt(Math.pow(R.subtract(x[0],y[0]),2) + Math.pow(R.subtract(x[1],y[1]),2));
//}
//const VectorfromCoordonates = (listOfCoordonates) => {

//}
//-----------------------------------------------------
const Coordonnee = generateCoordonates(10);
console.log(Coordonnee);

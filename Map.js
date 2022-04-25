import * as R from 'ramda'
import {wareHouses,fleet} from "./Population.js";


// console.log(R.map(normVector(fleet[1]),(wareHouses)))
// console.log(normVector(fleet[1],wareHouses[1]));


const points = R.prop('pos')
const listDistancePointsToTruck = R.applySpec({
    pos: points,
    distance: normVector(fleet[1])
})

const listOfPointsToTruck = R.map(listDistancePointsToTruck,wareHouses)
const sortByDistance = R.sortBy(R.prop('distance'))
console.log(sortByDistance(listOfPointsToTruck))

const listOfPosWarehouse = R.applySpec({
    pos: points,
    distance: normVector(wareHouses[0])
})

// console.log(R.map(listOfPosWarehouse,wareHouses))
// console.log(R.map(normVector(wareHouses[0]),(wareHouses)))
const closestWarehouse = R.map(listOfPosWarehouse,wareHouses)
console.log(sortByDistance(closestWarehouse))

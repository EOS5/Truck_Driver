import * as R from "ramda";
import {swap} from "./Shuffle.js";
import {calcDistanceWithOrder, random} from "./BasicCalculs.js";
import {wareHouses} from "./Population.js";


const mutateOrder = R.pipe(
    R.prop('order'),
    swap(random(0,4,false),random(0,4,false)),
)
const newOrder = R.applySpec({
    order: mutateOrder,
});
const mutateDistance = R.pipe(
    R.prop('order'),
    calcDistanceWithOrder(wareHouses)
);
const newDistance = R.applySpec({
    order: R.prop('order'),
    distance: mutateDistance,
});

export {mutateOrder,mutateDistance,newOrder,newDistance}
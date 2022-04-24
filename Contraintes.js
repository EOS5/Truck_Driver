import * as R from 'ramda'


const random = R.curry((min, max, isFloat) => {
    let range = max - min
    let random = Math.random() * range + min
    return isFloat ? random : Math.floor(random)
})

const randomFunc = () => {
    R.identity(random(1,10,false));
}

const getCordX = (obj) => {
    R.pluck(obj['pos']['x']);
}
const getCordY = (obj) => {
    R.pluck(obj['pos']['y']);
}

// const pow = (x) => x ** 2;
//
// const sqrt = (x) => Math.sqrt(x)
//
// const substractX = (obj1, obj2) => (axis) => {
//     R.subtract(getCordX(obj1),getCordX(obj2))
// }
//
// const substractY = (obj1, obj2) => {
//     R.subtract(getCordY(obj1),getCordY(obj2))
// }


export {randomFunc,getCordY,getCordX}


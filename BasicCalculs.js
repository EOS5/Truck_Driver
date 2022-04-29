import * as R from 'ramda'


const random = R.curry((min, max, isFloat) => {
    let range = max - min
    let random = Math.random() * range + min
    return isFloat ? random : Math.floor(random)
})

const randomFunc = () => {
    return R.identity(random(1,10,false));
}

const getCordAxisX = R.pipe(
    R.pluck('pos'),
    R.pluck('x')
)
const getCordAxisY = R.pipe(
    R.pluck('pos'),
    R.pluck('y')
)
const pow = x => x ** 2
const subtractOnX = (obj1,obj2) => {
    return R.subtract(getCordAxisX([obj1]), getCordAxisX([obj2]))
}
const subtractOnY = (obj1,obj2) => {
    return R.subtract(getCordAxisY([obj1]), getCordAxisY([obj2]))
}
const sqrt = x => Math.sqrt(x)
const normVector = R.curry((obj1,obj2) => {
    return sqrt(R.add(pow(subtractOnX(obj1,obj2)),pow(subtractOnY(obj1,obj2))))
})

//ToDo: Modify this function to be Ramda ?
const calcDistanceWithOrder = R.curry((points, order) => {
    let sum = 0;
    for (let i = 0;i<order.length - 1; i++){
        let pointAIndex = order[i];
        let pointA = points[pointAIndex];
        let pointBIndex = order[i+1];
        let pointB = points[pointBIndex];
        let d = normVector(pointA,pointB);
        sum += d;
    }
    return sum
})

export {randomFunc,normVector,calcDistanceWithOrder,random}


import * as R from 'ramda'

//ToDo: Modify this function to be Ramda
const shuffler = R.curry(function(random, list) {
        var idx = -1;
        var len = list.length;
        var position;
        var result = [];
        while (++idx < len) {
            position = Math.floor((idx + 1) * random());
            result[idx] = result[position];
            result[position] = list[idx];
        }
        return result;
    })

const swap = R.curry((index1, index2, list) => {
    if (index1 < 0 || index2 < 0 || index1 > list.length - 1 || index2 > list.length - 1) {
        return list // index out of bound
    }
    const value1 = list[index1]
    const value2 = list[index2]
    return R.pipe(
        R.set(R.lensIndex(index1), value2),
        R.set(R.lensIndex(index2), value1)
    )(list)
})
export {shuffler,swap}
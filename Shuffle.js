import * as R from 'ramda'

//ToDo: Modify those functions to be Ramda ?
const shuffler = R.curry(function(random, list) {
        let idx = -1;
        let len = list.length;
        let position;
        let result = [];
        while (++idx < len) {
            position = Math.floor((idx + 1) * random());
            result[idx] = result[position];
            result[position] = list[idx];
        }
        return result;
    })
const shuffle = shuffler(Math.random);

const swap = R.curry((index1, index2, list) => {
    return R.move(index1,index2,list);
})
export {shuffle,swap,shuffler}
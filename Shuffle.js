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


export {shuffler}
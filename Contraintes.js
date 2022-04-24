import * as R from 'ramda'

const GetVector = (x1, y1, x2, y2) => {
    return Math.sqrt(Math.pow(R.subtract( x1, x2),2) + Math.pow(R.subtract( y1, y2),2));
}

const CalculPaye = (quantite, prixUnite) => {
    return R.multiply(quantite,prixUnite);
}

const random = R.curry((min, max, isFloat) => {
    let range = max - min
    let random = Math.random() * range + min
    return isFloat ? random : Math.floor(random)
})

const randomfunc = () => {
    return R.identity(random(1,10,false));
}

const shufflelist = (list,index1,index2) => {
    let temp = list[index1];
    list[index1] = list[index2];
    list[index2] = temp;
}



export {GetVector,CalculPaye,shufflelist,randomfunc}


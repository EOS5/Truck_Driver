import * as R from 'ramda'

const CalculDistance = (x, y) => {
    if (R.subtract(x[0],y[0]) === 0){
        return Math.abs(R.subtract(x[1],y[1]));
    }
    else if (R.subtract(x[1],y[1]) === 0) {
        return Math.abs(R.subtract(x[0],y[0]));
    }
    else {
        return R.divide(Math.abs(R.subtract(x[0],y[0])),Math.abs(R.subtract(x[1],y[1])));
    }
}

const CalculPaye = (quantite,prixUnite) => {
    return R.multiply(quantite,prixUnite);
}

const random = R.curry((min, max, isFloat) => {
    return isFloat ? Math.random() * (max - min) + min : Math.floor(Math.random() * (max - min) + min);
})


export {CalculDistance,CalculPaye,random}


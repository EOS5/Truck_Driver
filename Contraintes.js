import * as R from 'ramda'

const CalculDistance = (x, y) => {
    if (R.subtract(x[1],y[1]) <= 0){
        return Math.abs(R.multiply(R.subtract(x[0],y[0]), -1));
    }
    else if (R.subtract(x[0],y[0]) <= 0) {
        return Math.abs(R.multiply(R.subtract(x[1],y[1]),-1));
    }
    else {
        return Math.abs(R.divide(R.subtract(x[0],y[0]),R.subtract(x[1],y[1])));
    }
}

const CalculPaye = (quantite,prixUnite) => {
    return R.multiply(quantite,prixUnite);
}

const random = R.curry((min, max, isFloat) => {
    let range = max - min;
    let random = Math.random() * range + min;
    return isFloat ? random : Math.floor(random);
})

export {CalculDistance,CalculPaye,random}


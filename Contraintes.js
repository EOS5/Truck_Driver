import * as R from 'ramda'

const CalculDistance = (x, y) => {
    return Math.sqrt(Math.pow(R.subtract(x[0],y[0]),2) + Math.pow(R.subtract(x[1],y[1]),2));
}

const CalculPaye = (quantite, prixUnite) => {
    return R.multiply(quantite,prixUnite);
}

const random = R.curry((min, max, isFloat) => {
    return isFloat ? Math.random() * (max - min) + min : Math.floor(Math.random() * (max - min) + min);
})


export {CalculDistance,CalculPaye,random}


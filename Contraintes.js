import * as R from 'ramda'

const Random = R.curry((min, max, isFloat) => {
    return isFloat ? Math.random() * (max - min) + min : Math.floor(Math.random() * (max - min) + min);
})

const GetVector = (x, y) => {
    return Math.sqrt(Math.pow(R.subtract(x[0],y[0]),2) + Math.pow(R.subtract(x[1],y[1]),2));
}

const CalculPaye = (quantite, prixUnite) => {
    return R.multiply(quantite,prixUnite);
}



const shufflelist = (list,index1,index2) => {
    let temp = list[index1];
    list[index1] = list[index2];
    list[index2] = temp;
}



export {GetVector,CalculPaye,Random,shufflelist}


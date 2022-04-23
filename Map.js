import {GetVector, CalculPaye, random, CalcDistance} from "./Contraintes.js";

import {Distributeur, Marchandise} from "./Ville.js";
import {Camion} from "./Camion.js";


const List = [];
for (var i = 0;i<2;i++){
    List[i] = new Marchandise("Paris", random(1, 10, false), random(1, 10, false), "Chanel", random(1, 500, false), random(1, 5, false));
}
const ListOfTrucks  = [];
for (var j = 0;j<2;j++){
    ListOfTrucks[j] = new Camion(j,random(100,500,false),0,0,0,random(1,10,false),random(1,10,false));
}
const Camion1 = new Camion(1,350,0,0,0,random(1,10,false),random(1,10,false));
const distributeur = new Distributeur("Paris",random(1,10,false),random(1,10,false),"Leclerc",random(1,500,false));


console.log(List)
console.log(ListOfTrucks);
console.log(List[0].getNomEntrepot());
console.log(distributeur.getStock());
Camion1.addDistance(GetVector(distributeur.getCorrd(),List[0].getCorrdEntrepot()));
Camion1.addCargo(300);
Camion1.addPaye(CalculPaye(Camion1.getCargo(),List[0].getPrixUnit()));
console.log(Camion1.getDiscanceParcourue());
console.log(Camion1.getPaye());
console.log(List[1].getCorrdEntrepot());
console.log(distributeur.getCorrd());
console.log(Camion1.getCoordCamion());
console.log(CalcDistance(Camion1.getCoordCamion()))

export {List}
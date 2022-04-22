export class Camion {
    constructor(Id, CapaciteCargo,Cargo, Distance_parcourue, Paye) {
        this.Id = Id;
        this.CapaciteCargo = CapaciteCargo;
        this.Cargo = Cargo;
        this.Distance_parcourue = Distance_parcourue;
        this.Paye = Paye;
    }
    addcargo(quantite){
        this.Cargo = this.Cargo + quantite;
    }
    adddistance(distance){
        this.Distance_parcourue = this.Distance_parcourue + distance;
    }
    addpaye(prix){
        this.Paye = this.Paye + prix;
    }
    getIdCamion(){
        return this.Id;
    }
    getCapaciteCargo(){
        return this.CapaciteCargo
    }
    getCargo(){
        return this.Cargo;
    }
    getDiscanceParcourue(){
        return this.Distance_parcourue;
    }
    getPaye(){
        return this.Paye;
    }
}
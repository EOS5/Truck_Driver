export class Camion {
    constructor(Id, CapaciteCargo,Cargo, Distance_parcourue, Paye, PositionX, PositionY) {
        this.Id = Id;
        this.CapaciteCargo = CapaciteCargo;
        this.Cargo = Cargo;
        this.Distance_parcourue = Distance_parcourue;
        this.Paye = Paye;
        this.PositionX = PositionX;
        this.PositionY = PositionY;
    }
    addCargo(quantite){
        this.Cargo = this.Cargo + quantite;
    }
    addDistance(distance){
        this.Distance_parcourue = this.Distance_parcourue + distance;
    }
    addPaye(prix){
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
    setCoordCamion(Position){
        [this.PositionX, this.PositionY] = Position;
    }
    getCoordCamionX(){
        return this.PositionX;
    }
    getCoordCamionY(){
        return this.PositionY;
    }
    getCoordCamion(){
        return [this.PositionX, this.PositionY];
    }
}
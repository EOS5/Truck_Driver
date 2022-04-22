class Ville {
    constructor(NomVille,positionX,positionY) {
        this.NomVille = NomVille;
        this.positionX = positionX;
        this.positionY = positionY;
    }
    getNomVille(){
        return this.NomVille;
    }
    getcorrd(){
        return [this.positionX, this.positionY];
    }
}
class Entrepot extends Ville {
    constructor(NomVille,positionX,positionY,nom_entrepot) {
        super(NomVille,positionX,positionY);
        this.nom_entrepot = nom_entrepot;
    }
    getNomEntrepot(){
        return this.nom_entrepot;
    }
}
class Marchandise extends Entrepot {
    constructor(NomVille,positionX,positionY,nom_entrepot,Quantite,Prix_Unit) {
        super(NomVille,positionX,positionY,nom_entrepot)
        this.Quantite = Quantite;
        this.Prix_Unit = Prix_Unit;
    }
    addstock(quantiteAjoute){
        this.Quantite = ++ quantiteAjoute;
    }
    reducestock(stock){
        this.Quantite = -- stock;
    }
    getStock(){
        return this.Quantite;
    }
    getPrixUnit(){
        return this.Prix_Unit;
    }
}
class Distributeur extends Ville{
    constructor(NomVille,positionX,positionY,NomDistributeur,Stock) {
        super(NomVille,positionX,positionY);
        this.NomDistributeur = NomDistributeur;
        this.Stock = Stock;
    }
    getNomDistributeur(){
        return this.NomDistributeur
    }
    getstock(){
        return this.Stock;
    }
}

export {Ville,Entrepot,Marchandise,Distributeur}

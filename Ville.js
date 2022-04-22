
class Entrepot {
    constructor(nom_entrepot,positionX,positionY) {
        this.nom_entrepot = nom_entrepot;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    getNomEntrepot(){
        return this.nom_entrepot;
    }
    getCorrdEntrepot(){
        return [this.positionX, this.positionY];
    }
}
class Marchandise extends Entrepot {
    constructor(NomVille,positionX,positionY,nom_entrepot,Quantite,Prix_Unit) {
        super(NomVille,positionX,positionY,nom_entrepot)
        this.Quantite = Quantite;
        this.Prix_Unit = Prix_Unit;
    }
    addStockMerch(quantiteAjoute){
        this.Quantite = ++ quantiteAjoute;
    }
    reduceStock(stock){
        this.Quantite = -- stock;
    }
    getStock(){
        return this.Quantite;
    }
    getPrixUnit(){
        return this.Prix_Unit;
    }
}
class Distributeur {
    constructor(NomDistributeur,positionX,positionY,Stock) {
        this.NomDistributeur = NomDistributeur;
        this.positionX = positionX;
        this.positionY = positionY;
        this.Stock = Stock;
    }
    getNomDistributeur(){
        return this.NomDistributeur
    }

    getCorrd(){
        return [this.positionX, this.positionY];
    }

    addStock(Quantite){
        return this.Stock = this.Stock + Quantite ;
    }
    getStock(){
        return this.Stock;
    }
}

export {Entrepot,Marchandise,Distributeur}

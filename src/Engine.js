"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {

    var tabInter=[];

    this.getTabInter= function(){
        return tabInter;
    };

    this.poser=function(inter, piece){
        inter.addPiece(piece);
        if(inter.getListPiece().length===1){
            inter.setState("ONE_PIECE");
        }
        if(inter.getListPiece().length>1 && length<5){
            inter.setState("STACK");
        }
        if(inter.getListPiece().length>=5){
            inter.setState("FULL_STACK");
        }
    };

    this.poserPile=function(origine, cible){
       for (var i = 0; i<origine.getListPiece().length;i++){
           this.poser(cible, origine.getListPiece()[i]);
       }
    };

    this.debutJeu= function(){
        var tabColor=["BLACK","IVORY","BLUE","RED","GREEN","WHITE"];
        var cptColor=[0,0,0,0,0,0];
        var randomTemp;
        var lettres="ABCDEFGHI";
        for (var i =0; i<lettres.length; i++){
            for (var j = 1; j<=9; j++){
                var coords=new Lyngk.Coordinates(lettres[i],j);
                if(coords.valid()){
                    do{
                     randomTemp = Math.floor(Math.random()*6);
                    }while((cptColor[randomTemp]>=8 && randomTemp!==5) || (randomTemp===5 && cptColor[randomTemp]>= 3));
                    cptColor[randomTemp]++;
                    tabInter.push(new Lyngk.Intersection(coords));
                    var tempPiece = new Lyngk.Piece(tabColor[randomTemp]);
                    this.poser(tabInter[tabInter.length-1], tempPiece);
                }
            }
        }
    };
    this.deplacementPiece= function(origine, cible){
        cible.addPiece(origine.getListPiece()[origine.getListPiece().length-1]);
        origine.supprTopPiece();
    };

    this.deplacementPile= function(origine,cible){
        if(cible.getListPiece().length !==0 && this.mouvementValide(origine.getCoord(), cible.getCoord())){
            this.poserPile(origine,cible);
            origine.cleanList();
        }
    };

    this.mouvementValide= function(origine,cible){
        if (origine.getLigne() === cible.getLigne() ^ origine.getColonne().charCodeAt(0) === cible.getColonne().charCodeAt(0)
        ^ origine.getLigne()-cible.getLigne() === origine.getColonne().charCodeAt(0) - cible.getColonne().charCodeAt(0))
            return true;
    }
};

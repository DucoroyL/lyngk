"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {

    var tabInter=[];

    this.getTabInter= function(){
        return tabInter;
    }

    this.poser=function(inter, piece){
        inter.setListPiece(piece);
        if(inter.getListPiece().length===1){
            inter.setState("ONE_PIECE");
        }
        if(inter.getListPiece().length>1 && length<5){
            inter.setState("STACK");
        }
        if(inter.getListPiece().length>=5){
            inter.setState("FULL_STACK");
        }
    }

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
    }
};

"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {
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
        var tabColor=["BLACK","IVORY","BLUE","RED","GREEN","WHITE","WHITE","WHITE"];
        var tabInter=[];
        var tabPiece=[];

        var lettres="ABCDEFGHI";
        for (var i =0; i<lettres.length; i++){
            for (var j = 1; j<=9; j++){
                var coords=new Lyngk.Coordinates(lettres[i],j);
                if(coords.valid()){
                    tabInter.push(new Lyngk.Intersection(coords, 'WHITE'));

                    for(var k=0; k<tabColor.length; k++){
                        tabPiece.push(new Lyngk.Piece(coords, tabColor[k]));
                        this.poser(tabInter[tabInter.length-1],tabPiece[tabPiece.length-1]);
                    }
                }

            }
        }
        return tabInter;
    }
};

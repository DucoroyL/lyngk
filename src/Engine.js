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
    }
};

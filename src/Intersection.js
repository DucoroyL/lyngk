"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection = function (c) {
    var coords = c;
    var etat = Lyngk.State.VACANT;
    var listPiece=[];

    this.getState=function(){
        return etat;
    };

    this.setState=function(etat_p){
        etat = Lyngk.State[etat_p];
    };

    this.getListPiece=function (){
        return listPiece;
    };

    this.setListPiece=function(newPiece){
        listPiece.push(newPiece);
    };

    this.getColor=function(){
        return listPiece[listPiece.length-1].getCouleur();
    };


};

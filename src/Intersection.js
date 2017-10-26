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

    this.addPiece=function(newPiece){
        listPiece.push(newPiece);
    };

    this.getColor=function(){
        return listPiece[listPiece.length-1].getCouleur();
    };

    this.supprTopPiece=function(){
        listPiece.pop();
    };

    this.cleanList=function(){
        listPiece=[];
        this.setState("VACANT");
    };

    this.setListPiece=function(listCible){
        listPiece=listCible;
    };

    this.getCoord=function(){
        return coords;
    }
};

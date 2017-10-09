"use strict";

Lyngk.Piece = function (c, newColor) {
    var coor = c;
    var couleur=Lyngk.Color[newColor];

    this.getCouleur = function(){
        return couleur;
    }

    this.setCouleur = function(newCouleur){
        couleur=Lyngk.Color[newCouleur];
    }
};

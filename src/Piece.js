"use strict";

Lyngk.Piece = function (newColor) {
    var couleur=Lyngk.Color[newColor];

    this.getCouleur = function(){
        return couleur;
    }

    this.setCouleur = function(newCouleur){
        couleur=Lyngk.Color[newCouleur];
    }
};

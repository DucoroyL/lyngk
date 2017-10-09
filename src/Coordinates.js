"use strict";

Lyngk.Coordinates = function (c, l) {
    var colonne=c;
    var ligne=l;

    this.valid=function() {
        var dansTab = {
            "A": [3, 3],
            "B": [2, 5],
            "C": [1, 7],
            "D": [2, 7],
            "E": [2, 8],
            "F": [3, 8],
            "G": [3, 9],
            "H": [5, 8],
            "I": [7, 7]
        }
        if(l>=dansTab[c][0] && l<=dansTab[c][1]){
            return true;
        }
    };

    this.toString=function() {
        if(this.valid() === true)
            return c+l;
        else{
            return 'invalid';
        }

    }

    this.getLigne=function() {
        return ligne;
    }
    this.getColonne=function() {
        return colonne;
    }

    this.clonage=function() {
        return new Lyngk.Coordinates(c,l);
    }

    this.hashage=function() {
        return parseInt(c.charCodeAt(0)-65+''+l);
    }
};


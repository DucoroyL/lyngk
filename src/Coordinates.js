"use strict";

Lyngk.Coordinates = function (c, l) {
    var colonne=c;
    var ligne=l;

    this.valid=function() {
        if (colonne === 'A' && ligne === 1) {
            return false;
        }
    }
};

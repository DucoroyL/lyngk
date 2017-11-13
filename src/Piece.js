"use strict";

Lyngk.Piece = function (newColor) {
    var color = Lyngk.Color[newColor];

    this.getColor = function () {
        return color;
    };

    this.setColor = function (newCouleur) {
        color = Lyngk.Color[newCouleur];
    };
};

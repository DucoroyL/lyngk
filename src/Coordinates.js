"use strict";

Lyngk.Coordinates = function (columnCoord, lineCoord) {
    var column = columnCoord;
    var line = lineCoord;

    this.isValid = function () {
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
        };
        if (line >= dansTab[column][0] && line <= dansTab[column][1]) {
            return true;
        }
    };

    this.toString = function () {
        if (this.isValid() === true) {
            return column + line;
        } else {
            return "invalid";
        }
    };
    this.getLine = function () {
        return line;
    };
    this.getColumn = function () {
        return column;
    };

    this.clone = function () {
        return new Lyngk.Coordinates(column, line);
    };

    this.hash = function () {
        return parseInt(column.charCodeAt(0) - 65 + '' + line);
    };
};


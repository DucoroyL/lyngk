"use strict";

// enums definition
Lyngk.Color = {BLACK: 0, IVORY: 1, BLUE: 2, RED: 3, GREEN: 4, WHITE: 5};

Lyngk.Engine = function () {

    var arrayIntersection = [];

    this.getArrayIntersection = function () {
        return arrayIntersection;
    };

    this.put = function (intersection, piece) {
        var lengthListPiece = intersection.getListPiece().length;
        intersection.addPiece(piece);
        if (lengthListPiece === 1) {
            intersection.setState("ONE_PIECE");
        } else if (lengthListPiece > 1 && lengthListPiece < 5) {
            intersection.setState("STACK");
        } else {
            intersection.setState("FULL_STACK");
        }
    };

    this.putStack = function (origin, target) {
        var i;
        for (i = 0; i < origin.getListPiece().length; i += 1) {
            this.put(target, origin.getListPiece()[i]);
        }
    };

    this.randomNumberToChooseColor = function (arrayCountColor) {
        var random;
        var verifColorsPieces = arrayCountColor[random] >= 8 && random !== 5;
        var verifWhitePieces = random === 5 && arrayCountColor[random] >= 3;
        do {
            random = Math.floor(Math.random() * 6);
        } while (verifColorsPieces || verifWhitePieces);
        return random;
    };

    this.countColor = function (coordinates) {
        var random, tempPiece;
        var arrayColor = ["BLACK", "IVORY", "BLUE", "RED", "GREEN", "WHITE"];
        var countColor = [0, 0, 0, 0, 0, 0];
        var lastElement = arrayIntersection.length - 1;
        if (coordinates.isValid()) {
            random = this.randomNumberToChooseColor(countColor);
            countColor[random] += 1;
            arrayIntersection.push(new Lyngk.Intersection(coordinates));
            tempPiece = new Lyngk.Piece(arrayColor[random]);
            this.put(arrayIntersection[lastElement], tempPiece);
        }
    }
    this.startGame = function () {

        var lettres = "ABCDEFGHI";
        var letters, lines, coordinates;
        for (letters = 0; letters < lettres.length; letters += 1) {
            for (lines = 1; lines <= 9; lines += 1) {
                coordinates = new Lyngk.Coordinates(lettres[letters], lines);
                this.countColor(coordinates);
            }
        }
    };
    this.movePiece = function (origin, target) {
        var originPiece = origin.getListPiece();
        target.addPiece(originPiece[originPiece.length - 1]);
        origin.deleteTopPiece();
    };
    this.moveStack = function (origin, target) {
        var originCoord = origin.getCoordinates();
        var targetCoord = target.getCoordinates();
        if (target.getState() !== 0) {
            if (this.validMove(originCoord, targetCoord)) {
                this.putStack(origin, target);
                origin.cleanList();
            }
        }
    };

    this.validMove = function (origin, target) {
        var originLine = origin.getLine();
        var targetLine = target.getLine();
        var originColumn = origin.getColumn().charCodeAt(0);
        var targetColumn = target.getColumn().charCodeAt(0);
        var compareLine = originLine === targetLine;
        var compareColumn = originColumn === targetColumn;

        if (compareLine ^ compareColumn ^ compareLine === compareColumn) {
            return true;
        }
    };
};

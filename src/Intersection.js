"use strict";

Lyngk.State = {VACANT: 0, ONE_PIECE: 1, STACK: 2, FULL_STACK: 3};

Lyngk.Intersection = function (c) {
    var coordinates = c;
    var state = Lyngk.State.VACANT;
    var listPiece = [];

    this.getState = function () {
        return state;
    };

    this.setState = function (stateName) {
        state = Lyngk.State[stateName];
    };

    this.getListPiece = function () {
        return listPiece;
    };

    this.addPiece = function (newPiece) {
        listPiece.push(newPiece);
    };

    this.getColor = function () {
        return listPiece[listPiece.length - 1].getColor();
    };

    this.deleteTopPiece = function () {
        listPiece.pop();
    };

    this.cleanList = function () {
        listPiece = [];
        this.setState("VACANT");
    };

    this.setListPiece = function (targetList) {
        listPiece = targetList;
    };

    this.getCoordinates = function () {
        return coordinates;
    };
};

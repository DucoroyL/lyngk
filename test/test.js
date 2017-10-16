'use strict';

// Tests deux premières histoires
var LyngkTestCase = TestCase("LyngkTestCase");
LyngkTestCase.prototype.test1=function(){
    var lettres="ABCDEFGHI";
    var compteur=0;
    for (var i =0; i<lettres.length; i++){
        for (var j = 1; j<=9; j++){
            var C=new Lyngk.Coordinates(lettres[i],j);
            if(C.valid()){
                compteur++;
            }
        }
    }
    assertTrue(compteur===43);
};

// Test troisième histoire
LyngkTestCase.prototype.testToString=function(){
    var c='B';
    var l=4;
    var C = new Lyngk.Coordinates(c,l);
    assertTrue(C.toString() ==  C );

};

// Test quatrième histoire
LyngkTestCase.prototype.testInvalid=function(){
    var C = new Lyngk.Coordinates('A',1);
    assertTrue(C.toString() === 'invalid');
};

// Test cinquième histoire
LyngkTestCase.prototype.testClone=function(){
    var C = new Lyngk.Coordinates('B',4);
    var C2 = C.clonage();

    assertTrue(C.getLigne() === C2.getLigne() && C.getColonne() === C2.getColonne())
};

// Test sixème histoire
LyngkTestCase.prototype.testHash=function(){
    var lettres="ABCDEFGHI";
    var incorrect = 0;

    // Boucle qui prend la première coordonnée
    for (var i =0; i<lettres.length; i++){
        for (var j = 1; j<=9; j++){

            var C=new Lyngk.Coordinates(lettres[i],j);

            if(C.valid()){
                //Boucle qui prend les coordonnées à comparer si la première coordonnée est valide
                for (var k =0; k<lettres.length; k++){
                    for (var l = 1; l<=9; l++){
                        var C1= new Lyngk.Coordinates(lettres[k],l);

                        if(C.hashage() === C1.hashage() && C.getColonne() !== C1.getColonne() && C.getLigne() !== C1.getLigne()){
                            incorrect++;
                        }
                    }
                }
            }
        }
    }
    assertTrue(incorrect===0);
};

// Test septième histoire
LyngkTestCase.prototype.testIntersec=function() {
    var lettres="ABCDEFGHI";
    var compteur=0;
    for (var i =0; i<lettres.length; i++){
        for (var j = 1; j<=9; j++){
            var C=new Lyngk.Coordinates(lettres[i],j);
            if(C.valid()){
                var intersec = new Lyngk.Intersection(C);
                // Intersection doit avoir l'état VACANT au départ
                if(intersec.getState() !== 0){
                    compteur++;
                }
            }
        }
    }
    assertTrue(compteur ===0);
};

// Test huitieme histoire
LyngkTestCase.prototype.testOnePiece=function(){
    var newEngine = new Lyngk.Engine();
    var coords=new Lyngk.Coordinates('A',3);
    var inter=new Lyngk.Intersection(coords);
    var piece= new Lyngk.Piece('BLUE');
    newEngine.poser(inter, piece);
    assertTrue(inter.getState() === 1);

};

// Test neuvième histoire
LyngkTestCase.prototype.testOnePiece=function(){
    var newEngine = new Lyngk.Engine();
    var coords=new Lyngk.Coordinates('A',3);
    var inter=new Lyngk.Intersection(coords);
    var pieceB=new Lyngk.Piece('BLUE');
    var pieceR= new Lyngk.Piece('RED');
    newEngine.poser(inter, pieceB);
    newEngine.poser(inter, pieceR);
    assertTrue(inter.getState() === 2);

};

// Test dixième histoire
LyngkTestCase.prototype.testFivePiece=function(){
    var newEngine = new Lyngk.Engine();
    var coords=new Lyngk.Coordinates('A',3);
    var inter=new Lyngk.Intersection(coords);
    var pieceB=new Lyngk.Piece('BLUE');
    var pieceR= new Lyngk.Piece('RED');
    newEngine.poser(inter, pieceB);
    newEngine.poser(inter, pieceB);
    newEngine.poser(inter, pieceB);
    newEngine.poser(inter, pieceB);
    newEngine.poser(inter, pieceR);
    assertTrue(inter.getState() === 3);

};

// Test onzième histoire
LyngkTestCase.prototype.testDebutJeu=function(){
    var lettres="ABCDEFGHI";
    var compteur=0;
    var newEngine = new Lyngk.Engine();
    var tabInter=[];
    var tabPiece=[];

    for (var i =0; i<lettres.length; i++){
        for (var j = 1; j<=9; j++){
            var coords=new Lyngk.Coordinates(lettres[i],j);
            if(coords.valid()){
                tabInter.push(new Lyngk.Intersection(coords));
                tabPiece.push(new Lyngk.Piece('BLUE'));
                newEngine.poser(tabInter[tabInter.length-1],tabPiece[tabPiece.length-1]);
            }
        }
    }
    for (var i =0; i<tabInter.length; i++){
       if( tabInter[i].getState() !== 1){
           compteur++;
        }
    }
    assertTrue(compteur===0);
};

// Test douzième histoire
LyngkTestCase.prototype.testVraiDebutJeu=function(){
    var newEngine = new Lyngk.Engine();
    newEngine.debutJeu();
    var listInter=newEngine.getTabInter();
    var compteurBlancs=0;
    var compteurNoir=0;
    var compteurIvoire=0;
    var compteurBleu=0;
    var compteurRouge=0;
    var compteurVert=0;


    listInter.forEach(function(elem){
       elem.getListPiece().forEach(function(piece){
           if(piece.getCouleur() === 5){
                compteurBlancs++;
           }
           if(piece.getCouleur() === 0){
               compteurNoir++;
           }
           if(piece.getCouleur() === 1){
               compteurIvoire++;
           }
           if(piece.getCouleur() === 2){
               compteurBleu++;
           }
           if(piece.getCouleur() === 3){
               compteurRouge++;
           }
           if(piece.getCouleur() === 4){
               compteurVert++;
           }
        });
    });
    assertTrue(compteurBlancs ===3 && compteurBleu ===8 && compteurIvoire ===8 && compteurNoir &&
        compteurRouge ===8 && compteurVert===8);
};

// Treizième test
LyngkTestCase.prototype.testHauteur=function() {
    var newEngine = new Lyngk.Engine();
    newEngine.debutJeu();
    var listInter = newEngine.getTabInter();
    var compteur=0;
    listInter.forEach(function(elem){
            var hauteur = elem.getListPiece().length;
            if(hauteur!==1)
                compteur++
        });
    assertTrue(compteur === 0);
}

// Quatorzième test
LyngkTestCase.prototype.testCouleurInter=function() {
    var newEngine = new Lyngk.Engine();
    newEngine.debutJeu();
    var listInter = newEngine.getTabInter();
    var random =Math.floor(Math.random()*43);
    var listPiece = listInter[random].getListPiece();

    assertTrue(listInter[random].getColor() === listPiece[listPiece.length-1].getCouleur());
}
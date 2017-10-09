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
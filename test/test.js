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
    console.log(compteur);
    assertTrue(compteur===43);
};

// Test troisième histoire
LyngkTestCase.prototype.testToString=function(){
    var c = 'A';
    var l = 2;
    var finalS = c+l;
    var C = new Lyngk.Coordinates(c,l);
    console.log(finalS);
    assertTrue(C.toString() === finalS );

};

// Test quatrième histoire
LyngkTestCase.prototype.testToString=function(){
    var c = 'A';
    var l=1;
    var finalS = c+l;
    var C = new Lyngk.Coordinates(c,l);
    assertTrue(C.toString() === 'invalid');
};
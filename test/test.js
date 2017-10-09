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
    var C = new Lyngk.Coordinates('B',4);
    assertTrue(C.toString() ==  C );

};

// Test quatrième histoire
LyngkTestCase.prototype.testInvalid=function(){
    var C = new Lyngk.Coordinates('A',1);
    assertTrue(C.toString() === 'invalid');
};


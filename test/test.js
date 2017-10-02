'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");
LyngkTestCase.prototype.test1=function(){
    var lettres="ABCDEFGHI";
    var compteur=0;
    for (var i =0; i<lettres.length; i++){
        for (var j = 1; j<9; j++){
            var C=new Lyngk.Coordinates(i,j);
            if(assertTrue(C.valid(lettres[i],j))){
                compteur++;
            }
        }
    }
    assertTrue(compteur===43);
};
'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");
LyngkTestCase.prototype.test1=function(){
    var C=new Lyngk.Coordinates("A",1);
    var lettres="ABCDEFGHI";
    var compteur=0;
    for (var i =1; i<9; i++){
        for (var j = 1; j<9; j++){
            if(assertTrue(C.valid(lettres[i],j))){
                compteur++;
            }
        }
    }
};
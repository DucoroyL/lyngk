'use strict';

var LyngkTestCase = TestCase("LyngkTestCase");
LyngkTestCase.prototype.test1=function(){
    var C=new Lyngk.Coordinates("A",1);
    assertFalse(C.valid());
};
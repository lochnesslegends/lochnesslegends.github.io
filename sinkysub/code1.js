gdjs.Level1Code = {};
gdjs.Level1Code.forEachCount0_2 = 0;

gdjs.Level1Code.forEachCount1_2 = 0;

gdjs.Level1Code.forEachCount2_2 = 0;

gdjs.Level1Code.forEachCount3_2 = 0;

gdjs.Level1Code.forEachIndex2 = 0;

gdjs.Level1Code.forEachObjects2 = [];

gdjs.Level1Code.forEachTemporary2 = null;

gdjs.Level1Code.forEachTotalCount2 = 0;

gdjs.Level1Code.GDSubmarineObjects1= [];
gdjs.Level1Code.GDSubmarineObjects2= [];
gdjs.Level1Code.GDSubmarineObjects3= [];
gdjs.Level1Code.GDSubmarineObjects4= [];
gdjs.Level1Code.GDShape1Objects1= [];
gdjs.Level1Code.GDShape1Objects2= [];
gdjs.Level1Code.GDShape1Objects3= [];
gdjs.Level1Code.GDShape1Objects4= [];
gdjs.Level1Code.GDShape2Objects1= [];
gdjs.Level1Code.GDShape2Objects2= [];
gdjs.Level1Code.GDShape2Objects3= [];
gdjs.Level1Code.GDShape2Objects4= [];
gdjs.Level1Code.GDShape3Objects1= [];
gdjs.Level1Code.GDShape3Objects2= [];
gdjs.Level1Code.GDShape3Objects3= [];
gdjs.Level1Code.GDShape3Objects4= [];
gdjs.Level1Code.GDShape4Objects1= [];
gdjs.Level1Code.GDShape4Objects2= [];
gdjs.Level1Code.GDShape4Objects3= [];
gdjs.Level1Code.GDShape4Objects4= [];
gdjs.Level1Code.GDScoreObjects1= [];
gdjs.Level1Code.GDScoreObjects2= [];
gdjs.Level1Code.GDScoreObjects3= [];
gdjs.Level1Code.GDScoreObjects4= [];
gdjs.Level1Code.GDLifeObjects1= [];
gdjs.Level1Code.GDLifeObjects2= [];
gdjs.Level1Code.GDLifeObjects3= [];
gdjs.Level1Code.GDLifeObjects4= [];
gdjs.Level1Code.GDGameOverObjects1= [];
gdjs.Level1Code.GDGameOverObjects2= [];
gdjs.Level1Code.GDGameOverObjects3= [];
gdjs.Level1Code.GDGameOverObjects4= [];
gdjs.Level1Code.GDButtonTryAgainObjects1= [];
gdjs.Level1Code.GDButtonTryAgainObjects2= [];
gdjs.Level1Code.GDButtonTryAgainObjects3= [];
gdjs.Level1Code.GDButtonTryAgainObjects4= [];
gdjs.Level1Code.GDButtonMainMenuObjects1= [];
gdjs.Level1Code.GDButtonMainMenuObjects2= [];
gdjs.Level1Code.GDButtonMainMenuObjects3= [];
gdjs.Level1Code.GDButtonMainMenuObjects4= [];
gdjs.Level1Code.GDShape4ExplosionObjects1= [];
gdjs.Level1Code.GDShape4ExplosionObjects2= [];
gdjs.Level1Code.GDShape4ExplosionObjects3= [];
gdjs.Level1Code.GDShape4ExplosionObjects4= [];
gdjs.Level1Code.GDShape3ExplosionObjects1= [];
gdjs.Level1Code.GDShape3ExplosionObjects2= [];
gdjs.Level1Code.GDShape3ExplosionObjects3= [];
gdjs.Level1Code.GDShape3ExplosionObjects4= [];
gdjs.Level1Code.GDShape2ExplosionObjects1= [];
gdjs.Level1Code.GDShape2ExplosionObjects2= [];
gdjs.Level1Code.GDShape2ExplosionObjects3= [];
gdjs.Level1Code.GDShape2ExplosionObjects4= [];
gdjs.Level1Code.GDShape1ExplosionObjects1= [];
gdjs.Level1Code.GDShape1ExplosionObjects2= [];
gdjs.Level1Code.GDShape1ExplosionObjects3= [];
gdjs.Level1Code.GDShape1ExplosionObjects4= [];
gdjs.Level1Code.GDMineObjects1= [];
gdjs.Level1Code.GDMineObjects2= [];
gdjs.Level1Code.GDMineObjects3= [];
gdjs.Level1Code.GDMineObjects4= [];
gdjs.Level1Code.GDFloorMineObjects1= [];
gdjs.Level1Code.GDFloorMineObjects2= [];
gdjs.Level1Code.GDFloorMineObjects3= [];
gdjs.Level1Code.GDFloorMineObjects4= [];
gdjs.Level1Code.GDtestbgObjects1= [];
gdjs.Level1Code.GDtestbgObjects2= [];
gdjs.Level1Code.GDtestbgObjects3= [];
gdjs.Level1Code.GDtestbgObjects4= [];
gdjs.Level1Code.GDNewObjectObjects1= [];
gdjs.Level1Code.GDNewObjectObjects2= [];
gdjs.Level1Code.GDNewObjectObjects3= [];
gdjs.Level1Code.GDNewObjectObjects4= [];
gdjs.Level1Code.GDtilebgObjects1= [];
gdjs.Level1Code.GDtilebgObjects2= [];
gdjs.Level1Code.GDtilebgObjects3= [];
gdjs.Level1Code.GDtilebgObjects4= [];
gdjs.Level1Code.GDSandObjects1= [];
gdjs.Level1Code.GDSandObjects2= [];
gdjs.Level1Code.GDSandObjects3= [];
gdjs.Level1Code.GDSandObjects4= [];
gdjs.Level1Code.GDWaterObjects1= [];
gdjs.Level1Code.GDWaterObjects2= [];
gdjs.Level1Code.GDWaterObjects3= [];
gdjs.Level1Code.GDWaterObjects4= [];
gdjs.Level1Code.GDSandyBottomObjects1= [];
gdjs.Level1Code.GDSandyBottomObjects2= [];
gdjs.Level1Code.GDSandyBottomObjects3= [];
gdjs.Level1Code.GDSandyBottomObjects4= [];
gdjs.Level1Code.GDCoinObjects1= [];
gdjs.Level1Code.GDCoinObjects2= [];
gdjs.Level1Code.GDCoinObjects3= [];
gdjs.Level1Code.GDCoinObjects4= [];
gdjs.Level1Code.GDChestObjects1= [];
gdjs.Level1Code.GDChestObjects2= [];
gdjs.Level1Code.GDChestObjects3= [];
gdjs.Level1Code.GDChestObjects4= [];

gdjs.Level1Code.conditionTrue_0 = {val:false};
gdjs.Level1Code.condition0IsTrue_0 = {val:false};
gdjs.Level1Code.condition1IsTrue_0 = {val:false};


gdjs.Level1Code.eventsList0 = function(runtimeScene) {

};gdjs.Level1Code.eventsList1 = function(runtimeScene) {

};gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Submarine"), gdjs.Level1Code.GDSubmarineObjects2);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDSubmarineObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSubmarineObjects2[i].getX() > gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) + 5 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDSubmarineObjects2[k] = gdjs.Level1Code.GDSubmarineObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDSubmarineObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDSubmarineObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects2[i].addForce(-(450), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Submarine"), gdjs.Level1Code.GDSubmarineObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDSubmarineObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSubmarineObjects1[i].getX() < gdjs.evtTools.input.getMouseX(runtimeScene, "", 0) - 5 ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDSubmarineObjects1[k] = gdjs.Level1Code.GDSubmarineObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDSubmarineObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDSubmarineObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects1[i].addForce(450, 0, 0);
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects1ObjectsGDgdjs_46Level1Code_46GDShape2Objects1ObjectsGDgdjs_46Level1Code_46GDShape3Objects1ObjectsGDgdjs_46Level1Code_46GDShape4Objects1Objects = Hashtable.newFrom({"Shape1": gdjs.Level1Code.GDShape1Objects1, "Shape2": gdjs.Level1Code.GDShape2Objects1, "Shape3": gdjs.Level1Code.GDShape3Objects1, "Shape4": gdjs.Level1Code.GDShape4Objects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects2ObjectsGDgdjs_46Level1Code_46GDShape2Objects2ObjectsGDgdjs_46Level1Code_46GDShape3Objects2ObjectsGDgdjs_46Level1Code_46GDShape4Objects2Objects = Hashtable.newFrom({"Shape1": gdjs.Level1Code.GDShape1Objects2, "Shape2": gdjs.Level1Code.GDShape2Objects2, "Shape3": gdjs.Level1Code.GDShape3Objects2, "Shape4": gdjs.Level1Code.GDShape4Objects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSubmarineObjects2Objects = Hashtable.newFrom({"Submarine": gdjs.Level1Code.GDSubmarineObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects3Objects = Hashtable.newFrom({"Shape1": gdjs.Level1Code.GDShape1Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1ExplosionObjects3Objects = Hashtable.newFrom({"Shape1Explosion": gdjs.Level1Code.GDShape1ExplosionObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape2Objects3Objects = Hashtable.newFrom({"Shape2": gdjs.Level1Code.GDShape2Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape2ExplosionObjects3Objects = Hashtable.newFrom({"Shape2Explosion": gdjs.Level1Code.GDShape2ExplosionObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape3Objects3Objects = Hashtable.newFrom({"Shape3": gdjs.Level1Code.GDShape3Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape3ExplosionObjects3Objects = Hashtable.newFrom({"Shape3Explosion": gdjs.Level1Code.GDShape3ExplosionObjects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape4Objects3Objects = Hashtable.newFrom({"Shape4": gdjs.Level1Code.GDShape4Objects3});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape4ExplosionObjects3Objects = Hashtable.newFrom({"Shape4Explosion": gdjs.Level1Code.GDShape4ExplosionObjects3});gdjs.Level1Code.eventsList3 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Level1Code.GDShape1Objects2, gdjs.Level1Code.GDShape1Objects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShape1Objects3 */
gdjs.Level1Code.GDShape1ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1ExplosionObjects3Objects, (( gdjs.Level1Code.GDShape1Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape1Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDShape1Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape1Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape1ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDShape1Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape1Objects3[0].getWidth()));
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDShape2Objects2, gdjs.Level1Code.GDShape2Objects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape2Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShape2Objects3 */
gdjs.Level1Code.GDShape2ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape2ExplosionObjects3Objects, (( gdjs.Level1Code.GDShape2Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape2Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDShape2Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape2Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape2ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDShape2Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape2Objects3[0].getWidth()));
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDShape3Objects2, gdjs.Level1Code.GDShape3Objects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape3Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShape3Objects3 */
gdjs.Level1Code.GDShape3ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape3ExplosionObjects3Objects, (( gdjs.Level1Code.GDShape3Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape3Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDShape3Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape3Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape3ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDShape3Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape3Objects3[0].getWidth()));
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDShape4Objects2, gdjs.Level1Code.GDShape4Objects3);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.pickedObjectsCount(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape4Objects3Objects) != 0;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDShape4Objects3 */
gdjs.Level1Code.GDShape4ExplosionObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape4ExplosionObjects3Objects, (( gdjs.Level1Code.GDShape4Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape4Objects3[0].getPointX("Center")), (( gdjs.Level1Code.GDShape4Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape4Objects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape4ExplosionObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4ExplosionObjects3[i].setParticleSize1((( gdjs.Level1Code.GDShape4Objects3.length === 0 ) ? 0 :gdjs.Level1Code.GDShape4Objects3[0].getWidth()));
}
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level1Code.GDScoreObjects3);
gdjs.copyArray(gdjs.Level1Code.GDShape1Objects2, gdjs.Level1Code.GDShape1Objects3);

gdjs.copyArray(gdjs.Level1Code.GDShape2Objects2, gdjs.Level1Code.GDShape2Objects3);

gdjs.copyArray(gdjs.Level1Code.GDShape3Objects2, gdjs.Level1Code.GDShape3Objects3);

gdjs.copyArray(gdjs.Level1Code.GDShape4Objects2, gdjs.Level1Code.GDShape4Objects3);

{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects3[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects3.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "itempositive.wav", false, 35, 1);
}{runtimeScene.getVariables().get("Score").add(1);
}{for(var i = 0, len = gdjs.Level1Code.GDScoreObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDScoreObjects3[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCoinObjects2Objects = Hashtable.newFrom({"Coin": gdjs.Level1Code.GDCoinObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.Level1Code.GDCoinObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSubmarineObjects1Objects = Hashtable.newFrom({"Submarine": gdjs.Level1Code.GDSubmarineObjects1});gdjs.Level1Code.eventsList4 = function(runtimeScene) {

{


{
/* Reuse gdjs.Level1Code.GDCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level1Code.GDScoreObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coinmario.wav", false, 100, 1);
}{runtimeScene.getVariables().get("Score").add(20);
}{for(var i = 0, len = gdjs.Level1Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


};gdjs.Level1Code.eventsList5 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 20, "CoinTimer");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDCoinObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCoinObjects2Objects, 1200, 96, "");
}{for(var i = 0, len = gdjs.Level1Code.GDCoinObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDCoinObjects2[i].setScale(0.1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CoinTimer");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Level1Code.GDCoinObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDCoinObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDCoinObjects2[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 0.75, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Level1Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Submarine"), gdjs.Level1Code.GDSubmarineObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDCoinObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSubmarineObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDChestObjects2Objects = Hashtable.newFrom({"Chest": gdjs.Level1Code.GDChestObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDChestObjects1Objects = Hashtable.newFrom({"Chest": gdjs.Level1Code.GDChestObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSubmarineObjects1Objects = Hashtable.newFrom({"Submarine": gdjs.Level1Code.GDSubmarineObjects1});gdjs.Level1Code.eventsList6 = function(runtimeScene) {

{


{
/* Reuse gdjs.Level1Code.GDChestObjects1 */
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.Level1Code.GDScoreObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDChestObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDChestObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "chestopening.wav", false, 100, 1);
}{runtimeScene.getVariables().get("Score").add(10);
}{for(var i = 0, len = gdjs.Level1Code.GDScoreObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDScoreObjects1[i].setString("Score: " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score"))));
}
}}

}


};gdjs.Level1Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 17, "ChestTimer");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDChestObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDChestObjects2Objects, 650, 830, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ChestTimer");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Chest"), gdjs.Level1Code.GDChestObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDChestObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDChestObjects2[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 0.5, 0);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Chest"), gdjs.Level1Code.GDChestObjects1);
gdjs.copyArray(runtimeScene.getObjects("Submarine"), gdjs.Level1Code.GDSubmarineObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDChestObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSubmarineObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFloorMineObjects2Objects = Hashtable.newFrom({"FloorMine": gdjs.Level1Code.GDFloorMineObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSubmarineObjects1Objects = Hashtable.newFrom({"Submarine": gdjs.Level1Code.GDSubmarineObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFloorMineObjects1Objects = Hashtable.newFrom({"FloorMine": gdjs.Level1Code.GDFloorMineObjects1});gdjs.Level1Code.eventsList8 = function(runtimeScene) {

{


{
gdjs.copyArray(gdjs.Level1Code.GDFloorMineObjects1, gdjs.Level1Code.GDFloorMineObjects2);

gdjs.copyArray(gdjs.Level1Code.GDSubmarineObjects1, gdjs.Level1Code.GDSubmarineObjects2);

{for(var i = 0, len = gdjs.Level1Code.GDFloorMineObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDFloorMineObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "bomb.wav", false, 100, 1);
}}

}


{


{
}

}


};gdjs.Level1Code.eventsList9 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 15, "FloorMineTimer");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDFloorMineObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFloorMineObjects2Objects, 650, 650, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "FloorMineTimer");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("FloorMine"), gdjs.Level1Code.GDFloorMineObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDFloorMineObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDFloorMineObjects2[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) * 0.5, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FloorMine"), gdjs.Level1Code.GDFloorMineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Submarine"), gdjs.Level1Code.GDSubmarineObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSubmarineObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDFloorMineObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMineObjects2Objects = Hashtable.newFrom({"Mine": gdjs.Level1Code.GDMineObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSubmarineObjects2Objects = Hashtable.newFrom({"Submarine": gdjs.Level1Code.GDSubmarineObjects2});gdjs.Level1Code.eventsList10 = function(runtimeScene) {

};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMineObjects1Objects = Hashtable.newFrom({"Mine": gdjs.Level1Code.GDMineObjects1});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonTryAgainObjects2Objects = Hashtable.newFrom({"ButtonTryAgain": gdjs.Level1Code.GDButtonTryAgainObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonTryAgainObjects2Objects = Hashtable.newFrom({"ButtonTryAgain": gdjs.Level1Code.GDButtonTryAgainObjects2});gdjs.Level1Code.eventsList11 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level1Code.GDButtonTryAgainObjects2, gdjs.Level1Code.GDButtonTryAgainObjects3);

{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects3[i].setAnimationName("TryAgainPressed");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonMainMenuObjects2Objects = Hashtable.newFrom({"ButtonMainMenu": gdjs.Level1Code.GDButtonMainMenuObjects2});gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonMainMenuObjects1Objects = Hashtable.newFrom({"ButtonMainMenu": gdjs.Level1Code.GDButtonMainMenuObjects1});gdjs.Level1Code.eventsList12 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Level1Code.GDButtonMainMenuObjects1, gdjs.Level1Code.GDButtonMainMenuObjects2);

{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects2[i].setAnimationName("MainMenuPressed");
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MainMenu", false);
}}

}


};gdjs.Level1Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level1Code.GDButtonTryAgainObjects1, gdjs.Level1Code.GDButtonTryAgainObjects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonTryAgainObjects2Objects, runtimeScene, true, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDButtonTryAgainObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects2[i].setAnimationName("TryAgainNormal");
}
}}

}


{

gdjs.copyArray(gdjs.Level1Code.GDButtonTryAgainObjects1, gdjs.Level1Code.GDButtonTryAgainObjects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonTryAgainObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDButtonTryAgainObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects2[i].setAnimationName("TryAgainHover");
}
}
{ //Subevents
gdjs.Level1Code.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.Level1Code.GDButtonMainMenuObjects1, gdjs.Level1Code.GDButtonMainMenuObjects2);


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonMainMenuObjects2Objects, runtimeScene, true, true);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDButtonMainMenuObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects2[i].setAnimationName("MainMenuNormal");
}
}}

}


{

/* Reuse gdjs.Level1Code.GDButtonMainMenuObjects1 */

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDButtonMainMenuObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level1Code.GDButtonMainMenuObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects1[i].setAnimationName("MainMenuHover");
}
}
{ //Subevents
gdjs.Level1Code.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.eventsList14 = function(runtimeScene) {

{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "song18.mp3", true, 25, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Water"), gdjs.Level1Code.GDWaterObjects1);

for(gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.GDWaterObjects1.length;++gdjs.Level1Code.forEachIndex2) {
gdjs.Level1Code.GDWaterObjects2.length = 0;


gdjs.Level1Code.forEachTemporary2 = gdjs.Level1Code.GDWaterObjects1[gdjs.Level1Code.forEachIndex2];
gdjs.Level1Code.GDWaterObjects2.push(gdjs.Level1Code.forEachTemporary2);
gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDWaterObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDWaterObjects2[i].getX() <= -((gdjs.Level1Code.GDWaterObjects2[i].getWidth())) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDWaterObjects2[k] = gdjs.Level1Code.GDWaterObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDWaterObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level1Code.GDWaterObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDWaterObjects2[i].setX((gdjs.Level1Code.GDWaterObjects2[i].getWidth()));
}
}}
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Water"), gdjs.Level1Code.GDWaterObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDWaterObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDWaterObjects1[i].setX(gdjs.Level1Code.GDWaterObjects1[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SandyBottom"), gdjs.Level1Code.GDSandyBottomObjects1);

for(gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.GDSandyBottomObjects1.length;++gdjs.Level1Code.forEachIndex2) {
gdjs.Level1Code.GDSandyBottomObjects2.length = 0;


gdjs.Level1Code.forEachTemporary2 = gdjs.Level1Code.GDSandyBottomObjects1[gdjs.Level1Code.forEachIndex2];
gdjs.Level1Code.GDSandyBottomObjects2.push(gdjs.Level1Code.forEachTemporary2);
gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDSandyBottomObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSandyBottomObjects2[i].getX() <= -((gdjs.Level1Code.GDSandyBottomObjects2[i].getWidth())) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDSandyBottomObjects2[k] = gdjs.Level1Code.GDSandyBottomObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDSandyBottomObjects2.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level1Code.GDSandyBottomObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSandyBottomObjects2[i].setX((gdjs.Level1Code.GDSandyBottomObjects2[i].getWidth()));
}
}}
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("SandyBottom"), gdjs.Level1Code.GDSandyBottomObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDSandyBottomObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSandyBottomObjects1[i].setX(gdjs.Level1Code.GDSandyBottomObjects1[i].getX() - (gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
}}

}


{


{
}

}


{


{
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Submarine"), gdjs.Level1Code.GDSubmarineObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects1[i].addForce(0, 200, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects1[i].rotateTowardAngle(25, 60, runtimeScene);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Submarine"), gdjs.Level1Code.GDSubmarineObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects1[i].addForce(0, -(200), 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects1[i].rotateTowardAngle(-(15), 60, runtimeScene);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Submarine"), gdjs.Level1Code.GDSubmarineObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects1[i].addForce(-(400), 0, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects1[i].rotateTowardAngle(0, 60, runtimeScene);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Submarine"), gdjs.Level1Code.GDSubmarineObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects1[i].addForce(450, 0, 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects1[i].rotateTowardAngle(0, 60, runtimeScene);
}
}}

}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1.5, "ShapeCreation");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDShape1Objects1.length = 0;

gdjs.Level1Code.GDShape2Objects1.length = 0;

gdjs.Level1Code.GDShape3Objects1.length = 0;

gdjs.Level1Code.GDShape4Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects1ObjectsGDgdjs_46Level1Code_46GDShape2Objects1ObjectsGDgdjs_46Level1Code_46GDShape3Objects1ObjectsGDgdjs_46Level1Code_46GDShape4Objects1Objects, "Shape" + gdjs.evtTools.common.toString(gdjs.randomInRange(1, 4)), gdjs.randomInRange(640, 240 - 80), gdjs.randomInRange(100, 800), "");
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].setScale(gdjs.randomFloatInRange(0.8, 1.6));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ShapeCreation");
}}

}


{


{
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level1Code.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level1Code.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level1Code.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level1Code.GDShape4Objects1);
{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].addPolarForce(180, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].rotate(-(45), runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].rotate(-(45), runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].rotate(-(45), runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].rotate(-(45), runtimeScene);
}
}}

}


{


{
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level1Code.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level1Code.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level1Code.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level1Code.GDShape4Objects1);

gdjs.Level1Code.forEachTotalCount2 = 0;
gdjs.Level1Code.forEachObjects2.length = 0;
gdjs.Level1Code.forEachCount0_2 = gdjs.Level1Code.GDShape1Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount0_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape1Objects1);
gdjs.Level1Code.forEachCount1_2 = gdjs.Level1Code.GDShape2Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount1_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape2Objects1);
gdjs.Level1Code.forEachCount2_2 = gdjs.Level1Code.GDShape3Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount2_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape3Objects1);
gdjs.Level1Code.forEachCount3_2 = gdjs.Level1Code.GDShape4Objects1.length;
gdjs.Level1Code.forEachTotalCount2 += gdjs.Level1Code.forEachCount3_2;
gdjs.Level1Code.forEachObjects2.push.apply(gdjs.Level1Code.forEachObjects2,gdjs.Level1Code.GDShape4Objects1);
for(gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachTotalCount2;++gdjs.Level1Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Submarine"), gdjs.Level1Code.GDSubmarineObjects2);
gdjs.Level1Code.GDShape1Objects2.length = 0;

gdjs.Level1Code.GDShape2Objects2.length = 0;

gdjs.Level1Code.GDShape3Objects2.length = 0;

gdjs.Level1Code.GDShape4Objects2.length = 0;


if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2) {
    gdjs.Level1Code.GDShape1Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2) {
    gdjs.Level1Code.GDShape2Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2+gdjs.Level1Code.forEachCount2_2) {
    gdjs.Level1Code.GDShape3Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
else if (gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.forEachCount0_2+gdjs.Level1Code.forEachCount1_2+gdjs.Level1Code.forEachCount2_2+gdjs.Level1Code.forEachCount3_2) {
    gdjs.Level1Code.GDShape4Objects2.push(gdjs.Level1Code.forEachObjects2[gdjs.Level1Code.forEachIndex2]);
}
gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDShape1Objects2ObjectsGDgdjs_46Level1Code_46GDShape2Objects2ObjectsGDgdjs_46Level1Code_46GDShape3Objects2ObjectsGDgdjs_46Level1Code_46GDShape4Objects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSubmarineObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents: 
gdjs.Level1Code.eventsList3(runtimeScene);} //Subevents end.
}
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score")) > 50;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score")) > 25;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList7(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("Score")) > 150;
}if (gdjs.Level1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level1Code.eventsList9(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Mine"), gdjs.Level1Code.GDMineObjects1);

for(gdjs.Level1Code.forEachIndex2 = 0;gdjs.Level1Code.forEachIndex2 < gdjs.Level1Code.GDMineObjects1.length;++gdjs.Level1Code.forEachIndex2) {
gdjs.copyArray(runtimeScene.getObjects("Submarine"), gdjs.Level1Code.GDSubmarineObjects2);
gdjs.Level1Code.GDMineObjects2.length = 0;


gdjs.Level1Code.forEachTemporary2 = gdjs.Level1Code.GDMineObjects1[gdjs.Level1Code.forEachIndex2];
gdjs.Level1Code.GDMineObjects2.push(gdjs.Level1Code.forEachTemporary2);
gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMineObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDSubmarineObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Level1Code.GDMineObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDMineObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects2[i].getBehavior("Health").Hit(1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "bomb.wav", false, 80, 1);
}}
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 10, "ObstacleCreation");
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.Level1Code.GDMineObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level1Code.mapOfGDgdjs_46Level1Code_46GDMineObjects1Objects, gdjs.randomInRange(80, 640 - 80), -(100), "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "ObstacleCreation");
}}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("Mine"), gdjs.Level1Code.GDMineObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDMineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMineObjects1[i].addPolarForce(90, 1.15 * gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)), 0);
}
}{for(var i = 0, len = gdjs.Level1Code.GDMineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMineObjects1[i].setZOrder(4);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Submarine"), gdjs.Level1Code.GDSubmarineObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDSubmarineObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSubmarineObjects1[i].getBehavior("Health").IsJustDamaged((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDSubmarineObjects1[k] = gdjs.Level1Code.GDSubmarineObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDSubmarineObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Life"), gdjs.Level1Code.GDLifeObjects1);
/* Reuse gdjs.Level1Code.GDSubmarineObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDLifeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDLifeObjects1[i].setAnimationName("Life" + gdjs.evtTools.common.toString((( gdjs.Level1Code.GDSubmarineObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDSubmarineObjects1[0].getBehavior("Health").Health((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)))));
}
}{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects1[i].getBehavior("Flash").Flash(1.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Submarine"), gdjs.Level1Code.GDSubmarineObjects1);

gdjs.Level1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level1Code.GDSubmarineObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSubmarineObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.Level1Code.condition0IsTrue_0.val = true;
        gdjs.Level1Code.GDSubmarineObjects1[k] = gdjs.Level1Code.GDSubmarineObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDSubmarineObjects1.length = k;}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonMainMenu"), gdjs.Level1Code.GDButtonMainMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonTryAgain"), gdjs.Level1Code.GDButtonTryAgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("Chest"), gdjs.Level1Code.GDChestObjects1);
gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.Level1Code.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level1Code.GDGameOverObjects1);
gdjs.copyArray(runtimeScene.getObjects("Life"), gdjs.Level1Code.GDLifeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Mine"), gdjs.Level1Code.GDMineObjects1);
gdjs.copyArray(runtimeScene.getObjects("Shape1"), gdjs.Level1Code.GDShape1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape2"), gdjs.Level1Code.GDShape2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape3"), gdjs.Level1Code.GDShape3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Shape4"), gdjs.Level1Code.GDShape4Objects1);
/* Reuse gdjs.Level1Code.GDSubmarineObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDLifeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDLifeObjects1[i].setAnimationName("Life0");
}
}{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects1[i].setAnimationName("MonsterDead");
}
}{for(var i = 0, len = gdjs.Level1Code.GDShape1Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape1Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape2Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape3Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Level1Code.GDShape4Objects1.length ;i < len;++i) {
    gdjs.Level1Code.GDShape4Objects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDMineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDMineObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGameOverObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDSubmarineObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSubmarineObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDChestObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDChestObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDCoinObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDCoinObjects1[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Level1Code.eventsList13(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.Level1Code.condition0IsTrue_0.val = false;
{
gdjs.Level1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level1Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonMainMenu"), gdjs.Level1Code.GDButtonMainMenuObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonTryAgain"), gdjs.Level1Code.GDButtonTryAgainObjects1);
gdjs.copyArray(runtimeScene.getObjects("GameOver"), gdjs.Level1Code.GDGameOverObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDGameOverObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDGameOverObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDButtonTryAgainObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonTryAgainObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDButtonMainMenuObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDButtonMainMenuObjects1[i].hide();
}
}}

}


{



}


{


{
{runtimeScene.getVariables().getFromIndex(0).add(3 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


{
}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDSubmarineObjects1.length = 0;
gdjs.Level1Code.GDSubmarineObjects2.length = 0;
gdjs.Level1Code.GDSubmarineObjects3.length = 0;
gdjs.Level1Code.GDSubmarineObjects4.length = 0;
gdjs.Level1Code.GDShape1Objects1.length = 0;
gdjs.Level1Code.GDShape1Objects2.length = 0;
gdjs.Level1Code.GDShape1Objects3.length = 0;
gdjs.Level1Code.GDShape1Objects4.length = 0;
gdjs.Level1Code.GDShape2Objects1.length = 0;
gdjs.Level1Code.GDShape2Objects2.length = 0;
gdjs.Level1Code.GDShape2Objects3.length = 0;
gdjs.Level1Code.GDShape2Objects4.length = 0;
gdjs.Level1Code.GDShape3Objects1.length = 0;
gdjs.Level1Code.GDShape3Objects2.length = 0;
gdjs.Level1Code.GDShape3Objects3.length = 0;
gdjs.Level1Code.GDShape3Objects4.length = 0;
gdjs.Level1Code.GDShape4Objects1.length = 0;
gdjs.Level1Code.GDShape4Objects2.length = 0;
gdjs.Level1Code.GDShape4Objects3.length = 0;
gdjs.Level1Code.GDShape4Objects4.length = 0;
gdjs.Level1Code.GDScoreObjects1.length = 0;
gdjs.Level1Code.GDScoreObjects2.length = 0;
gdjs.Level1Code.GDScoreObjects3.length = 0;
gdjs.Level1Code.GDScoreObjects4.length = 0;
gdjs.Level1Code.GDLifeObjects1.length = 0;
gdjs.Level1Code.GDLifeObjects2.length = 0;
gdjs.Level1Code.GDLifeObjects3.length = 0;
gdjs.Level1Code.GDLifeObjects4.length = 0;
gdjs.Level1Code.GDGameOverObjects1.length = 0;
gdjs.Level1Code.GDGameOverObjects2.length = 0;
gdjs.Level1Code.GDGameOverObjects3.length = 0;
gdjs.Level1Code.GDGameOverObjects4.length = 0;
gdjs.Level1Code.GDButtonTryAgainObjects1.length = 0;
gdjs.Level1Code.GDButtonTryAgainObjects2.length = 0;
gdjs.Level1Code.GDButtonTryAgainObjects3.length = 0;
gdjs.Level1Code.GDButtonTryAgainObjects4.length = 0;
gdjs.Level1Code.GDButtonMainMenuObjects1.length = 0;
gdjs.Level1Code.GDButtonMainMenuObjects2.length = 0;
gdjs.Level1Code.GDButtonMainMenuObjects3.length = 0;
gdjs.Level1Code.GDButtonMainMenuObjects4.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape4ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape3ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape2ExplosionObjects4.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects1.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects2.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects3.length = 0;
gdjs.Level1Code.GDShape1ExplosionObjects4.length = 0;
gdjs.Level1Code.GDMineObjects1.length = 0;
gdjs.Level1Code.GDMineObjects2.length = 0;
gdjs.Level1Code.GDMineObjects3.length = 0;
gdjs.Level1Code.GDMineObjects4.length = 0;
gdjs.Level1Code.GDFloorMineObjects1.length = 0;
gdjs.Level1Code.GDFloorMineObjects2.length = 0;
gdjs.Level1Code.GDFloorMineObjects3.length = 0;
gdjs.Level1Code.GDFloorMineObjects4.length = 0;
gdjs.Level1Code.GDtestbgObjects1.length = 0;
gdjs.Level1Code.GDtestbgObjects2.length = 0;
gdjs.Level1Code.GDtestbgObjects3.length = 0;
gdjs.Level1Code.GDtestbgObjects4.length = 0;
gdjs.Level1Code.GDNewObjectObjects1.length = 0;
gdjs.Level1Code.GDNewObjectObjects2.length = 0;
gdjs.Level1Code.GDNewObjectObjects3.length = 0;
gdjs.Level1Code.GDNewObjectObjects4.length = 0;
gdjs.Level1Code.GDtilebgObjects1.length = 0;
gdjs.Level1Code.GDtilebgObjects2.length = 0;
gdjs.Level1Code.GDtilebgObjects3.length = 0;
gdjs.Level1Code.GDtilebgObjects4.length = 0;
gdjs.Level1Code.GDSandObjects1.length = 0;
gdjs.Level1Code.GDSandObjects2.length = 0;
gdjs.Level1Code.GDSandObjects3.length = 0;
gdjs.Level1Code.GDSandObjects4.length = 0;
gdjs.Level1Code.GDWaterObjects1.length = 0;
gdjs.Level1Code.GDWaterObjects2.length = 0;
gdjs.Level1Code.GDWaterObjects3.length = 0;
gdjs.Level1Code.GDWaterObjects4.length = 0;
gdjs.Level1Code.GDSandyBottomObjects1.length = 0;
gdjs.Level1Code.GDSandyBottomObjects2.length = 0;
gdjs.Level1Code.GDSandyBottomObjects3.length = 0;
gdjs.Level1Code.GDSandyBottomObjects4.length = 0;
gdjs.Level1Code.GDCoinObjects1.length = 0;
gdjs.Level1Code.GDCoinObjects2.length = 0;
gdjs.Level1Code.GDCoinObjects3.length = 0;
gdjs.Level1Code.GDCoinObjects4.length = 0;
gdjs.Level1Code.GDChestObjects1.length = 0;
gdjs.Level1Code.GDChestObjects2.length = 0;
gdjs.Level1Code.GDChestObjects3.length = 0;
gdjs.Level1Code.GDChestObjects4.length = 0;

gdjs.Level1Code.eventsList14(runtimeScene);
return;

}

gdjs['Level1Code'] = gdjs.Level1Code;

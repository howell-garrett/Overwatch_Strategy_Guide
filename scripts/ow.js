var tankShowing = false;
var damageShowing = false;


var prevTank = "";

function showContent(character, profile) {
   if (prevTank == character) {
       return;
   }
     console.log("beginning  " + document.getElementById(profile).style.display);
    closeAllTanks();
    $("#" + profile).toggle(250);
    prevTank = character;
}






$(document).ready(function(){
    $("#bastion").click(function(){
    if (tankShowing) {
        closeAllTanks();
    } else {
        $("#bastionProfile").toggle(250);
    } tankShowing=!tankShowing;
    });
});

function closeAllTanks() {
    $("#orisaProfile").hide(250);
    $("#dvaProfile").hide(250);
    $("#roadhogProfile").hide(250);
    $("#reinhardtProfile").hide(250);
    $("#winstonProfile").hide(250);
    $("#zaryaProfile").hide(250);
    $("#wrecking_ballProfile").hide(250);
   
}

function closeAllDamage() {
    function closeAllTanks() {
    $("#bastionProfile").hide(250);
    $("#doomfistProfile").hide(250);
    $("#genjiProfile").hide(250);
    $("#hanzoProfile").hide(250);
    $("#junkratProfile").hide(250);
    $("#mccreeProfile").hide(250);
    
   
}
}




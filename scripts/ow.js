var tankShowing = false;
var damageShowing = false;
var toggleSpeed = 250;

var prevTank = "";
var prevDamage = "";

function showContentTank(event) {
   var char = event.target.id;
   if (prevTank === char) {
       close(char);
       prevTank = "";       
       return;

   }
    closeAllTanks();
    $("#" + char + "Profile").toggle(250);
    prevTank = char;
}

function showContentDamage(event) {
   var char = event.target.id;
   if (prevDamage === char) {
       close(char);
       prevDamage = "";       
       return;
   }   
    closeAllDamage();
    $("#" + char + "Profile").toggle(250);
    prevDamage = char;
}

function close(charater) {
    $("#" + charater + "Profile").hide(toggleSpeed);
}

function closeAllTanks(tank) {
    $("#orisaProfile").hide(toggleSpeed);
    $("#dvaProfile").hide(toggleSpeed);
    $("#roadhogProfile").hide(toggleSpeed);
    $("#reinhardtProfile").hide(toggleSpeed);
    $("#winstonProfile").hide(toggleSpeed);
    $("#zaryaProfile").hide(toggleSpeed);
    $("#wrecking_ballProfile").hide(toggleSpeed);
   
}

function closeAllDamage() {
    $("#bastionProfile").hide(toggleSpeed);
    $("#doomfistProfile").hide(toggleSpeed);
    $("#genjiProfile").hide(toggleSpeed);
    $("#hanzoProfile").hide(toggleSpeed);
    $("#junkratProfile").hide(toggleSpeed);
    $("#mccreeProfile").hide(toggleSpeed);
    $("#meiProfile").hide(toggleSpeed);
    $("#reaperProfile").hide(toggleSpeed);
    $("#soldier76Profile").hide(toggleSpeed);
    $("#sombraProfile").hide(toggleSpeed);
    $("#symmetraProfile").hide(toggleSpeed);
    $("#torbjornProfile").hide(toggleSpeed);
    $("#tracerProfile").hide(toggleSpeed);
    $("#widowmakerProfile").hide(toggleSpeed)
}




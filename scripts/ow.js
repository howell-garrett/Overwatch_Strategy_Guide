var tankShowing = false;
var damageShowing = false;
var supportShowing = false;
var toggleSpeed = 250;

var prevTank = "";
var prevDamage = "";
var prevSupport = "";

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

function showContentSupport(event) {
   var char = event.target.id;
   if (prevSupport === char) {
       close(char);
       prevSupport = "";       
       return;
   }   
    closeAllSupport();
    $("#" + char + "Profile").toggle(250);
    prevSupport = char;
}

function close(charater) {
    $("#" + charater + "Profile").hide(toggleSpeed);
}

function closeAllTanks() {
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


function closeAllSupport() {
    $("#anaProfile").hide(toggleSpeed);
    $("#brigitteProfile").hide(toggleSpeed);
    $("#lucioProfile").hide(toggleSpeed);
    $("#mercyProfile").hide(toggleSpeed);
    $("#moiraProfile").hide(toggleSpeed);
    $("#zenyattaProfile").hide(toggleSpeed);
}

function show() {
    $(".dropdown-content").toggle(toggleSpeed);
}



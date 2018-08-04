var heroShowing = false;

var toggleSpeed = 250;

var prevHero = "";
var currentHero = "";


function showContent(event) {
   var char = event.target.id;
    currentHero = char;
    document.getElementById(char).style.backgroundColor = "darkred";
    if (prevHero != "") {
    document.getElementById(prevHero).style.backgroundColor = "#f1f1f1";
    }
   if (prevHero === char) {
       close(char);
       prevHero = "";       
       return;

   }
    closeAllHeroes();
    $("#" + char + "Profile").toggle(250);
    prevHero = char;
}


function close(charater) {
    $("#" + charater + "Profile").hide(toggleSpeed);
}

function closeAllHeroes() {
    $("#orisaProfile").hide(toggleSpeed);
    $("#dvaProfile").hide(toggleSpeed);
    $("#roadhogProfile").hide(toggleSpeed);
    $("#reinhardtProfile").hide(toggleSpeed);
    $("#winstonProfile").hide(toggleSpeed);
    $("#zaryaProfile").hide(toggleSpeed);
    $("#wrecking_ballProfile").hide(toggleSpeed);
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



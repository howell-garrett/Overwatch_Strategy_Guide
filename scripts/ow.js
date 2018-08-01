var tankShowing = false;
var damageShowing = false;


//show Orisa's section
$(document).ready(function(){
    $("#orisa").click(function(){
         if (tankShowing) {
             closeAllTanks();
         } else {
        $("#orisaProfile").toggle(250); } tankShowing = !tankShowing; console.log(tankShowing);
    });
});

//show Dva's section
$(document).ready(function(){
    $("#dva").click(function(){
        if ( tankShowing) {
            closeAllTanks();
         } else { 
        $("#dvaProfile").toggle(250);
         } tankShowing=!tankShowing;
        console.log(tankShowing);
     
    });
});

//show Rein's section
$(document).ready(function(){
    $("#reinhardt").click(function(){
    if (tankShowing) {
        closeAllTanks();
    } else {
        $("#reinhardtProfile").toggle(250);
    } tankShowing=!tankShowing; console.log(tankShowing);
    });
});

//show Roadhog's section
$(document).ready(function(){
    $("#roadhog").click(function(){
    if (tankShowing) {
        closeAllTanks();
    } else {
        $("#roadhogProfile").toggle(250);
    } tankShowing=!tankShowing;
    });
});

//show Winston's profile
$(document).ready(function(){
    $("#winston").click(function(){
    if (tankShowing) {
        closeAllTanks();
    } else {
        $("#winstonProfile").toggle(250);
    } tankShowing=!tankShowing;
    });
});

//show Hammond's profile
$(document).ready(function(){
    $("#wrecking_ball").click(function(){
    if (tankShowing) {
        closeAllTanks();
    } else {
        $("#wrecking_ballProfile").toggle(250);
    } tankShowing=!tankShowing; console.log(tankShowing);
    });
});


//show Zarya's Profile
$(document).ready(function(){
    $("#zarya").click(function(){
    if (tankShowing) {
        closeAllTanks();
    } else {
        $("#zaryaProfile").toggle(250);
    } tankShowing=!tankShowing;
    });
});

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




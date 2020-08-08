$(document).ready(function(){


    //Sticky Menu
    $(".js-services").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

    // Mixit Up (portfolio section)
    var mixer = mixitup('.portfolioimg');
});
// $(document).ready(function () {
//     $(".remove").click(function () { 
//         $("h1").removeClass("active");
//         $("p").addClass("active");
//         $(".remove").addClass("bkg");
//         $(".add").removeClass("bkg");
//     $(".add").click(function () { 
//         $("h1").addClass("active");
//         $("p").removeClass("active");
//         $(".add").addClass("bkg");
//         $(".remove").removeClass("bkg");

//     });

//     });
// });

$(document).ready(function () {
    $(".bie").click(function () {
        $(".cars").addClass("car");
        $(".planes").addClass("plane");
        $(".cycles").addClass("cycle");
        $(".bikes").removeClass("bike");
    });

    $(".ce").click(function () {
        $(".cars").addClass("car");
        $(".planes").addClass("plane");
        $(".cycles").removeClass("cycle");
        $(".bikes").addClass("bike");
    });

    $(".pn").click(function () {
        $(".cars").addClass("car");
        $(".planes").removeClass("plane");
        $(".cycles").addClass("cycle");
        $(".bikes").addClass("bike");
    });
    $(".cr").click(function () {
        $(".cars").removeClass("car");
        $(".planes").addClass("plane");
        $(".cycles").addClass("cycle");
        $(".bikes").addClass("bike");
    });



});
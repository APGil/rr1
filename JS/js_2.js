
var i = 0;

$('#pilota1').css('visibility', 'visible');

$('#pilota2').css('visibility', 'visible');

$('#pilota3').css('visibility', 'visible');

$('#pilota4').css('visibility', 'visible');

$('#pilota5').css('visibility', 'visible');

$('#pilota6').css('visibility', 'visible');

$('#pilota7').css('visibility', 'visible');

$('#pilota8').css('visibility', 'visible');

$('#pilota9').css('visibility', 'visible');

$('#pilota10').css('visibility', 'visible');

$('#pilota11').css('visibility', 'visible');

$('#pilota12').css('visibility', 'visible');

$('#pilota13').css('visibility', 'visible');

$('#pilota14').css('visibility', 'visible');

$('#pilota15').css('visibility', 'visible');

$('#pilota16').css('visibility', 'visible');

$('#pilota17').css('visibility', 'visible');

$('#pilota18').css('visibility', 'visible');

$('#pilota19').css('visibility', 'visible');

$('#pilota20').css('visibility', 'visible');

/**/

//CONTADOR EXERCICI 1

document.getElementById("y").onclick = function () {
    
    "use strict";
    
    if (document.getElementById("y").className === "nice") {
        
        document.getElementById("y").className = "good";
        
        document.getElementById("e1").className = "balls";
        
        document.getElementById("test_div").className = "none";
        
        document.getElementById("g2_b").className = "girl_ends_4";
        
        document.getElementById("b1").className = "b1_ends3";
        
        document.getElementById("text_bb3").className = "txt_bb_3_e";
        
        document.getElementById("h2").className = "h1_begins";
        
        i *= 0;
    }
};

document.getElementById("n").onclick = function () {
    
    "use strict";
    
    if (document.getElementById("n").className === "nope") {
        
        document.getElementById("n").className = "bad";
        
        document.getElementById("ex1").className = "ex1_begins";
                                                    
        document.getElementById("test_div").className = "no_div";
                                                    
        document.getElementById("count").className = "none";
        
        i *= 0;
                                                    
        document.getElementById("e1").className = "none";
        
        document.getElementById("pilota1").className = "yb";
        
        document.getElementById("b1_1").display = "none";
        
        document.getElementById("b1_1").className = "b1_1_b";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("b2_1").display = "none";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("b3_1").display = "none";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("b4_1").display = "none";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("pilota5").className = "yb5";
        
        document.getElementById("b5_1").display = "none";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("b6_1").display = "none";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("b7_1").display = "none";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("b8_1").display = "none";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("b9_1").display = "none";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("pilota10").className = "yb10";
        
        document.getElementById("b10_1").display = "none";
        
        document.getElementById("b10_1").className = "b10_1_b";
        
        
        
        document.getElementById("pilota11").className = "yb11";
        
        document.getElementById("b11_1").display = "none";
        
        document.getElementById("b11_1").className = "b11_1_b";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("b12_1").display = "none";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("b13_1").display = "none";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("b14_1").display = "none";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("pilota15").className = "yb15";
        
        document.getElementById("b15_1").display = "none";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("b16_1").display = "none";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("b17_1").display = "none";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("b18_1").display = "none";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("b19_1").display = "none";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("pilota20").className = "yb20";
        
        document.getElementById("b20_1").display = "none";
        
        document.getElementById("b20_1").className = "b20_1_b";
    }
};


/*SUMAR*/

function contar() {
    
    "use strict";
        
    i += 1; /*document.getElementById("count").innerHTML =*/
    
    document.getElementById("pilota1").className = "nb";
    
    document.getElementById("b1_1").className = "b1_1_e";
   
}

function c2() {
    
    "use strict";
    
    if (document.getElementById("pilota1").className === "nb") {
        
        i += 1;
        
        document.getElementById("pilota2").className = "nb2";

        document.getElementById("b2_1").className = "b2_1_e";
    
    } else if (document.getElementById("pilota1").className === "yb") {
        
        i += 2;

        document.getElementById("pilota1").className = "nb";

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b1_1").className = "b1_1_e";
    }
    
}

function c3() {
    
    "use strict";
    
    if (document.getElementById("pilota2").className === "nb2") {
        
        i += 1;

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("b3_1").className = "b3_1_e";
        
    } else if (document.getElementById("pilota1").className === "yb") {

        i += 3;

        document.getElementById("pilota1").className = "nb";

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("b1_1").className = "b1_1_e";

        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";

    } else if (document.getElementById("pilota2").className === "yb2") {
        
        i += 2;
        
        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";
        
        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";
    }
}

function c4() {
    
    "use strict";
    
    if (document.getElementById("pilota3").className === "nb3") {
        
        i += 1;

        document.getElementById("pilota4").className = "nb4";

        document.getElementById("b4_1").className = "b4_1_e";
     
    } else if (document.getElementById("pilota1").className === "yb") {

        i += 4;

        document.getElementById("pilota1").className = "nb";

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";

        document.getElementById("b1_1").className = "b1_1_e";

        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";

        document.getElementById("b4_1").className = "b4_1_e";

    } else if (document.getElementById("pilota2").className === "yb2") {
        
        i += 3;

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
    } else if (document.getElementById("pilota3").className === "yb3") {
        
        i += 2;

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("b3_1").className = "b3_1_e";

        document.getElementById("b4_1").className = "b4_1_e";
        
    }
}

function c5() {
    
    "use strict";
    
    if (document.getElementById("pilota4").className === "nb4") {
        
        i += 1;

        document.getElementById("pilota5").className = "nb5";

        document.getElementById("b5_1").className = "b5_1_e";
        
    } else if (document.getElementById("pilota1").className === "yb") {
        
        i += 5;

        document.getElementById("pilota1").className = "nb";

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";

        document.getElementById("b1_1").className = "b1_1_e";
        
        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
    } else if (document.getElementById("pilota2").className === "yb2") {
        
        i += 4;

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
    } else if (document.getElementById("pilota3").className === "yb3") {
        
        i += 3;

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("b3_1").className = "b3_1_e";

        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
    } else if (document.getElementById("pilota4").className === "yb4") {
        
        i += 2;
        
        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";

        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
    }
}

function c6() {
    
    "use strict";
    
    if (document.getElementById("pilota5").className === "nb5") {
        
        i += 1;

        document.getElementById("pilota6").className = "nb6";

        document.getElementById("b6_1").className = "b6_1_e";
        
    } else if (document.getElementById("pilota1").className === "yb") {
        
        i += 6;

        document.getElementById("pilota1").className = "nb";

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";

        document.getElementById("b1_1").className = "b1_1_e";
        
        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
    } else if (document.getElementById("pilota2").className === "yb2") {
        
        i += 5;

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
    } else if (document.getElementById("pilota3").className === "yb3") {
        
        i += 4;

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("b3_1").className = "b3_1_e";

        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
    } else if (document.getElementById("pilota4").className === "yb4") {
        
        i += 3;
        
        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";

        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
    } else if (document.getElementById("pilota5").className === "yb5") {
        
        i += 2;
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
    }
}

function c7() {
    
    "use strict";
    
    if (document.getElementById("pilota6").className === "nb6") {
        
        i += 1;

        document.getElementById("pilota7").className = "nb7";

        document.getElementById("b7_1").className = "b7_1_e";
        
    } else if (document.getElementById("pilota1").className === "yb") {
        
        i += 7;

        document.getElementById("pilota1").className = "nb";

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("b1_1").className = "b1_1_e";
        
        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
    } else if (document.getElementById("pilota2").className === "yb2") {
        
        i += 6;

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";
        
        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
    } else if (document.getElementById("pilota3").className === "yb3") {
        
        i += 5;

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";
        
        document.getElementById("b3_1").className = "b3_1_e";

        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
    } else if (document.getElementById("pilota4").className === "yb4") {
        
        i += 4;
        
        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
    } else if (document.getElementById("pilota5").className === "yb5") {
        
        i += 3;
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
    } else if (document.getElementById("pilota6").className === "yb6") {
        
        i += 2;
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
    }
}

function c8() {
    
    "use strict";
    
    if (document.getElementById("pilota7").className === "nb7") {
        
        i += 1;

        document.getElementById("pilota8").className = "nb8";

        document.getElementById("b8_1").className = "b8_1_e";
        
    } else if (document.getElementById("pilota1").className === "yb") {
        
        i += 8;

        document.getElementById("pilota1").className = "nb";

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("b1_1").className = "b1_1_e";
        
        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
    } else if (document.getElementById("pilota2").className === "yb2") {
        
        i += 7;

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
    } else if (document.getElementById("pilota3").className === "yb3") {
        
        i += 6;

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("b3_1").className = "b3_1_e";

        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
    } else if (document.getElementById("pilota4").className === "yb4") {
        
        i += 5;
        
        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
    } else if (document.getElementById("pilota5").className === "yb5") {
        
        i += 4;
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
    } else if (document.getElementById("pilota6").className === "yb6") {
        
        i += 3;
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
    } else if (document.getElementById("pilota7").className === "yb7") {
        
        i += 2;
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
    }
}

function c9() {
    
    "use strict";
    
    if (document.getElementById("pilota8").className === "nb8") {
        
        i += 1;

        document.getElementById("pilota9").className = "nb9";

        document.getElementById("b9_1").className = "b9_1_e";
        
    } else if (document.getElementById("pilota1").className === "yb") {
        
        i += 9;

        document.getElementById("pilota1").className = "nb";

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("b1_1").className = "b1_1_e";
        
        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
    } else if (document.getElementById("pilota2").className === "yb2") {
        
        i += 8;

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
    } else if (document.getElementById("pilota3").className === "yb3") {
        
        i += 7;

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("b3_1").className = "b3_1_e";

        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
    } else if (document.getElementById("pilota4").className === "yb4") {
        
        i += 6;
        
        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
    } else if (document.getElementById("pilota5").className === "yb5") {
        
        i += 5;
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
    } else if (document.getElementById("pilota6").className === "yb6") {
        
        i += 4;
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
    } else if (document.getElementById("pilota7").className === "yb7") {
        
        i += 3;
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
    } else if (document.getElementById("pilota8").className === "yb8") {
        
        i += 2;
        
        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
    }
}

function c10() {
    
    "use strict";
    
    if (document.getElementById("pilota9").className === "nb9") {
        
        i += 1;

        document.getElementById("pilota10").className = "nb10";

        document.getElementById("b10_1").className = "b10_1_e";
        
    } else if (document.getElementById("pilota1").className === "yb") {
        
        i += 10;

        document.getElementById("pilota1").className = "nb";

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("pilota10").className = "nb10";
        
        document.getElementById("b1_1").className = "b1_1_e";
        
        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
        document.getElementById("b10_1").className = "b10_1_e";
        
    } else if (document.getElementById("pilota2").className === "yb2") {
        
        i += 9;

        document.getElementById("pilota2").className = "nb2";

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("pilota10").className = "nb10";
        
        document.getElementById("b2_1").className = "b2_1_e";

        document.getElementById("b3_1").className = "b3_1_e";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
        document.getElementById("b10_1").className = "b10_1_e";
        
    } else if (document.getElementById("pilota3").className === "yb3") {
        
        i += 8;

        document.getElementById("pilota3").className = "nb3";

        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("pilota10").className = "nb10";
        
        document.getElementById("b3_1").className = "b3_1_e";

        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
        document.getElementById("b10_1").className = "b10_1_e";
        
    } else if (document.getElementById("pilota4").className === "yb4") {
        
        i += 7;
        
        document.getElementById("pilota4").className = "nb4";
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("pilota10").className = "nb10";
        
        document.getElementById("b4_1").className = "b4_1_e";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
        document.getElementById("b10_1").className = "b10_1_e";
        
    } else if (document.getElementById("pilota5").className === "yb5") {
        
        i += 6;
        
        document.getElementById("pilota5").className = "nb5";
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("pilota10").className = "nb10";
        
        document.getElementById("b5_1").className = "b5_1_e";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
        document.getElementById("b10_1").className = "b10_1_e";
        
    } else if (document.getElementById("pilota6").className === "yb6") {
        
        i += 5;
        
        document.getElementById("pilota6").className = "nb6";
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("pilota10").className = "nb10";
        
        document.getElementById("b6_1").className = "b6_1_e";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
        document.getElementById("b10_1").className = "b10_1_e";
        
    } else if (document.getElementById("pilota7").className === "yb7") {
        
        i += 4;
        
        document.getElementById("pilota7").className = "nb7";

        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("pilota10").className = "nb10";
        
        document.getElementById("b7_1").className = "b7_1_e";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
        document.getElementById("b10_1").className = "b10_1_e";
        
    } else if (document.getElementById("pilota8").className === "yb8") {
        
        i += 3;
        
        document.getElementById("pilota8").className = "nb8";
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("pilota10").className = "nb10";
        
        document.getElementById("b8_1").className = "b8_1_e";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
        document.getElementById("b10_1").className = "b10_1_e";
        
    } else if (document.getElementById("pilota9").className === "yb9") {
        
        i += 2;
        
        document.getElementById("pilota9").className = "nb9";
        
        document.getElementById("pilota10").className = "nb10";
        
        document.getElementById("b9_1").className = "b9_1_e";
        
        document.getElementById("b10_1").className = "b10_1_e";
        
    }
    
}

function c11() {
    
    "use strict";
    
    i += 1;
    
    document.getElementById("pilota11").className = "nb11";
    
    document.getElementById("b11_1").className = "b11_1_e";
    
}

function c12() {
    
    "use strict";
    
    if (document.getElementById("pilota11").className === "nb11") {
        
        i += 1;
        
        document.getElementById("pilota12").className = "nb12";

        document.getElementById("b12_1").className = "b12_1_e";
    
    } else if (document.getElementById("pilota11").className === "yb11") {
        
        i += 2;

        document.getElementById("pilota11").className = "nb11";

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b11_1").className = "b11_1_e";
    }
}

function c13() {
    
    "use strict";
    
    if (document.getElementById("pilota12").className === "nb12") {
        
        i += 1;

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("b13_1").className = "b13_1_e";
        
    } else if (document.getElementById("pilota11").className === "yb11") {

        i += 3;

        document.getElementById("pilota11").className = "nb11";

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("b11_1").className = "b11_1_e";

        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";

    } else if (document.getElementById("pilota12").className === "yb12") {
        
        i += 2;
        
        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";
        
        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";
    }

}

function c14() {
    
    "use strict";
    
    if (document.getElementById("pilota13").className === "nb13") {
        
        i += 1;

        document.getElementById("pilota14").className = "nb14";

        document.getElementById("b14_1").className = "b14_1_e";
     
    } else if (document.getElementById("pilota11").className === "yb11") {

        i += 4;

        document.getElementById("pilota11").className = "nb11";

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";

        document.getElementById("b11_1").className = "b11_1_e";

        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";

        document.getElementById("b14_1").className = "b14_1_e";

    } else if (document.getElementById("pilota12").className === "yb12") {
        
        i += 3;

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
    } else if (document.getElementById("pilota13").className === "yb13") {
        
        i += 2;

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("b13_1").className = "b13_1_e";

        document.getElementById("b14_1").className = "b14_1_e";
        
    }
}

function c15() {
    
    "use strict";
    
    if (document.getElementById("pilota14").className === "nb14") {
        
        i += 1;

        document.getElementById("pilota15").className = "nb15";

        document.getElementById("b15_1").className = "b15_1_e";
        
    } else if (document.getElementById("pilota11").className === "yb11") {
        
        i += 5;

        document.getElementById("pilota11").className = "nb11";

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";

        document.getElementById("b11_1").className = "b11_1_e";
        
        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
    } else if (document.getElementById("pilota12").className === "yb12") {
        
        i += 4;

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
    } else if (document.getElementById("pilota13").className === "yb13") {
        
        i += 3;

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("b13_1").className = "b13_1_e";

        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
    } else if (document.getElementById("pilota14").className === "yb14") {
        
        i += 2;
        
        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";

        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
    }
}

function c16() {
    
    "use strict";
    
    if (document.getElementById("pilota15").className === "nb15") {
        
        i += 1;

        document.getElementById("pilota16").className = "nb16";

        document.getElementById("b16_1").className = "b16_1_e";
        
    } else if (document.getElementById("pilota11").className === "yb11") {
        
        i += 6;

        document.getElementById("pilota11").className = "nb11";

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";

        document.getElementById("b11_1").className = "b11_1_e";
        
        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
    } else if (document.getElementById("pilota12").className === "yb12") {
        
        i += 5;

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
    } else if (document.getElementById("pilota13").className === "yb13") {
        
        i += 4;

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("b13_1").className = "b13_1_e";

        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
    } else if (document.getElementById("pilota14").className === "yb14") {
        
        i += 3;
        
        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";

        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
    } else if (document.getElementById("pilota15").className === "yb15") {
        
        i += 2;
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
    }
}

function c17() {
    
    "use strict";
    
    if (document.getElementById("pilota16").className === "nb16") {
        
        i += 1;

        document.getElementById("pilota17").className = "nb17";

        document.getElementById("b17_1").className = "b17_1_e";
        
    } else if (document.getElementById("pilota11").className === "yb11") {
        
        i += 7;

        document.getElementById("pilota11").className = "nb11";

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("b11_1").className = "b11_1_e";
        
        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
    } else if (document.getElementById("pilota12").className === "yb12") {
        
        i += 6;

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";
        
        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
    } else if (document.getElementById("pilota13").className === "yb13") {
        
        i += 5;

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";
        
        document.getElementById("b13_1").className = "b13_1_e";

        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
    } else if (document.getElementById("pilota14").className === "yb14") {
        
        i += 4;
        
        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
    } else if (document.getElementById("pilota15").className === "yb15") {
        
        i += 3;
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
    } else if (document.getElementById("pilota16").className === "yb16") {
        
        i += 2;
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
    }
}

function c18() {
    
    "use strict";
    
    if (document.getElementById("pilota17").className === "nb17") {
        
        i += 1;

        document.getElementById("pilota18").className = "nb18";

        document.getElementById("b18_1").className = "b18_1_e";
        
    } else if (document.getElementById("pilota11").className === "yb11") {
        
        i += 8;

        document.getElementById("pilota11").className = "nb11";

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("b11_1").className = "b11_1_e";
        
        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
    } else if (document.getElementById("pilota12").className === "yb12") {
        
        i += 7;

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
    } else if (document.getElementById("pilota13").className === "yb13") {
        
        i += 6;

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("b13_1").className = "b13_1_e";

        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
    } else if (document.getElementById("pilota14").className === "yb14") {
        
        i += 5;
        
        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("b14_1").className = "b4_1_e";
        
        document.getElementById("b15_1").className = "b5_1_e";
        
        document.getElementById("b16_1").className = "b6_1_e";
        
        document.getElementById("b17_1").className = "b7_1_e";
        
        document.getElementById("b18_1").className = "b8_1_e";
        
    } else if (document.getElementById("pilota15").className === "yb15") {
        
        i += 4;
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
    } else if (document.getElementById("pilota16").className === "yb16") {
        
        i += 3;
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
    } else if (document.getElementById("pilota17").className === "yb17") {
        
        i += 2;
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
    }
}

function c19() {
    
    "use strict";
    
    if (document.getElementById("pilota18").className === "nb18") {
        
        i += 1;

        document.getElementById("pilota19").className = "nb19";

        document.getElementById("b19_1").className = "b19_1_e";
        
    } else if (document.getElementById("pilota11").className === "yb11") {
        
        i += 9;

        document.getElementById("pilota11").className = "nb11";

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("b11_1").className = "b11_1_e";
        
        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
    } else if (document.getElementById("pilota12").className === "yb12") {
        
        i += 8;

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
    } else if (document.getElementById("pilota13").className === "yb13") {
        
        i += 7;

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("b13_1").className = "b13_1_e";

        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
    } else if (document.getElementById("pilota14").className === "yb14") {
        
        i += 6;
        
        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota7").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
    } else if (document.getElementById("pilota15").className === "yb15") {
        
        i += 5;
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
    } else if (document.getElementById("pilota16").className === "yb16") {
        
        i += 4;
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
    } else if (document.getElementById("pilota17").className === "yb17") {
        
        i += 3;
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
    } else if (document.getElementById("pilota18").className === "yb18") {
        
        i += 2;
        
        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
    }
}

function c20() {
    "use strict";
    if (document.getElementById("pilota19").className === "nb19") {
        
        i += 1;

        document.getElementById("pilota20").className = "nb20";

        document.getElementById("b20_1").className = "b20_1_e";
        
    } else if (document.getElementById("pilota11").className === "yb11") {
        
        i += 10;

        document.getElementById("pilota11").className = "nb11";

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("pilota20").className = "nb20";
        
        document.getElementById("b11_1").className = "b11_1_e";
        
        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
        document.getElementById("b20_1").className = "b20_1_e";
        
    } else if (document.getElementById("pilota12").className === "yb12") {
        
        i += 9;

        document.getElementById("pilota12").className = "nb12";

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("pilota20").className = "nb20";
        
        document.getElementById("b12_1").className = "b12_1_e";

        document.getElementById("b13_1").className = "b13_1_e";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
        document.getElementById("b20_1").className = "b20_1_e";
        
    } else if (document.getElementById("pilota13").className === "yb13") {
        
        i += 8;

        document.getElementById("pilota13").className = "nb13";

        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("pilota20").className = "nb20";
        
        document.getElementById("b13_1").className = "b13_1_e";

        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
        document.getElementById("b20_1").className = "b20_1_e";
        
    } else if (document.getElementById("pilota14").className === "yb14") {
        
        i += 7;
        
        document.getElementById("pilota14").className = "nb14";
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("pilota20").className = "nb20";
        
        document.getElementById("b14_1").className = "b14_1_e";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
        document.getElementById("b20_1").className = "b20_1_e";
        
    } else if (document.getElementById("pilota15").className === "yb15") {
        
        i += 6;
        
        document.getElementById("pilota15").className = "nb15";
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("pilota20").className = "nb20";
        
        document.getElementById("b15_1").className = "b15_1_e";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b7_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
        document.getElementById("b20_1").className = "b20_1_e";
        
    } else if (document.getElementById("pilota16").className === "yb16") {
        
        i += 5;
        
        document.getElementById("pilota16").className = "nb16";
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("pilota20").className = "nb20";
        
        document.getElementById("b16_1").className = "b16_1_e";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
        document.getElementById("b20_1").className = "b20_1_e";
        
    } else if (document.getElementById("pilota17").className === "yb17") {
        
        i += 4;
        
        document.getElementById("pilota17").className = "nb17";

        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("pilota20").className = "nb20";
        
        document.getElementById("b17_1").className = "b17_1_e";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
        document.getElementById("b20_1").className = "b20_1_e";
        
    } else if (document.getElementById("pilota18").className === "yb18") {
        
        i += 3;
        
        document.getElementById("pilota18").className = "nb18";
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("pilota20").className = "nb20";
        
        document.getElementById("b18_1").className = "b18_1_e";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
        document.getElementById("b20_1").className = "b20_1_e";
        
    } else if (document.getElementById("pilota19").className === "yb19") {
        
        i += 2;
        
        document.getElementById("pilota19").className = "nb19";
        
        document.getElementById("pilota20").className = "nb20";
        
        document.getElementById("b19_1").className = "b19_1_e";
        
        document.getElementById("b20_1").className = "b20_1_e";
        
    }
}

function correct() {
    
    "use strict";
    
    if (i === 20) {
        
        document.getElementById("y").className = "nice";
    }
    
    if (i !== 20) {
        
        document.getElementById("n").className = "nope";
    }
}

/*RESTAR*/
function r1() {
    "use strict";
    
    if (document.getElementById("b10_1").className === "b10_1_e") {
        
        i += -10;
        
        document.getElementById("pilota10").className = "yb10";

        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("pilota1").className = "yb";
        
        document.getElementById("b10_1").className = "b10_1_b";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
        document.getElementById("b1_1").className = "b1_1_b";
        
    } else if (document.getElementById("b9_1").className === "b9_1_e") {
        
        i += -9;
        
        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("pilota1").className = "yb";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
    
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
        document.getElementById("b1_1").className = "b1_1_b";
        
    } else if (document.getElementById("b8_1").className === "b8_1_e") {
        
        i += -8;

        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("pilota1").className = "yb";
        
        document.getElementById("b8_1").className = "b8_1_b";

        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
        document.getElementById("b1_1").className = "b1_1_b";
        
    } else if (document.getElementById("b7_1").className === "b7_1_e") {
        
        i += -7;

        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("pilota1").className = "yb";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
        document.getElementById("b1_1").className = "b1_1_b";
        
    } else if (document.getElementById("b6_1").className === "b6_1_e") {
        
        i += -6;

        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("pilota1").className = "yb";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
        document.getElementById("b1_1").className = "b1_1_b";
        
    } else if (document.getElementById("b5_1").className === "b5_1_e") {
        
        i += -5;

        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("pilota1").className = "yb";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
        document.getElementById("b1_1").className = "b1_1_b";
        
    } else if (document.getElementById("b4_1").className === "b4_1_e") {
        
        i += -4;

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("pilota1").className = "yb";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
    
        document.getElementById("b2_1").className = "b2_1_b";
        
        document.getElementById("b1_1").className = "b1_1_b";
        
    } else if (document.getElementById("b3_1").className === "b3_1_e") {
        
        i += -3;
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("pilota1").className = "yb";

        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
        document.getElementById("b1_1").className = "b1_1_b";
        
    } else if (document.getElementById("b2_1").className === "b2_1_e") {
        
        i += -2;

        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("pilota1").className = "yb";

        document.getElementById("b2_1").className = "b2_1_b";
        
        document.getElementById("b1_1").className = "b1_1_b";
        
    } else if (document.getElementById("b1_1").className === "b1_1_e") {
        
        i += -1;
        
        document.getElementById("pilota1").className = "yb";

        document.getElementById("b1_1").className = "b1_1_b";
        
    }

}

function r2() {
    "use strict";
    
    if (document.getElementById("b10_1").className === "b10_1_e") {
        
        i += -9;
        
        document.getElementById("pilota10").className = "yb10";

        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("b10_1").className = "b10_1_b";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
    } else if (document.getElementById("b9_1").className === "b9_1_e") {
        
        i += -8;
        
        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
    
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
    } else if (document.getElementById("b8_1").className === "b8_1_e") {
        
        i += -7;

        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("b8_1").className = "b8_1_b";

        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
    } else if (document.getElementById("b7_1").className === "b7_1_e") {
        
        i += -6;

        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
    } else if (document.getElementById("b6_1").className === "b6_1_e") {
        
        i += -5;

        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
    } else if (document.getElementById("b5_1").className === "b5_1_e") {
        
        i += -4;

        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
    } else if (document.getElementById("b4_1").className === "b4_1_e") {
        
        i += -3;

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
    
        document.getElementById("b2_1").className = "b2_1_b";
        
    } else if (document.getElementById("b3_1").className === "b3_1_e") {
        
        i += -2;

        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("pilota2").className = "yb2";

        document.getElementById("b3_1").className = "b3_1_b";
        
        document.getElementById("b2_1").className = "b2_1_b";
        
    } else if (document.getElementById("b2_1").className === "b2_1_e") {
        
        i += -1;

        document.getElementById("pilota2").className = "yb2";

        document.getElementById("b2_1").className = "b2_1_b";
        
    }

}

function r3() {
    "use strict";
    
    if (document.getElementById("b10_1").className === "b10_1_e") {
        
        i += -8;
        
        document.getElementById("pilota10").className = "yb10";

        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("b10_1").className = "b10_1_b";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
    } else if (document.getElementById("b9_1").className === "b9_1_e") {
        
        i += -7;
        
        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
    
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
    } else if (document.getElementById("b8_1").className === "b8_1_e") {
        
        i += -6;

        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("b8_1").className = "b8_1_b";

        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
    } else if (document.getElementById("b7_1").className === "b7_1_e") {
        
        i += -5;

        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";

        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
    } else if (document.getElementById("b6_1").className === "b6_1_e") {
        
        i += -4;

        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
    } else if (document.getElementById("b5_1").className === "b5_1_e") {
        
        i += -3;

        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";

        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
    } else if (document.getElementById("b4_1").className === "b4_1_e") {
        
        i += -2;

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("pilota3").className = "yb3";

        document.getElementById("b4_1").className = "b4_1_b";
        
        document.getElementById("b3_1").className = "b3_1_b";
        
    } else if (document.getElementById("b3_1").className === "b3_1_e") {
        
        i += -1;
        
        document.getElementById("pilota3").className = "yb3";

        document.getElementById("b3_1").className = "b3_1_b";
        
    }

}

function r4() {
    "use strict";
    
    if (document.getElementById("b10_1").className === "b10_1_e") {
        
        i += -7;
        
        document.getElementById("pilota10").className = "yb10";

        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("b10_1").className = "b10_1_b";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
    } else if (document.getElementById("b9_1").className === "b9_1_e") {
        
        i += -6;
        
        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
    
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
    } else if (document.getElementById("b8_1").className === "b8_1_e") {
        
        i += -5;

        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("b8_1").className = "b8_1_b";

        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
    } else if (document.getElementById("b7_1").className === "b7_1_e") {
        
        i += -4;

        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";

        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
    } else if (document.getElementById("b6_1").className === "b6_1_e") {
        
        i += -3;

        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
    } else if (document.getElementById("b5_1").className === "b5_1_e") {
        
        i += -2;

        document.getElementById("pilota5").className = "yb5";

        document.getElementById("pilota4").className = "yb4";

        document.getElementById("b5_1").className = "b5_1_b";
        
        document.getElementById("b4_1").className = "b4_1_b";
        
    } else if (document.getElementById("b4_1").className === "b4_1_e") {
        
        i += -1;

        document.getElementById("pilota4").className = "yb4";

        document.getElementById("b4_1").className = "b4_1_b";
        
    }

}

function r5() {
    "use strict";
    
    if (document.getElementById("b10_1").className === "b10_1_e") {
        
        i += -6;
        
        document.getElementById("pilota10").className = "yb10";

        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("b10_1").className = "b10_1_b";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
    } else if (document.getElementById("b9_1").className === "b9_1_e") {
        
        i += -5;
        
        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
    
        document.getElementById("b5_1").className = "b5_1_b";
        
    } else if (document.getElementById("b8_1").className === "b8_1_e") {
        
        i += -4;

        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";
        
        document.getElementById("b8_1").className = "b8_1_b";

        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
    } else if (document.getElementById("b7_1").className === "b7_1_e") {
        
        i += -3;

        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
    } else if (document.getElementById("b6_1").className === "b6_1_e") {
        
        i += -2;

        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("pilota5").className = "yb5";

        document.getElementById("b6_1").className = "b6_1_b";
        
        document.getElementById("b5_1").className = "b5_1_b";
        
    } else if (document.getElementById("b5_1").className === "b5_1_e") {
        
        i += -1;

        document.getElementById("pilota5").className = "yb5";

        document.getElementById("b5_1").className = "b5_1_b";
        
    }

}

function r6() {
    "use strict";
    
    if (document.getElementById("b10_1").className === "b10_1_e") {
        
        i += -5;
        
        document.getElementById("pilota10").className = "yb10";

        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";

        document.getElementById("b10_1").className = "b10_1_b";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
    } else if (document.getElementById("b9_1").className === "b9_1_e") {
        
        i += -4;
        
        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
    
    } else if (document.getElementById("b8_1").className === "b8_1_e") {
        
        i += -3;

        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";
        
        document.getElementById("b8_1").className = "b8_1_b";

        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
    } else if (document.getElementById("b7_1").className === "b7_1_e") {
        
        i += -2;

        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("pilota6").className = "yb6";

        document.getElementById("b7_1").className = "b7_1_b";
        
        document.getElementById("b6_1").className = "b6_1_b";
        
    } else if (document.getElementById("b6_1").className === "b6_1_e") {
        
        i += -1;

        document.getElementById("pilota6").className = "yb6";

        document.getElementById("b6_1").className = "b6_1_b";
        
    }

}

function r7() {
    "use strict";
    
    if (document.getElementById("b10_1").className === "b10_1_e") {
        
        i += -4;
        
        document.getElementById("pilota10").className = "yb10";

        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("b10_1").className = "b10_1_b";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("b7_1").className = "b7_1_b";
        
    } else if (document.getElementById("b9_1").className === "b9_1_e") {
        
        i += -3;
        
        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
        document.getElementById("b7_1").className = "b7_1_b";
    
    } else if (document.getElementById("b8_1").className === "b8_1_e") {
        
        i += -2;

        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("pilota7").className = "yb7";
        
        document.getElementById("b8_1").className = "b8_1_b";

        document.getElementById("b7_1").className = "b7_1_b";
        
    } else if (document.getElementById("b7_1").className === "b7_1_e") {
        
        i += -1;

        document.getElementById("pilota7").className = "yb7";

        document.getElementById("b7_1").className = "b7_1_b";
        
    }

}

function r8() {
    "use strict";
    
    if (document.getElementById("b10_1").className === "b10_1_e") {
        
        i += -3;
        
        document.getElementById("pilota10").className = "yb10";

        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("b10_1").className = "b10_1_b";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
        
    } else if (document.getElementById("b9_1").className === "b9_1_e") {
        
        i += -2;
        
        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("pilota8").className = "yb8";
        
        document.getElementById("b9_1").className = "b9_1_b";
        
        document.getElementById("b8_1").className = "b8_1_b";
    
    } else if (document.getElementById("b8_1").className === "b8_1_e") {
        
        i += -1;

        document.getElementById("pilota8").className = "yb8";

        document.getElementById("b8_1").className = "b8_1_b";
        
    }

}

function r9() {
    
    "use strict";
    
    if (document.getElementById("b10_1").className === "b10_1_e") {
        
        i += -2;
        
        document.getElementById("pilota10").className = "yb10";

        document.getElementById("pilota9").className = "yb9";
        
        document.getElementById("b10_1").className = "b10_1_b";
        
        document.getElementById("b9_1").className = "b9_1_b";
          
    } else if (document.getElementById("b9_1").className === "b9_1_e") {
        
        i += -1;

        document.getElementById("pilota9").className = "yb9";

        document.getElementById("b9_1").className = "b9_1_b";
        
    }

}

function r10() {
    "use strict";
    
    if (document.getElementById("b10_1").className === "b10_1_e") {
        
        i += -1;

        document.getElementById("pilota10").className = "yb10";

        document.getElementById("b10_1").className = "b10_1_b";
    }
}

function r11() {
    "use strict";
    
    if (document.getElementById("b20_1").className === "b20_1_e") {
        
        i += -10;
        
        document.getElementById("pilota20").className = "yb20";

        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("pilota11").className = "yb11";
        
        document.getElementById("b20_1").className = "b20_1_b";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
        document.getElementById("b11_1").className = "b11_1_b";
        
    } else if (document.getElementById("b19_1").className === "b19_1_e") {
        
        i += -9;
        
        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("pilota11").className = "yb11";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
    
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
        document.getElementById("b11_1").className = "b11_1_b";
        
    } else if (document.getElementById("b18_1").className === "b18_1_e") {
        
        i += -8;

        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("pilota11").className = "yb11";
        
        document.getElementById("b18_1").className = "b18_1_b";

        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
        document.getElementById("b11_1").className = "b11_1_b";
        
    } else if (document.getElementById("b17_1").className === "b17_1_e") {
        
        i += -7;

        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("pilota11").className = "yb11";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
        document.getElementById("b11_1").className = "b11_1_b";
        
    } else if (document.getElementById("b16_1").className === "b16_1_e") {
        
        i += -6;
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("pilota11").className = "yb11";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
        document.getElementById("b11_1").className = "b11_1_b";
        
    } else if (document.getElementById("b15_1").className === "b15_1_e") {
        
        i += -5;

        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("pilota11").className = "yb11";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
        document.getElementById("b11_1").className = "b11_1_b";
        
    } else if (document.getElementById("b14_1").className === "b14_1_e") {
        
        i += -4;

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("pilota11").className = "yb11";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
    
        document.getElementById("b12_1").className = "b12_1_b";
        
        document.getElementById("b11_1").className = "b11_1_b";
        
    } else if (document.getElementById("b13_1").className === "b13_1_e") {
        
        i += -3;
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("pilota11").className = "yb11";

        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
        document.getElementById("b11_1").className = "b11_1_b";
        
    } else if (document.getElementById("b12_1").className === "b12_1_e") {
        
        i += -2;

        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("pilota11").className = "yb11";

        document.getElementById("b12_1").className = "b12_1_b";
        
        document.getElementById("b11_1").className = "b11_1_b";
        
    } else if (document.getElementById("b11_1").className === "b11_1_e") {
        
        i += -1;
        
        document.getElementById("pilota11").className = "yb11";

        document.getElementById("b11_1").className = "b11_1_b";
        
    }

}

function r12() {
    "use strict";
    
    if (document.getElementById("b20_1").className === "b20_1_e") {
        
        i += -9;
        
        document.getElementById("pilota20").className = "yb20";

        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("b20_1").className = "b20_1_b";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
    } else if (document.getElementById("b19_1").className === "b19_1_e") {
        
        i += -8;
        
        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
    
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
    } else if (document.getElementById("b18_1").className === "b18_1_e") {
        
        i += -7;

        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("b18_1").className = "b18_1_b";

        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
    } else if (document.getElementById("b17_1").className === "b17_1_e") {
        
        i += -6;

        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
    } else if (document.getElementById("b16_1").className === "b16_1_e") {
        
        i += -5;

        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
    } else if (document.getElementById("b15_1").className === "b15_1_e") {
        
        i += -4;

        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
    } else if (document.getElementById("b14_1").className === "b14_1_e") {
        
        i += -3;

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
    
        document.getElementById("b12_1").className = "b12_1_b";
        
    } else if (document.getElementById("b13_1").className === "b13_1_e") {
        
        i += -2;

        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("pilota12").className = "yb12";

        document.getElementById("b13_1").className = "b13_1_b";
        
        document.getElementById("b12_1").className = "b12_1_b";
        
    } else if (document.getElementById("b12_1").className === "b12_1_e") {
        
        i += -1;

        document.getElementById("pilota12").className = "yb12";

        document.getElementById("b12_1").className = "b12_1_b";
        
    }
}

function r13() {
    "use strict";
    
    if (document.getElementById("b20_1").className === "b20_1_e") {
        
        i += -8;
        
        document.getElementById("pilota20").className = "yb20";

        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("b20_1").className = "b20_1_b";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
    } else if (document.getElementById("b19_1").className === "b19_1_e") {
        
        i += -7;
        
        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
    
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
    } else if (document.getElementById("b18_1").className === "b18_1_e") {
        
        i += -6;

        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("b18_1").className = "b18_1_b";

        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
    } else if (document.getElementById("b17_1").className === "b17_1_e") {
        
        i += -5;

        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";

        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
    } else if (document.getElementById("b16_1").className === "b16_1_e") {
        
        i += -4;

        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
    } else if (document.getElementById("b15_1").className === "b15_1_e") {
        
        i += -3;

        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";

        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
    } else if (document.getElementById("b14_1").className === "b14_1_e") {
        
        i += -2;

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("pilota13").className = "yb13";

        document.getElementById("b14_1").className = "b14_1_b";
        
        document.getElementById("b13_1").className = "b13_1_b";
        
    } else if (document.getElementById("b13_1").className === "b13_1_e") {
        
        i += -1;
        
        document.getElementById("pilota13").className = "yb13";

        document.getElementById("b13_1").className = "b13_1_b";
        
    }

}

function r14() {
    "use strict";
    
    if (document.getElementById("b20_1").className === "b20_1_e") {
        
        i += -7;
        
        document.getElementById("pilota20").className = "yb20";

        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("b20_1").className = "b20_1_b";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
    } else if (document.getElementById("b19_1").className === "b19_1_e") {
        
        i += -6;
        
        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
    
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
    } else if (document.getElementById("b18_1").className === "b18_1_e") {
        
        i += -5;

        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("b18_1").className = "b18_1_b";

        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
    } else if (document.getElementById("b17_1").className === "b17_1_e") {
        
        i += -4;

        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";

        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
    } else if (document.getElementById("b16_1").className === "b16_1_e") {
        
        i += -3;

        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
    } else if (document.getElementById("b15_1").className === "b15_1_e") {
        
        i += -2;

        document.getElementById("pilota15").className = "yb15";

        document.getElementById("pilota14").className = "yb14";

        document.getElementById("b15_1").className = "b15_1_b";
        
        document.getElementById("b14_1").className = "b14_1_b";
        
    } else if (document.getElementById("b14_1").className === "b14_1_e") {
        
        i += -1;

        document.getElementById("pilota14").className = "yb14";

        document.getElementById("b14_1").className = "b14_1_b";
        
    }

}

function r15() {
    "use strict";
    
    if (document.getElementById("b20_1").className === "b20_1_e") {
        
        i += -6;
        
        document.getElementById("pilota20").className = "yb20";

        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("b20_1").className = "b20_1_b";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
    } else if (document.getElementById("b19_1").className === "b19_1_e") {
        
        i += -5;
        
        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
    
        document.getElementById("b15_1").className = "b15_1_b";
        
    } else if (document.getElementById("b18_1").className === "b18_1_e") {
        
        i += -4;

        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";
        
        document.getElementById("b18_1").className = "b18_1_b";

        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
    } else if (document.getElementById("b17_1").className === "b17_1_e") {
        
        i += -3;

        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
    } else if (document.getElementById("b16_1").className === "b16_1_e") {
        
        i += -2;

        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("pilota15").className = "yb15";

        document.getElementById("b16_1").className = "b16_1_b";
        
        document.getElementById("b15_1").className = "b15_1_b";
        
    } else if (document.getElementById("b15_1").className === "b15_1_e") {
        
        i += -1;

        document.getElementById("pilota15").className = "yb15";

        document.getElementById("b15_1").className = "b15_1_b";
        
    }

}

function r16() {
    "use strict";
    
    if (document.getElementById("b20_1").className === "b20_1_e") {
        
        i += -5;
        
        document.getElementById("pilota20").className = "yb20";

        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";

        document.getElementById("b20_1").className = "b20_1_b";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
    } else if (document.getElementById("b19_1").className === "b19_1_e") {
        
        i += -4;
        
        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
    
    } else if (document.getElementById("b18_1").className === "b18_1_e") {
        
        i += -3;

        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";
        
        document.getElementById("b18_1").className = "b18_1_b";

        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
    } else if (document.getElementById("b17_1").className === "b17_1_e") {
        
        i += -2;

        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("pilota16").className = "yb16";

        document.getElementById("b17_1").className = "b17_1_b";
        
        document.getElementById("b16_1").className = "b16_1_b";
        
    } else if (document.getElementById("b16_1").className === "b16_1_e") {
        
        i += -1;

        document.getElementById("pilota16").className = "yb16";

        document.getElementById("b16_1").className = "b16_1_b";
        
    }

}

function r17() {
    "use strict";
    
    if (document.getElementById("b20_1").className === "b20_1_e") {
        
        i += -4;
        
        document.getElementById("pilota20").className = "yb20";

        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("b20_1").className = "b20_1_b";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("b17_1").className = "b17_1_b";
        
    } else if (document.getElementById("b19_1").className === "b19_1_e") {
        
        i += -3;
        
        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
        document.getElementById("b17_1").className = "b17_1_b";
    
    } else if (document.getElementById("b18_1").className === "b18_1_e") {
        
        i += -2;

        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("pilota17").className = "yb17";
        
        document.getElementById("b18_1").className = "b18_1_b";

        document.getElementById("b17_1").className = "b17_1_b";
        
    } else if (document.getElementById("b17_1").className === "b17_1_e") {
        
        i += -1;

        document.getElementById("pilota17").className = "yb17";

        document.getElementById("b17_1").className = "b17_1_b";
        
    }

}

function r18() {
    "use strict";
    
    if (document.getElementById("b20_1").className === "b20_1_e") {
        
        i += -3;
        
        document.getElementById("pilota20").className = "yb20";

        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("b20_1").className = "b20_1_b";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
        
    } else if (document.getElementById("b19_1").className === "b19_1_e") {
        
        i += -2;
        
        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("pilota18").className = "yb18";
        
        document.getElementById("b19_1").className = "b19_1_b";
        
        document.getElementById("b18_1").className = "b18_1_b";
    
    } else if (document.getElementById("b18_1").className === "b18_1_e") {
        
        i += -1;

        document.getElementById("pilota18").className = "yb18";

        document.getElementById("b18_1").className = "b18_1_b";
        
    }

}

function r19() {
    "use strict";
    
    if (document.getElementById("b20_1").className === "b20_1_e") {
        
        i += -2;
        
        document.getElementById("pilota20").className = "yb20";

        document.getElementById("pilota19").className = "yb19";
        
        document.getElementById("b20_1").className = "b20_1_b";
        
        document.getElementById("b19_1").className = "b19_1_b";
          
    } else if (document.getElementById("b19_1").className === "b19_1_e") {
        
        i += -1;

        document.getElementById("pilota19").className = "yb19";

        document.getElementById("b19_1").className = "b19_1_b";
        
    }
}

function r20() {
    
    "use strict";
    
    if (document.getElementById("b20_1").className === "b20_1_e") {
        
        i += -1;

        document.getElementById("pilota20").className = "yb20";

        document.getElementById("b20_1").className = "b20_1_b";
    }
}
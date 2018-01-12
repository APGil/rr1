document.getElementById("test_div_2").onclick = function () {
    
    "use strict";
    if (document.getElementById("trans").className === "t_b") {
        document.getElementById("test_div_2").className = "none";
        document.getElementById("trans").className = "t_e";
    } else if (document.getElementById("trans").className === "t_e") {
        document.getElementById("trans").className = "nt";
        document.getElementById("g2_b").className = "girl_begins";
        document.getElementById("m2").className = "mouth_begins";
        document.getElementById("text_g3").className = "no_txt";
        document.getElementById("num").className = "subt2_e";
        document.getElementById("prof2").className = "prof_mid_5";
    } else if (document.getElementById("num").className === "subt2_e") {
        document.getElementById("num").style.display = "none";
        document.getElementById("text_p7").className = "txt_p_7_e";
        document.getElementById("m1").className = "mouth_ends3";
        document.getElementById("test_div_2").className = "no_div";
        document.getElementById("test_div_3").className = "none";
    } /*else if (document.getElementById("num").style.display === "none") {
        document.getElementById("text_p7").style.display = "none";
        document.getElementById("m1").style.display = "none";
        document.getElementById("prof2").className = "prof_bot_4";
    }*/
};

document.getElementById("test_div_3").onclick = function () {
    "use strict";
    if (document.getElementById("text_p7").className === "txt_p_7_e") {
        document.getElementById("text_p7").style.display = "none";
        document.getElementById("m1").style.display = "none";
        document.getElementById("prof2").className = "prof_bot_4";
        document.getElementById("text_p8").className = "txt_p_8_e";
    }
    if (document.getElementById("text_p8").className === "txt_p_8_e") {
        document.getElementById("prof2").className = "no_prof";
        document.getElementById("text_p8").className = "no_txt";
        document.getElementById("ex3").className = "ex3_ends";
        //addEventListener("ye");
        document.getElementById("test_div_3").className = "no_div";
    }
    
    
};

document.getElementById("ex3").onclick = function () {
    "use strict";
    if (document.getElementById("ex3").className === "ex3_ends") {
        document.getElementById("ex3").className = "ex3_begins";
        document.getElementById("e3").className = "none";
        document.getElementById("h2_3").className = "h2_ends_3";
        document.getElementById("test_div_3").className = "no_div";
        document.getElementById("count_3").className = "none";
    }
};
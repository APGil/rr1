document.getElementById("portada").onclick = function () {
    
    "use strict";
    if (document.getElementById("portada").className === "portada_begins") {
        document.getElementById("test_div").className = "none";
        document.getElementById("portada").className = "portada_ends";
        document.getElementById("text_p1").className = "txt_p_1_e";
        document.getElementById("int").className = "subt_e";
    }
};

var myVar = setInterval(aja, 15000);

function aja() {
    
    "use strict";
    if (document.getElementById("text_p5").className === "no_txt") {
        document.getElementById("m2").className = "m2_ends2";
        document.getElementById("b1").className = "no_txt2";
        document.getElementById("b11").className = "b11_e";
        document.getElementById("text_bb2").className = "no_txt2";
        document.getElementById("text_g2").className = "txt_g_2_e";
        clearInterval(myVar);
    }
}

document.getElementById("test_div").onclick = function () {
    "use strict";
    
    if (document.getElementById("prof").className === "prof_begins") {
        
        document.getElementById("text_p1").style.display = "none";
        
        document.getElementById("int").className = "subt_b";
        
        document.getElementById("prof").className = "prof_mid";
        
        document.getElementById("text_p2").className = "txt_p_2_e";
        
        document.getElementById("m1").className = "mouth_ends";
        
    } else if (document.getElementById("prof").className === "prof_mid") {
        
        document.getElementById("prof").className = "prof_bot";
        
        document.getElementById("m1").className = "mouth_begins";
        
        document.getElementById("text_p2").className = "no_txt2";

        
    } else if (document.getElementById("prof").className === "prof_bot") {

        document.getElementById("prof").className = "no_prof";

        document.getElementById("girl").className = "girl_ends";

        document.getElementById("m2").className = "m2_ends";

        document.getElementById("text_g1").className = "txt_g_1_e";
            
    } else if (document.getElementById("girl").className === "girl_ends") {
        
        document.getElementById("girl").className = "girl_begins";

        document.getElementById("text_g1").className = "no_txt2";

        document.getElementById("m2").className = "mouth_begins";

        document.getElementById("prof").className = "prof_bot_2";

        document.getElementById("text_p3").className = "txt_p_3_e";
            
    } else if (document.getElementById("prof").className === "prof_bot_2") {
        
        document.getElementById("text_p3").className = "no_txt2";

        document.getElementById("b1").className = "b1_ends";

        document.getElementById("text_bb1").className = "txt_bb_1_e";

        document.getElementById("prof").className = "no_prof";
                
    } else if (document.getElementById("b1").className === "b1_ends") {
                        
        document.getElementById("b1").className = "b1_begins";

        document.getElementById("text_bb1").className = "no_txt2";

        document.getElementById("h1").className = "h1_ends";

        document.getElementById("text_p4").className = "txt_p_4_e";

    } else if (document.getElementById("h1").className === "h1_ends") {
                    
        document.getElementById("h1").className = "h1_begins";

        document.getElementById("text_p4").className = "no_txt2";

        document.getElementById("b2").className = "b2_ends";

        document.getElementById("text_by1").className = "txt_by_1_e";
                                                    
    } else if (document.getElementById("b2").className === "b2_ends") {

        document.getElementById("b2").className = "b2_begins";

        document.getElementById("text_by1").className = "no_txt2";

        document.getElementById("prof").className = "prof_mid_2";

        document.getElementById("m1").className = "mouth_ends2";

        document.getElementById("text_p5").className = "txt_p_5_e";

    } else if (document.getElementById("prof").className === "prof_mid_2") {

        document.getElementById("prof").className = "no_prof";

        document.getElementById("m1").className = "mouth_begins_2";

        document.getElementById("text_p5").className = "no_txt";

        document.getElementById("girl").className = "girl_ends_2";

        document.getElementById("b1").className = "b1_ends_2";

        document.getElementById("text_bb2").className = "txt_bb_2_e";

    } else if (document.getElementById("girl").className === "girl_ends_2") {

        document.getElementById("b1").className = "no_txt2";
        
        document.getElementById("girl").className = "girl_begins";
        
        document.getElementById("m2").className = "mouth_begins_2";
        
        document.getElementById("b11").className = "no_txt2";
        
        clearInterval(myVar);
        
        document.getElementById("text_bb2").className = "no_txt2";
        
        document.getElementById("text_g2").className = "no_txt2";

        document.getElementById("prof").className = "prof_mid_3";

        document.getElementById("m1").className = "mouth_ends2";

        document.getElementById("text_p6").className = "txt_p_6_e";

    } else if (document.getElementById("text_p6").className === "txt_p_6_e") {

        document.getElementById("prof").className = "no_prof";

        document.getElementById("m1").className = "mouth_begins";

        document.getElementById("text_p6").className = "no_txt2";

        document.getElementById("g2_b").className = "girl_ends_3";

        document.getElementById("boy2").className = "boy2_ends2";
        
        document.getElementById("text_by2").className = "txt_by_2_e";
        
    } else if (document.getElementById("boy2").className === "boy2_ends2") {
        
        document.getElementById("g2_b").className = "girl_begins";
        
        document.getElementById("boy2").className = "b2_begins";
        
        document.getElementById("text_by2").className = "no_txt2";
        
        document.getElementById("ex1").className = "ex1_ends";

        document.getElementById("h2").className = "h2_ends";
                                               
    } else if (document.getElementById("h2").className === "h2_ends") {
        
        document.getElementById("ex1").className = "ex1_begins";

        document.getElementById("test_div").className = "no_div";

        document.getElementById("count").className = "none";

        document.getElementById("e1").className = "none";
                                                    
    } else if (document.getElementById("b1").className === "b1_ends3") {
        
        document.getElementById("g2_b").className = "girl_begins";
        
        //document.getElementById("m2").className = "mouth_begins";

        document.getElementById("b1").className = "b1_begins";
        
        document.getElementById("text_bb3").className = "no_txt2";

        document.getElementById("ex2").className = "ex2_ends";
        
    } else if (document.getElementById("ex2").className === "ex2_ends") {
        
        document.getElementById("ex2").className = "ex2_begins";

        document.getElementById("e2").className = "none";

        document.getElementById("h2_2").className = "h2_ends_2";

        document.getElementById("test_div").className = "no_div";

        document.getElementById("count_2").className = "none";
    }
    
    

    /*COSES DE CAPS*/
    if (document.getElementById("heads").className === "heads_begins") {
        
        document.getElementById("heads").className = "heads_ends";

    } else {
        
        if (document.getElementById("heads").className === "heads_ends") {
            
            document.getElementById("heads").className = "no_heads";
        }
    }
};
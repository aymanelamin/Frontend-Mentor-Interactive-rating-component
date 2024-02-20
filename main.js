

function my_function() {
    document.getElementById("background-icon-star").style.display="none";
    document.getElementById("heading1").style.display="none"; 
    document.getElementById("para1").style.display="none";
    document.getElementById("options-container").style.display="none";  
    document.getElementById("my-button").style.display="none";
    
    document.getElementById("thank-icon").style.display="inline";
    document.getElementById("changable-para").style.display="block";
    document.getElementById("heading2").style.display="block";
    document.getElementById("para2").style.display="block";

    var options = document.getElementsByName("rating");
    for (i=0; i<options.length; i++){
        if (options[i].checked){
            document.getElementById("changable-para").innerHTML="You selected " + options[i].value +" out of 5";
        }
    }

    
}

function click1() {
    document.getElementById("div-option1").style.backgroundColor="hsl(0, 0%, 100%, .4)";
    document.getElementById("label1").style.color="hsl(0, 0%, 100%)";
    document.getElementById("div-option2").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label2").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option3").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label3").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option4").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label4").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option5").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label5").style.color="hsl(216, 12%, 54%)";

}

function click2() {
    document.getElementById("div-option2").style.backgroundColor="hsl(0, 0%, 100%, .4)";
    document.getElementById("label2").style.color="hsl(0, 0%, 100%)";
    document.getElementById("div-option1").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label1").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option3").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label3").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option4").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label4").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option5").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label5").style.color="hsl(216, 12%, 54%)";
}

function click3() {
    document.getElementById("div-option3").style.backgroundColor="hsl(0, 0%, 100%, .4)";
    document.getElementById("label3").style.color="hsl(0, 0%, 100%)";
    document.getElementById("div-option2").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label2").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option1").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label1").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option4").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label4").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option5").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label5").style.color="hsl(216, 12%, 54%)";
}

function click4() {
    document.getElementById("div-option4").style.backgroundColor="hsl(0, 0%, 100%, .4)";
    document.getElementById("label4").style.color="hsl(0, 0%, 100%)";
    document.getElementById("div-option2").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label2").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option3").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label3").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option1").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label1").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option5").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label5").style.color="hsl(216, 12%, 54%)";
}

function click5() {
    document.getElementById("div-option5").style.backgroundColor="hsl(0, 0%, 100%, .4)";
    document.getElementById("label5").style.color="hsl(0, 0%, 100%)";
    document.getElementById("div-option2").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label2").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option3").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label3").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option4").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label4").style.color="hsl(216, 12%, 54%)";
    document.getElementById("div-option1").style.backgroundColor="hsl(0, 0%, 100%, .05)";
    document.getElementById("label1").style.color="hsl(216, 12%, 54%)";

}

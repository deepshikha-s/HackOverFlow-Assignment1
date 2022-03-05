var coloranseasy = [];
var coloranshard = []
var colorseasy = [];
var colorshard = [];
var anseasy = 0;
var anshard = 0;

function start() {
    document.getElementById("message").innerHTML = "Choose a mode to play"
}

function easy(){
    document.getElementById("message").innerHTML = "Click on the color which has the same rgb values as mentioned."
    for (let i = 0; i<3; i++){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const color = "rgb(" + r +", " + g + ", " + b +")"
        colorseasy.push(color);
    }
    var color1 = colorseasy[0]
    var color2 = colorseasy[1]
    var color3 = colorseasy[2]
    var black = 'rgb(0,0,0)';
    document.getElementById("Color1").style.backgroundColor = color1;
    document.getElementById("Color2").style.backgroundColor = color2;
    document.getElementById("Color3").style.backgroundColor = color3;
    document.getElementById("Color4").style.backgroundColor = black;
    document.getElementById("Color5").style.backgroundColor = black;
    document.getElementById("Color6").style.backgroundColor = black;
    document.getElementById("Color7").style.backgroundColor = black;
    document.getElementById("Color8").style.backgroundColor = black;
    document.getElementById("Color9").style.backgroundColor = black;
    anseasy = Math.floor(Math.random()*3);
    coloranseasy = colorseasy[anseasy];
    document.getElementById("questiondisplay").innerHTML = "RGB Values:   " + coloranseasy;
}

function hard(){
    var black = 'rgb(0,0,0)';
    document.getElementById("message").innerHTML = "Click on the color which has the same rgb values as mentioned."
    for (let i = 0; i<6; i++){
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const color = "rgb(" + r +", " + g + ", " + b +")"
        colorshard.push(color);
    }
    var color1 = colorshard[0]
    var color2 = colorshard[1]
    var color3 = colorshard[2]
    var color4 = colorshard[3]
    var color5 = colorshard[4]
    var color6 = colorshard[5]
    document.getElementById("Color4").style.backgroundColor = color1;
    document.getElementById("Color5").style.backgroundColor = color2;
    document.getElementById("Color6").style.backgroundColor = color3;
    document.getElementById("Color7").style.backgroundColor = color4;
    document.getElementById("Color8").style.backgroundColor = color5;
    document.getElementById("Color9").style.backgroundColor = color6;
    document.getElementById("Color1").style.backgroundColor = black;
    document.getElementById("Color2").style.backgroundColor = black;
    document.getElementById("Color3").style.backgroundColor = black;
    anshard = Math.floor(Math.random()*6);
    coloranshard = colorshard[anshard];
    document.getElementById("questiondisplay").innerHTML = "RGB Values:   " + coloranshard;
}

function checkeasy(bid){
    var button = document.getElementById(bid);
    var style = getComputedStyle(button);
    var buttoncolor = style['background-color'];
    if (buttoncolor == coloranseasy){
        colormatches()
    }
    else{
        colordoesntmatch()
    }
}

function checkhard(bid){
    var button = document.getElementById(bid);
    var style = getComputedStyle(button);
    var buttoncolor = style['background-color'];
    if (buttoncolor == coloranshard){
        colormatches()
    }
    else{
        colordoesntmatch()
    }
}

function colormatches(){
    document.getElementById("message").innerHTML = "You Guessed it Right!! CONGRATULATIONS!!"
}

function colordoesntmatch(){
    document.getElementById("message").innerHTML = "Try Again!"
}
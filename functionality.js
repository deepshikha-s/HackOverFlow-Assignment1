var coloranseasy = [];
var coloranshard = []
var colorseasy = [];
var colorshard = [];
var anseasy = 0;
var anshard = 0;

function start() {
    const yellow = 'rgb(255, 255, 51)'
    const black = 'rgb(0,0,0)';
    document.getElementById("message").innerHTML = "Choose a mode to play"
    document.getElementById("header").style.backgroundColor = yellow;
    document.getElementById("questiondisplay").style.backgroundColor = yellow;
    document.getElementById("message").style.backgroundColor = yellow;
    document.getElementById("Color4").style.backgroundColor = black;
    document.getElementById("Color5").style.backgroundColor = black;
    document.getElementById("Color6").style.backgroundColor = black;
    document.getElementById("Color7").style.backgroundColor = black;
    document.getElementById("Color8").style.backgroundColor = black;
    document.getElementById("Color9").style.backgroundColor = black;
    document.getElementById("Color1").style.backgroundColor = black;
    document.getElementById("Color2").style.backgroundColor = black;
    document.getElementById("Color3").style.backgroundColor = black;
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
    const black = 'rgb(0,0,0)';
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
    const black = 'rgb(0,0,0)';
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
        colormatcheseasy()
    }
    else{
        colordoesntmatch(bid)
    }
}

function checkhard(bid){
    var button = document.getElementById(bid);
    var style = getComputedStyle(button);
    var buttoncolor = style['background-color'];
    if (buttoncolor == coloranshard){
        colormatcheshard()
    }
    else{
        colordoesntmatch(bid)
    }
}

function colormatcheseasy(){
    document.getElementById("message").innerHTML = "You Guessed it Right!! CONGRATULATIONS!!"
    document.getElementById("Color1").style.backgroundColor = coloranseasy;
    document.getElementById("Color2").style.backgroundColor = coloranseasy;
    document.getElementById("Color3").style.backgroundColor = coloranseasy;
    document.getElementById("header").style.backgroundColor = coloranseasy;
    document.getElementById("questiondisplay").style.backgroundColor = coloranseasy;
    document.getElementById("message").style.backgroundColor = coloranseasy;
}

function colormatcheshard(){
    document.getElementById("message").innerHTML = "You Guessed it Right!! CONGRATULATIONS!!"
    document.getElementById("Color4").style.backgroundColor = coloranshard;
    document.getElementById("Color5").style.backgroundColor = coloranshard;
    document.getElementById("Color6").style.backgroundColor = coloranshard;
    document.getElementById("Color7").style.backgroundColor = coloranshard;
    document.getElementById("Color8").style.backgroundColor = coloranshard;
    document.getElementById("Color9").style.backgroundColor = coloranshard;
    document.getElementById("header").style.backgroundColor = coloranshard;
    document.getElementById("questiondisplay").style.backgroundColor = coloranshard;
    document.getElementById("message").style.backgroundColor = coloranshard;
}

function colordoesntmatch(btid){
    const black = 'rgb(0,0,0)';
    document.getElementById("message").innerHTML = "Try Again!"
    document.getElementById(btid).style.backgroundColor = black;
}
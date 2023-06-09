img="";
Status="";
function preload(){
    img= loadImage("dog_cat.jpg");
}

function draw(){
    image(img,0,0,640,420);
    stroke("#FF0000");
    noFill();
    rect(30,60,450,350);
    text("Dog",45,75);

    fill("#FF0000");
    noFill();
    text("Cat",320,120);
    stroke("#FF0000");
    rect(300,90,270,320);
}


function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocussd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Object Detecting";
}
function modelLoaded(){
    console.log("Cocussd Is Intialized");
    Status=true;
    objectDetector.detect(img,gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
}
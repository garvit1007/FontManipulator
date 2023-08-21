NoseX = 0;
NoseY = 0;
LeftWristX = 0;
RightWristX = 0;
difference = 0;
input = "";
function setup() {
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded() {
    console.log('Model is Loaded');
}


function draw() {
    background("yellow");
    textSize(difference);
    document.getElementById("size_of_font").innerHTML = "The size of the font is " +difference + "px";
    input = document.getElementById("text_input").value;
    fill("red");
    stroke("red");
    text(input ,NoseX, NoseY);
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("Nose X = " +NoseX , "Nose Y = " + NoseY);
        LeftWristX = results[0].pose.leftWrist.x;
        RightWristX = results[0].pose.rightWrist.x;
        difference = floor(LeftWristX - RightWristX);
        console.log("Left Wrist X = " + LeftWristX, "Right Wrist X = " + RightWristX , "Difference = " +difference);

    }
}
noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup (){
    video= createCapture(VIDEO);
        video.size(550,500)

        canvas = createCanvas(550,550);
        canvas.position(560,150);

        poseNet= ml5.poseNet(video, modelLoaded);
        poseNet.on('pose',gotPoses);
    }

    function modelLoaded() 
    {
        console.log('PoseNet Is Initialized!');
       
    }

function gotPoses (results)
{
    if(results.length> 0)
    {
        console.log(results);
         noseX= results[0].pose.nose.x;
         noseY= results[0].pose.nose.y;
         console.log("noseX="+noseX+"noseY = " +noseY);
         rightWristX = results[0].pose.rightWrist.x;
         leftWristX = results[0].pose.leftWrist.x;
         difference = floor(leftWristX-rightWristX);
         console.log(" leftWristX = "+  leftWristX +"rightWristX ="+rightWristX );
    }
}


    function draw() {
        background ('black');
        document.getElementById("square_side").innerHTML="width And Height of a square will be=" + difference + "px";
        fill('#F900093');
        stroke('#F900093');
        square(noseX,noseY,difference);
    }
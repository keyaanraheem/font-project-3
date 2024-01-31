noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup() {
    video = createCapture(VIDEO)
    video.size(550, 500);

   
    canvas = createCanvas(550, 550);
    canvas.position(560, 150);
    
    
    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    background('green');
    document.getElementById('kamran').innerHTML = "Width and Height of the Text will be =" + difference + "px"
    fill('red');
   stroke('red')
    textSize(difference)
    text('kamran', 50, 300 )
   
}

function modelLoaded()
{
    console.log('PoseNet is Initialized!')
}

function gotPoses(results)
{
if(results.length > 0 )
{
    console.log(results)
    noseX = results[0].pose.nose.x
    noseY = results[0].pose.nose.y
    console.log('noseX =' + noseX+ 'noseY =' + noseY)

    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x
    difference = leftWristX - rightWristX;
}

}
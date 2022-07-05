noseX=0;
noseY=0;

function preload() {
  GatoCara = loadImage('GatoCara.png');
}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet está inicializado');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX = results[0].pose.nose.x-50;
    noseY = results[0].pose.nose.y-70;
  }
}

function draw() {
  image(video, 0, 0, 300, 300);
  image(GatoCara, noseX, noseY, 100, 100);
}

function take_snapshot() {    
  save('myFilterImage.png');
}


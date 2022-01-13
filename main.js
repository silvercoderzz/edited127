music1="";
music2="";
function setup()
{
    canvas=createCanvas(550,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function info()
{
       window.alert("Bring Left hand wrist to play Peter pan and  Right hand wrist to play Harry potter theme");                                                           
                                                        
}

function preload()
{
music1 = loadSound("music.mp3");
music2 = loadSound("music2.mp3");
}
function draw()
{
    image(video,0,0,550,500);
}

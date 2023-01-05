function preload(){
    img = loadImage('https://thatfishplace.in/wp-content/uploads/2021/12/aquarium-backgrounds-3.jpg');
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
    
}

function draw(){
    image(video , 98 , 95 ,450 , 330);

    image(img ,0 , 0 ,640 ,480);
}

function take_snapshot(){
    save('Yurii.png');
}
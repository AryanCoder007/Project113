function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 96, 96, 440, 300);
    tint(tint_color);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(10, 20, 25, 450);
    rect(606, 20, 25, 450);
    rect(45, 20, 550, 25);
    rect(45, 445, 550, 25);
    fill(200, 0, 0);
    stroke(200, 0, 0);
    circle(10, 20, 90);
    circle(630, 20, 90);
    circle(630, 470, 90);
    circle(10, 470, 90);
}

function take_snapshot(){
    save('picturetinted.png');
}

function filter_tint(){
    tint_color = document.getElementById('color-name').value;
}


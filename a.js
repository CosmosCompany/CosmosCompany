// The example preview does not connect the centers of the boxes!

// size of box
const d = 60;

function setup() {
    // Sets the screen to be 720 pixels wide and 400 pixels high
    createCanvas(400, 400);
}

//  correct the centering red box => size dependent!

function draw() {
    background(255, 200, 200, 10);
    stroke(0);

    // Bright red
    fill(255, 0, 0);
    rect(width * 0.5 - d * 0.5, height * 0.1, d, d);

    // Light blue
    fill(0, 153, 255);
    rect(width * 0.25 - d, height * 0.5 - d, d, d);

    //line

    stroke(0, 153, 255);
    line(
        width * 0.5 - d * 0.5,
        height * 0.1 + 0.5 * d,
        width * 0.25,
        height * 0.5 - 0.5 * d
    );

    // extra, connect corners
    // Yellow

    fill(255, 200, 100);
    rect(width * 0.75, height * 0.5 - d, d, d);

    stroke(0, 153, 255);
    line(
        width * 0.5 - d * 0.5 + d,
        height * 0.1 + d,
        width * 0.75,
        height * 0.5 - d
    );
}
// commit to
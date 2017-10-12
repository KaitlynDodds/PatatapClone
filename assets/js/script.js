
// array to store all circles 
var circles = [];

// when a key is pressed, add circle to circle array, draw circle 
function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;

    var newCircle = new Path.Circle(point, 500);
    newCircle.fillColor = "purple";

    circles.push(newCircle);
}

function onFrame(event) {
    // each frame, change fill color of each circle by 1
    circles.forEach(function(circle) {
        circle.fillColor.hue += 1; 
        circle.scale(.96);
    });
}
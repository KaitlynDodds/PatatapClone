
// when a key is pressed, draw a circle 
function onKeyDown(event) {
    var maxPoint = new Point(view.size.width, view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint * randomPoint;
    new Path.Circle(point, 50).fillColor = "purple";
}
var Rectangle = (function () {
    function Rectangle(_width, _height) {
        this.name = "Rectangle";
        this.width = _width;
        this.height = _height;
    }
    Rectangle.prototype.printArea = function () {
        var area = this.width * this.height;
        console.log("Area of " + this.name + " is " + area);
    };
    return Rectangle;
})();
var Circle = (function () {
    function Circle(_radius) {
        this.name = "Circle";
        this.radius = _radius;
    }
    Circle.prototype.printArea = function () {
        var area = Math.PI * Math.pow(this.radius, 2);
        console.log("Area of " + this.name + " is " + area);
    };
    return Circle;
})();
var shapes = [];
shapes[0] = new Rectangle(100, 200);
shapes[1] = new Circle(54);
for (var i = 0; i < shapes.length; i++) {
    var currentShape = shapes[i];
    currentShape.printArea();
}

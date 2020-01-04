interface Shape {
    name: string;
    printArea: () => void;
}

class Rectangle implements Shape {
    name: string = "Rectangle";

    height: number;
    width: number;

    constructor(_width: number, _height: number) {
        this.width = _width;
        this.height = _height;
    }

    printArea() {
        let area: number = this.width * this.height;
        console.log(`Area of ${this.name} is ${area}`);
    }
}

class Circle implements Shape {
    name: string = "Circle";

    radius: number;

    constructor(_radius: number) {
        this.radius = _radius;
    }

    printArea() {
        let area = Math.PI * Math.pow(this.radius, 2);
        console.log(`Area of ${this.name} is ${area}`);
    }
}

let shapes: Shape[] = [];

shapes[0] = new Rectangle(100, 200);
shapes[1] = new Circle(54);

for(let i = 0; i < shapes.length; i++) {
    let currentShape = shapes[i];
    currentShape.printArea();
}
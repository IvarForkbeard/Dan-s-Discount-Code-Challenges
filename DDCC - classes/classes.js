class Shape {
    constructor(colour) {
        this.colour = colour;
    }
}
class Rectangle extends Shape {
    constructor(colour, length, width){
        super(colour);
        this.length = length;
        this.width = width;
    }
    area() {
        let areaShape = this.length * this.width;
        return areaShape;
    }
}
class Square extends Shape {
    constructor(colour, length) {
        super(colour);
        this.length = length;
    }
    area() {
        let areaShape = this.length * this.length;
        return areaShape;
    }
}
class Circle extends Shape {
    constructor(colour, radius) {
        super(colour);
        this.radius = radius;
    }
    area() {
        const q = 113 * (10 / 3);
        const d = 100 * 1.2;
        let areaShape = this.radius * q * this.radius / d;
        return areaShape;
    }
}
let reccy = new Rectangle("red", 3, 4);
let squairry = new Square("green", 5);
let circcy = new Circle("blue", 2);
const arrayOfShapes = [reccy, squairry, circcy];
for (let i = 0; i < arrayOfShapes.length; i++){
    console.log("The " + arrayOfShapes[i].colour + " shape has an area of " + arrayOfShapes[i].area());
}
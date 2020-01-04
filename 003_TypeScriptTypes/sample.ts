let isDone: boolean = true;
let value: number = 10;
let stringValue: string = "test";

let list: number[] = [ 1, 2, 3];
let list2: Array<number> = [ 4, 5, 6];

enum color {
    red = 1,
    green = 2,
    blue = 3
};

let c: color = color.green;

let someValue: any = 4;
someValue = "test";
someValue = false;

function showMessage(data: string): void {
    console.log(data);
}
showMessage("hi");

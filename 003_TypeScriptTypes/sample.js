var isDone = true;
var value = 10;
var stringValue = "test";
var list = [1, 2, 3];
var list2 = [4, 5, 6];
var color;
(function (color) {
    color[color["red"] = 1] = "red";
    color[color["green"] = 2] = "green";
    color[color["blue"] = 3] = "blue";
})(color || (color = {}));
;
var c = color.green;
var someValue = 4;
someValue = "test";
someValue = false;
function showMessage(data) {
    console.log(data);
}
showMessage("hi");

var Human = (function () {
    function Human(_name, _age, selector) {
        this.name = _name;
        this.age = _age;
        this.messageElementId = document.querySelector(selector);
    }
    Human.prototype.say = function () {
        var message = "My name is " + this.name + ", I'm " + this.age + " years old";
        this.messageElementId.innerHTML = message;
    };
    return Human;
})();
var h = new Human("Vasia", 25, "#output");
h.say();

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
function Override(label) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: function () { return label; }
        });
    };
}
var Test = (function () {
    function Test() {
        this.name = "...";
    }
    __decorate([
        Override("Hello Prop")
    ], Test.prototype, "name");
    return Test;
})();
var t = new Test();
console.log(t.name);
function ReadOnly(target, key) {
    Object.defineProperty(target, key, { writable: false });
}
var Test2 = (function () {
    function Test2() {
    }
    __decorate([
        ReadOnly
    ], Test2.prototype, "name");
    return Test2;
})();
var t2 = new Test2();
t2.name = "Vasia";
console.log(t2.name);

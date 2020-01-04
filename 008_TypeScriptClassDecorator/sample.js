var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
function testClassDecorator() {
    return (target) => {
        let newConstructor = function () {
            target.apply(this);
            this.newProp = 123;
        };
        return newConstructor;
    };
}
let Test3 = class {
    constructor() {
        this.prop1 = 10;
    }
};
Test3 = __decorate([
    testClassDecorator()
], Test3);
let t3 = new Test3();
console.log(t3);

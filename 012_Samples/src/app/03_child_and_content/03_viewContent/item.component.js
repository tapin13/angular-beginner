var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var ItemComponent = (function () {
    function ItemComponent() {
    }
    ItemComponent.prototype.changeData = function () {
        this._data = new Date().getTime();
    };
    Object.defineProperty(ItemComponent.prototype, "data", {
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    ItemComponent = __decorate([
        core_1.Component({
            selector: 'item',
            templateUrl: 'item.component.html'
        })
    ], ItemComponent);
    return ItemComponent;
})();
exports.ItemComponent = ItemComponent;

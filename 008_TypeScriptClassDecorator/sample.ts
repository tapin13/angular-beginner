function testClassDecorator() {
    return (target) => {
        let newConstructor: any = function() {
            target.apply(this);
            this.newProp = 123;
        }

        return newConstructor;
    }
}

@testClassDecorator()
class Test3 {
    prop1 = 10;
}

let t3 = new Test3();
console.log(t3);
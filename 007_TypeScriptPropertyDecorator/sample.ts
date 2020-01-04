function Override(label: string) {
    return function(target: any, key: string) {
        Object.defineProperty(target, key, {
            configurable: false,
            get: () => label
        });
    }
}

class Test {
    @Override("Hello Prop")
    name: string = "...";
}

let t = new Test();
console.log(t.name);

function ReadOnly(target: any, key: string) {
    Object.defineProperty(target, key, { writable: false });
}

class Test2 {
    @ReadOnly
    name: string;
}

let t2 = new Test2();
t2.name = "Vasia";
console.log(t2.name);
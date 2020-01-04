class Human {
    name: string;
    age: number;
    private messageElementId: any;

    constructor(_name: string, _age: number, selector: string) {
        this.name = _name;
        this.age = _age;
        this.messageElementId = document.querySelector(selector);
    }

    say() {
        let message = `My name is ${this.name}, I'm ${this.age} years old`;
        this.messageElementId.innerHTML = message;        
    }
}

let h = new Human("Vasia", 25, "#output");
h.say();

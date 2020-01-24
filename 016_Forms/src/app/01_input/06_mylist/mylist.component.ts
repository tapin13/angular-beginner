import { Component } from "@angular/core";

@Component({
    selector: 'app-mylist',
    templateUrl: './mylist.component.html'
})
export class MyListComponent {
    public list: string[] = [];

    constructor() {}

    onKey(data: string) {
        this.list.push(data);
    }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app2',
    templateUrl: 'app2.component.html'
})
export class App2Component implements OnInit {
    public id: number;
    public name: string;
    public itemArray: any[];

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        this.http.get('app/items').subscribe(
            (result: any) => {
                this.itemArray = [ ...result ];
            },
            error => console.error(error.statusText)
        );
    }

    setData() {
        this.http.post('app/items', {
            id: this.id,
            name: this.name
        }).subscribe(
            result => {
                if(result) {
                    this.itemArray.push(result);
                }
            },
            error => console.error(error.statusText)
        );
    }
}

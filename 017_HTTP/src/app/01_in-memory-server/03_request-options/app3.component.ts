import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Component({
    selector: 'app3',
    templateUrl: 'app3.component.html'
})
export class App3Component implements OnInit {
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
        let url = 'app/items';
        let  myHeaders = new HttpHeaders({
            "Content-Type": "application/json",
            "X-MyHeader": "Hello world"
        });
        let data = {
            id: this.id,
            name: this.name
        };

        this.http.post(url, data, { headers: myHeaders }).subscribe(
            result => {
                if(result) {
                    this.itemArray.push(result);
                }
            },
            error => console.error(error.statusText)
        );
    }
}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from '@angular/common/http';

@Component({
    selector: 'app4',
    templateUrl: 'app4.component.html'
})
export class App4Component implements OnInit {
    public id: number;
    public name: string;
    public itemArray: any[];

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
        this.getData();
    }

    getData() {
        let params = new HttpParams();
        params.set('a', '1');
        params.set('b', 'value');
        let url = 'app/items';

        this.http.get(url, { params }).subscribe(
            (result: any) => {
                this.itemArray = [ ...result ];
            },
            error => console.error(error.statusText)
        );
    }
}

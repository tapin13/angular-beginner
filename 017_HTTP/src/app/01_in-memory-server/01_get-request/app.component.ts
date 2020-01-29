import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public itemArray: any[];

    constructor(private http: HttpClient) {

    }

    getData() {
        this.http.get('app/items').subscribe(
            (result: any) => {
                this.itemArray = [ ...result ];
            },
            error => console.error(error.statusText)
        );
    }
}

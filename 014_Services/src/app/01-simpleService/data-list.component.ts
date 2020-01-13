import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
    selector: 'data-list',
    templateUrl: 'data-list.component.html',
})
export class DataListComponent implements OnInit {
    public itemsSource: string[];

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {
        this.itemsSource = this.dataService.getData();
    }
}

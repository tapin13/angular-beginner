import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
    selector: 'wiki',
    templateUrl: 'wiki.component.html'
})
export class WikiComponent {
    public items: any[] = [];

    constructor(private wiki: WikiService) { }

    search(term: string) {
        this.wiki.search(term).subscribe(
            (data: any[]) => { 
                this.items = data;
             },
            err => console.log(err)
        );
    }
}

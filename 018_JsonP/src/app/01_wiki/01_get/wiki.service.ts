import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable()
export class WikiService {
    constructor(private jsonp: HttpClient) {}

    public search(term: string) {
        let wikiUrl = 'https://en.wikipedia.org/w/api.php';

        wikiUrl += `?search=${term}&action=opensearch&format=json&callback=JSONP_CALLBACK`;

        return this.jsonp.jsonp(wikiUrl, 'JSONP_CALLBACK').pipe(map(
                response => {
                    let result: any[] = [];

                    let names = response[1];
                    let descriptions = response[2];
                    let links = response[3];
                    let length = names.length;

                    for (let i = 0; i < length; i++) {
                        result.push({
                            name: names[i],
                            link: links[i],
                            description: descriptions[i],
                        });
                    }

                    return result;
                }
            )
        );
    }
}

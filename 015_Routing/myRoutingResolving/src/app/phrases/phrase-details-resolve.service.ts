import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Phrase } from '../shared/phrase';
import { PhraseService } from '../shared/phrase.service';

@Injectable()
export class PhraseDetailsResolve implements Resolve<Phrase> {
    constructor(private service: PhraseService, private router: Router) {

    }

    resolve(router: ActivatedRouteSnapshot): Promise<Phrase> {
        let id = +router.params['id'];

        return this.service.getPhrase(id).then(phrase => {
            if(phrase) {
                return phrase;
            } else {
                this.router.navigate(['/phrases']);
                // return false;
            }
        });
    }
}

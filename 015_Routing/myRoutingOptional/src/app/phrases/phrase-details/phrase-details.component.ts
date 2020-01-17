import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { PhraseService } from "../../shared/phrase.service";
import { Phrase } from "../../shared/phrase";

@Component({
    selector: "app-phrase-details",
    templateUrl: "./phrase-details.component.html",
    styleUrls: ["./phrase-details.component.css"]
})
export class PhraseDetailsComponent implements OnInit {
    phrase: Phrase;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: PhraseService
    ) {}

    ngOnInit() {
        // Observable
        this.activatedRoute.params.forEach((params: Params) => {
            const id = +params['id'];
            this.service.getPhrase(id).then(result => this.phrase = result);
        });

        // Snapshot
        // const id = +this.activatedRoute.snapshot.params['id'];
        // this.service.getPhrase(id).then(result => this.phrase = result);
    }

    goToPhraseList() {
        let pId = this.phrase ? this.phrase.id : null;

        this.router.navigate(['/phrases', { id: pId, param1: "test", param2: 123 }]);
    }
}

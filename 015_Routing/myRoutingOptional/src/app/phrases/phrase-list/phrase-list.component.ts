import { Component, OnInit } from "@angular/core";

import { Phrase } from "../../shared/phrase";
import { PhraseService } from "../../shared/phrase.service";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
    selector: "app-phrase-list",
    templateUrl: "./phrase-list.component.html",
    styleUrls: ["./phrase-list.component.css"]
})
export class PhraseListComponent implements OnInit {
    selectedId: number;
    phrases: Phrase[];

    constructor(private router: Router, 
        private activatedRoute: ActivatedRoute,
        private phraseService: PhraseService) {}

    ngOnInit() {
        this.activatedRoute.params.forEach((params: Params) => {
            this.selectedId = +params['id'];
            this.phraseService.getAll().then(result => (this.phrases = result));
        })
    }

    isSelected(phrase: Phrase) {
        return phrase.id === this.selectedId;
    }

    onSelect(selected: Phrase) {
        this.router.navigate(["phrase", selected.id]);
    }
}

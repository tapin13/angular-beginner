import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { PhraseService } from "../../shared/phrase.service";
import { Phrase } from "../../shared/phrase";
import { CanDeactivateGuard } from 'src/app/shared/can-deactivate-guard';

@Component({
    selector: "app-phrase-details",
    templateUrl: "./phrase-details.component.html",
    styleUrls: ["./phrase-details.component.css"]
})
export class PhraseDetailsComponent implements OnInit, CanDeactivateGuard {
    phrase: Phrase;
    editValue: string;
    editLanguage: string;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private service: PhraseService
    ) {}

    ngOnInit() {
        // Observable
        this.activatedRoute.params.forEach((params: Params) => {
            const id = +params['id'];
            this.service.getPhrase(id).then(result => {
                this.phrase = result;
                this.editValue = this.phrase.value;
                this.editLanguage = this.phrase.language;
            });
        });

        // Snapshot
        // const id = +this.activatedRoute.snapshot.params['id'];
        // this.service.getPhrase(id).then(result => this.phrase = result);
    }

    goToPhraseList() {
        this.router.navigate(['../'], { relativeTo: this.activatedRoute });
    }

    canDeactivate(): Promise<boolean> | boolean {
        if(!this.phrase) {
            return true;
        }

        if(this.phrase.value === this.editValue && this.phrase.language === this.editLanguage) {
            return true;
        }

        return confirm("Sure don't save changes?");
    }

    save() {
        this.phrase.value = this.editValue;
        this.phrase.language = this.editLanguage;
        this.goToPhraseList();
    }
}

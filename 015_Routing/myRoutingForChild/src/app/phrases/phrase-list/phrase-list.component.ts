import { Component, OnInit } from "@angular/core";

import { Phrase } from "../../shared/phrase";
import { PhraseService } from "../../shared/phrase.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-phrase-list",
  templateUrl: "./phrase-list.component.html",
  styleUrls: ["./phrase-list.component.css"]
})
export class PhraseListComponent implements OnInit {
  phrases: Phrase[];

  constructor(private router: Router, private phraseService: PhraseService) { }

  ngOnInit() {
    this.phraseService.getAll()
      .then(result => this.phrases = result);
  }

  onSelect(selected: Phrase) {
    this.router.navigate(['phrase', selected.id]);
  }
}

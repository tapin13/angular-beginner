import { Injectable } from '@angular/core';

import { Phrase } from './phrase';

let phrases = [
  new Phrase(1, 'Hello World', 'English'),
  new Phrase(1, 'Halo Mundo', 'Spanish'),
  new Phrase(1, 'Привет мир', 'Russian'),
];

let PhrasePromise = Promise.resolve(phrases);

@Injectable()
export class PhraseService {
  getAll(): Promise<Phrase[]> {
    return PhrasePromise;
  }

  getPhrase(id: number): Promise<Phrase> {
    return PhrasePromise
      .then(phrases => phrases.find(x => x.id == id));
  }
}

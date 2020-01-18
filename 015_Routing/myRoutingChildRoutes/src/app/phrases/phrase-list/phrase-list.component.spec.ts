import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseListComponent } from './phrase-list.component';

describe('PhraseListComponent', () => {
  let component: PhraseListComponent;
  let fixture: ComponentFixture<PhraseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhraseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhraseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

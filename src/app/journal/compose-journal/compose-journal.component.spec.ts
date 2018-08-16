import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposeJournalComponent } from './compose-journal.component';

describe('ComposeJournalComponent', () => {
  let component: ComposeJournalComponent;
  let fixture: ComponentFixture<ComposeJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposeJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposeJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SessionService } from '../../service/session.service';

@Component({
  selector: 'app-journal-card',
  templateUrl: './journal-card.component.html',
  styleUrls: ['./journal-card.component.css']
})
export class JournalCardComponent implements OnInit {

  @Input() journal: any;
  @Output() isComposedByMe: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  constructor(private _sessionService: SessionService) { }

  ngOnInit() {
    if(this.isComposedByMe && this.journal && this.journal.authorId) {
      this.isComposedByMe.emit(this._sessionService.getPrincipal().id === this.journal.authorId)
    }
  }

}

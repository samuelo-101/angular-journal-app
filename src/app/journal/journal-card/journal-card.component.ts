import { Component, OnInit, Input } from '@angular/core';
import { Journal } from '../../model/Journal';

@Component({
  selector: 'app-journal-card',
  templateUrl: './journal-card.component.html',
  styleUrls: ['./journal-card.component.css']
})
export class JournalCardComponent implements OnInit {

  @Input() journal: Journal;

  constructor() { }

  ngOnInit() {
  }

}

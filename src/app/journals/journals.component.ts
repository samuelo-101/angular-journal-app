import { Component, OnInit } from '@angular/core';
import { Journal } from '../model/Journal';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { Dictionary } from '../constants/Dictionary';

@Component({
  selector: 'app-journals',
  templateUrl: './journals.component.html',
  styleUrls: ['./journals.component.css']
})
export class JournalsComponent implements OnInit {

  journals: Journal[] = [];
  private noContentMessage: String = Dictionary.MESSAGE_NO_JOURNAL_ENTRIES;

  constructor(private _router: Router, private _apiService: ApiService) {

  }

  ngOnInit() {
    this._apiService.getJournalList()
      .subscribe(journals => {
        this.journals = journals;
        console.log('this.journalListItems', this.journals);
      });
  }

  onCountChanged(event) {

  }

  navComposeJournal() {
    this._router.navigate(['/journals/compose']);
  }

  onJournalItemClick(id: number) {
    this._router.navigate([`/journals/view/${id}`]);
  }

}

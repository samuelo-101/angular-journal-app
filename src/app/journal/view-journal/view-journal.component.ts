import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Journal } from '../../model/Journal';
import { ApiService } from '../../service/api.service';
import { Dictionary } from '../../constants/Dictionary';

@Component({
  selector: 'app-view-journal',
  templateUrl: './view-journal.component.html',
  styleUrls: ['./view-journal.component.css']
})
export class ViewJournalComponent implements OnInit {

  private _journalId: number;
  journal: Journal;

  private _composedByMeMessage: String;

  constructor(private _router: Router, private _route: ActivatedRoute, private _apiService: ApiService) { }

  ngOnInit() {
    this._route.params
    .subscribe(param => {
      console.log(param);
      this._journalId = param.id;
      this._fetchJournalById();
    });
  }

  onComposedByMeCheck(composedByMe: Boolean) {
    this._composedByMeMessage = composedByMe ? Dictionary.COMPOSED_BY_ME_POSITIVE_MESSAGE : Dictionary.COMPOSED_BY_ME_NEGATIVE_MESSAGE;
  }

  private _fetchJournalById(): void {
    this._apiService.getJournalById(this._journalId)
    .subscribe(journal => {
      this.journal = journal;
    });
  }
}

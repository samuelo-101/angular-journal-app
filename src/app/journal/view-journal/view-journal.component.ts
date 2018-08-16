import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Journal } from '../../model/Journal';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-view-journal',
  templateUrl: './view-journal.component.html',
  styleUrls: ['./view-journal.component.css']
})
export class ViewJournalComponent implements OnInit {

  private _journalId: number;
  journal: Journal;

  constructor(private _router: Router, private _route: ActivatedRoute, private _apiService: ApiService) { }

  ngOnInit() {
    this._route.params
    .subscribe(param => {
      console.log(param);
      this._journalId = param.id;
      this._fetchJournalById();
    });
  }

  private _fetchJournalById(): void {
    this._apiService.getJournalById(this._journalId)
    .subscribe(journal => {
      this.journal = journal;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { JournalItem } from '../model/JournalItem';
import { ApiService } from '../service/api.service';
import { SnackbarService } from '../service/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compose-journal',
  templateUrl: './compose-journal.component.html',
  styleUrls: ['./compose-journal.component.css']
})
export class ComposeJournalComponent implements OnInit {

  journal: JournalItem = new JournalItem();
  showLoadingIndicator: Boolean = false;

  constructor(private _router: Router, private _apiService: ApiService, private _snackbarService: SnackbarService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.journal);
    this._apiService.createJournal(this.journal)
    .subscribe(response => {
      console.log('ComposeJournalComponent', response);
      this._snackbarService.show('Journal Created');
      setTimeout(() => {
          this._router.navigate(['/journals']);
      }, 1100);
    });
  }

}

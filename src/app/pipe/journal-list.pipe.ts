import { Pipe, PipeTransform } from '@angular/core';
import { Journal } from '../model/Journal';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'journalList'
})
export class JournalListPipe implements PipeTransform {

  private _pipe: DatePipe = new DatePipe('en-US');

  transform(journals: Journal[]): any {
    let result: any[] = [];
    journals.map(journal => {
      const createdOn = journal.createdOn;
      const ceratedOnDateInstance = new Date(createdOn[0], createdOn[1], createdOn[2], createdOn[3], createdOn[4]);
      const user = journal.user;
      result.push(
        {
          id: journal.id, title: journal.title, content: journal.content,
          createdOn: this._pipe.transform(ceratedOnDateInstance, 'dd MMM yyyy hh:mm'),
          firstCharOfTitle: journal.title.charAt(0), author: user ? user.firstName + ' ' + user.lastName : ''
        }
      );
    });
    return result;
  }

}

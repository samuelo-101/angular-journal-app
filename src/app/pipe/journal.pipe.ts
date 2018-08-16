import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Journal } from '../model/Journal';

@Pipe({
  name: 'journal'
})
export class JournalPipe implements PipeTransform {

  private _pipe: DatePipe = new DatePipe('en-US');

  transform(journal: Journal): any {
    const createdOn = journal.createdOn;
    const ceratedOnDateInstance = new Date(createdOn[0], createdOn[1], createdOn[2], createdOn[3], createdOn[4]);
    const user = journal.user;
    return {
      id: journal.id, title: journal.title, content: journal.content,
      createdOn: this._pipe.transform(ceratedOnDateInstance, 'dd MMM yyyy hh:mm a'),
      firstCharOfTitle: journal.title.charAt(0), author: user ? user.firstName + ' ' + user.lastName : ''
    };
  }

}

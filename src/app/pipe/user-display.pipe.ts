import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../model/User';

@Pipe({
  name: 'userDisplay'
})
export class UserDisplayPipe implements PipeTransform {

  transform(user: User, type:any): any {
    //const type = (args && args.length > 0) ? args[0] : null;
    if(!type || type === 'full') {
      return user.firstName + ' ' + user.lastName;
    } else if(type === 'firstOnly') {
      return user.firstName
    } else if(type === 'lastOnly') {
      return user.lastName
    } else {
      return user.firstName + ' ' + user.lastName;
    }
  }

}

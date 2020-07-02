import { Pipe, PipeTransform } from '@angular/core';
import {User} from './IUser'

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: User [], ...args: any[]): User[] {
    if (args[0]=="All") {
      return value
      
    }
    return value.filter(a=>a.gender==args[0]);
  }

}

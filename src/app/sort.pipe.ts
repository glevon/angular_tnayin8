import { Pipe, PipeTransform } from '@angular/core';
import { User } from './IUser';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: User[], ...args: any[]): User [] {
    if (args[0]=="Name") {
      return value.sort((a,b)=>a.name.first > b.name.first? 1:-1);
    }
    else if (args[0]=="Surename") {
      return value.sort((a,b)=>a.name.last > b.name.last? 1:-1);
    }
    else if (args[0]=="Age") {
      return value.sort((a,b)=>a.dob.age > b.dob.age? 1:-1);
    }
    else if (args[0]=="Gender") {
      return value.sort((a,b)=>a.gender > b.gender? 1:-1);
    }
    else if (args[0]=="Image") {
      return value.sort((a,b)=>a.picture.large > b.picture.large? 1:-1);
    }
    return value
  }

}

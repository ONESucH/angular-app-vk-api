import {Pipe, PipeTransform} from '@angular/core';
import {ShablonUserComponent} from './shablon-user.component';

@Pipe({
  name: 'shablonUser',
  pure: false
})

export class ShablonUserPipe implements PipeTransform {

  transform(items: any[], filter: ShablonUserComponent): any {

    if (!items || !filter) {
      return items;
    }

    console.log('items', items);
    console.log('ShablonUserComponent', ShablonUserComponent);

    return items.filter(item => {

      return item.title.indexOf(filter.arr) !== -1;
    });
  }

}

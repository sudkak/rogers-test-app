import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform( items: any, term: any): any {
    console.log("term is " + term);
    if (term === undefined) return items;

    return items.filter( item => {
          if ( item.includes(term)) {
            return true;
          }

    });

  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tabs'
})
export class TabsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    


    // return value.filter( country => country.tabs );

    console.log(value);
    console.log(args);

    return value.filter( country => country.name === args )  ;
  }

}

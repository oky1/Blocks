import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objReverse'
})
export class ObjReversePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let newobj = {};
  	Object.keys(value).sort((a, b) => {return 2 - 1 }).
  	forEach(key =>  { newobj[key] = value[key]});
 	return value = newobj
  }
}

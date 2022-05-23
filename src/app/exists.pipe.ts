import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exists'
})
export class ExistsPipe implements PipeTransform {

  transform(value:{name:string, age:number}[], newone:{name:string, age:number}): any {
   value= value.filter(item=>{
      if(item.age!==newone.age && item.name!==newone.name){
        return item;
      }
    })

    return value;
  }

}

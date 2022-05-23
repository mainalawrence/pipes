import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exists'
})
export class ExistsPipe implements PipeTransform {

  transform(value:{name:string, age:number}[]): any {
   value=value.filter(item=>{
     value.map(newone=>{
      if(item.age!==newone.age && item.name!==newone.name) return newone;
      return ;
     })
    })
    

    return value;
  }

}

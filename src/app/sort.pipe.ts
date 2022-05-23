import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value:{name:string,age:number}[]):{name:string,age:number}[] {
    return value.sort((a:any,b:any)=>{
return a.name-b;
    });
  }

}

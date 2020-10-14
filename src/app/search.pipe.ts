import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value:any,filterString:string,propName:string ): any {
    if(value.length===0||filterString==''){
      return value;
    }
    const myArray=[];
       for(const item of value){
         if(item[propName]===filterString){
          myArray.push(item);
         }
  
        }
       return myArray;
      }


}

import {Pipe, PipeTransform} from '@angular/core';
import { Animal } from './animal.model';

@Pipe ({
  name: "sex",
  pure: false
})

export class SexPipe implements PipeTransform{
  transform(input: Animal[], sexFilter){
   var output: Animal[] = [];
   if(sexFilter === "female"){
     for (var i = 0; i < input.length; i++) {
       if (input[i].sex === "female") {
         output.push(input[i]);
       }
      } return output;
    } else if (sexFilter === "male"){
       for(var i = 0; i < input.length; i ++){
         if (input[i].sex === "male"){
           output.push(input[i]);
         }
       } return output;
     } else if (sexFilter === "other"){
          for(var i = 0; i < input.length; i ++){
            if (input[i].sex === "o"){
              output.push(input[i]);
            }
          }
     } else {
       return input;
     }
   }
}

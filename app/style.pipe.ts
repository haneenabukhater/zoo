import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe ({
  name: "style",
  pure: false
})

export class StylePipe implements PipeTransform{
  transform(input: Keg[], styleFilter){
   var output: Keg[] = [];
   if(styleFilter === "IPA"){
     for (var i = 0; i < input.length; i++) {
       if (input[i].style === "IPA") {
         output.push(input[i]);
       }
      } return output;
    } else if (styleFilter === "porter"){
       for(var i = 0; i < input.length; i ++){
         if (input[i].style === "porter"){
           output.push(input[i]);
         }
       } return output;
     } else if (styleFilter === "session"){
          for(var i = 0; i < input.length; i ++){
            if (input[i].style === "session"){
              output.push(input[i]);
            }
          }
     } else {
       return input;
     }
   }
}

import {Pipe, PipeTransform} from '@angular/core';
import { Keg } from './keg.model';

@Pipe ({
  name: "completeness",
  pure: false
})

export class CompletenessPipe implements PipeTransform{
  transform(input: Keg[], priceFilter){
   var output: Keg[] = [];
   if(priceFilter === "kegsBelowTen"){
     for (var i = 0; i < input.length; i++) {
       if (input[i].price <= 6) {
         output.push(input[i]);
       }
      } return output;
     } else if (priceFilter === "kegsAboveTen"){
       for(var i = 0; i < input.length; i ++){
         if (input[i].price >= 7){
           output.push(input[i]);
         }
       }
       return output;
     } else{
       return input;
     }


 }
}

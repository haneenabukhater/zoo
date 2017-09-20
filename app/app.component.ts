import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <h1>Tap Room</h1>
    <h3>{{currentFocus}}</h3>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
    <edit-keg [childSelectedKeg] = "masterKegs" (clickSender) = "editButtonClicked($event)"></edit-keg>
      <div *ngFor = "let newKeg of masterKegs">
        <h4>{{newKeg.name}}</h4>
        <div>
          <ul>
              <li>{{newKeg.brand}}</li>
              <li>{{newKeg.price}}</li>
              <li>{{newKeg.alcohol}}</li>
         </ul>
      </div>
  </div>
  </div>
  `

})
export class AppComponent{
   currentFocus: string = 'Our Kegs';
   selectedKeg = null;
   masterKegs: Keg[] = [
    ];

  addKeg(newKegFromChild: Keg){
    this.masterKegs.push(newKegFromChild);
  }
  editButtonClicked(clickedKeg){
    this.selectedKeg = clickedKeg;
  }
}

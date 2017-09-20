import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <h1>Tap Room</h1>
    <h3>{{currentFocus}}</h3>
    <new-keg (newKegSender)="addKeg($event)"></new-keg>
    <edit-keg [childSelectedKeg] = "selectedKeg" (editButtonClickedSender) = "finishedEditing()"></edit-keg>
    <keg-list [childKegList] = "masterKegs" (clickSender)="editButtonClicked($event)"></keg-list>
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

  finishedEditing() {
    this.selectedKeg = null;
  }

}

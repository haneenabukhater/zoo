import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
   <ul>
     <li (click)="(currentKeg)" *ngFor="let currentKeg of childKegList">{{currentKeg.name}} {{currentKeg.brand}} {{currentKeg.price}} {{currentKeg.alcohol}}
       <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
     </li>
   </ul>
 `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }


}

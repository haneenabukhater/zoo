import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';


@Component({
  selector: 'keg-list',
  template: `
    <select (change)="onChange($event.target.value)">
       <option value="allKegs" selected="selected">All Kegs</option>
       <option value="kegsBelowTen">Price is less than $6</option>
       <option value="kegsAboveTen" >Price is greater than $6</option>
     </select>
   <ul>
     <li (click)="(currentKeg)" *ngFor="let currentKeg of childKegList | completeness: filterByPrice">{{currentKeg.name}} {{currentKeg.brand}} {{currentKeg.price}} {{currentKeg.alcohol}} <p [class]="pintAlert(currentKeg)" >{{currentKeg.pints}}</p><br>{{currentKeg.style}}
       <button (click)="editButtonHasBeenClicked(currentKeg)">Edit!</button>
       <button (click)="pintHasBeenSold(currentKeg)">Sell A Pint!</button>
     </li>
   </ul>
 `
})

export class KegListComponent {
  @Input() childKegList: Keg[];
  @Output() clickSender = new EventEmitter();
  filterByPrice: string = "allKegs";

  editButtonHasBeenClicked(kegToEdit: Keg) {
    this.clickSender.emit(kegToEdit);
  }

  pintHasBeenSold(kegToSellPintsFrom: Keg) {
    if (kegToSellPintsFrom.pints > 0) {
      kegToSellPintsFrom.pints = kegToSellPintsFrom.pints - 1;
    }
  }

  pintAlert(currentKeg) {
    if (currentKeg.pints <= 10) {
      return "bg-danger";
    }
  }
  onChange(optionFromMenu) {
  this.filterByPrice = optionFromMenu;
}


}

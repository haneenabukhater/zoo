import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector:'edit-keg',
  template: `
  <div *ngIf="childSelectedKeg">

      <div>
       <label>Enter Name:</label>
       <input [(ngModel)]="childSelectedKeg.name">
      </div>
      <div>
        <label>Enter Brand:</label>
        <input [(ngModel)]="childSelectedKeg.brand" type="text">
      </div>
      <div>
        <label>Enter Price:</label>
        <input [(ngModel)]="childSelectedKeg.price" type="number">
      </div>
      <div>
        <label>Enter Alcohol Content:</label>
        <input [(ngModel)]="childSelectedKeg.alcohol" type="number" >
      </div>
      <button (click)="editButtonClicked()">Edit Keg!</button>
    
  </div>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() editButtonClickedSender = new EventEmitter();

  editButtonClicked() {
    this.editButtonClickedSender.emit();
  }

}

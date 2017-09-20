import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector:'edit-keg',
  template: `
  <
  <form>
    <div>
     <label>Enter Name:</label>
     <input #name>
    </div>
    <div>
      <label>Enter Brand:</label>
      <input #brand>
    </div>
    <div>
      <label>Enter Price:</label>
      <input #price type="number" >
    </div>
    <div>
      <label>Enter Alcohol Content:</label>
      <input #alcohol type="number" >
    </div>
    <button (click)="editButtonClicked()">Edit Keg!</button>
  </form>
  `
})

export class EditKegComponent {
  @Input() childSelectedKeg: Keg;
  @Output() editButtonClickedSender = new EventEmitter();

  editButtonClicked() {
    this.editButtonClickedSender.emit();
  }

}

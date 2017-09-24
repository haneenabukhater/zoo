import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector:'edit-animal',
  template: `
  <div *ngIf="childSelectedAnimal">

      <div>
       <label>Enter Name:</label>
       <input [(ngModel)]="childSelectedAnimal.name">
      </div>
      <div>
        <label>Enter Species:</label>
        <input [(ngModel)]="childSelectedAnimal.species" type="text">
      </div>
      <div>
        <label>Enter Age:</label>
        <input [(ngModel)]="childSelectedAnimal.age" type="number">
      </div>
      <div>
        <label>Enter Diet Content:</label>
        <input [(ngModel)]="childSelectedAnimal.diet" >
      </div>
      <button (click)="editButtonClicked()">Edit Animal!</button>

  </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() editButtonClickedSender = new EventEmitter();

  editButtonClicked() {
    this.editButtonClickedSender.emit();
  }

}

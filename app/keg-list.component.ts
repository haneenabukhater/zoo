import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';


@Component({
  selector: 'animal-list',
  template: `
    <select (change)="onChange($event.target.value)">
       <option value="allAnimals" selected="selected">All Animals</option>
       <option value="animalsBelowTen">Age is less than 2 yrs</option>
       <option value="animalsAboveTen" >Age is greater than 2 yrs</option>
     </select>
   <ul>
     <li (click)="(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | completeness: filterByAge">{{currentAnimal.name}} {{currentAnimal.species}} {{currentAnimal.age}} {{currentAnimal.alcohol}} <p [class]="caretakersAlert(currentAnimal)" >{{currentAnimal.caretakers}}</p><br>{{currentAnimal.sex}}
       <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
       <button (click)="caretakerHasLeft(currentAnimal)">Caretaker Left!</button>
     </li>
   </ul>
 `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();
  filterByAge: string = "allAnimals";

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  caretakerHasLeft(animalToCaretakersFrom: Animal) {
    if (animalToCaretakersFrom.caretakers > 0) {
      animalToCaretakersFrom.caretakers = animalToCaretakersFrom.caretakers - 1;
    }
  }

  caretakersAlert(currentAnimal) {
    if (currentAnimal.caretakers <= 10) {
      return "bg-danger";
    }
  }
  onChange(optionFromMenu) {
  this.filterByAge = optionFromMenu;
}


}

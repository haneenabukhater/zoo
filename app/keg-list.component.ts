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
   <div class="col-md-12">
     <li (click)="(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | completeness: filterByAge">{{currentAnimal.name}} <p><strong>Species: </strong>{{currentAnimal.species}}</p> <p><strong>Age: </strong>{{currentAnimal.age}}</p>  <p><strong>Diet: </strong>{{currentAnimal.diet}}</p> <p><strong>Zoo Location: </strong>{{currentAnimal.zooLocation}}</p><p><strong>Number of Care Takers:</strong></p> <p [class]="caretakersAlert(currentAnimal)" >{{currentAnimal.caretakers}}</p><p> <strong>Sex of the Animal: </strong> </p>{{currentAnimal.sex}}<p> <strong>Zoo Loaction: </strong> </p>{{currentAnimal.zooLocation}} <br>
       <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
       <button (click)="caretakerHasLeft(currentAnimal)">Add Caretaker!</button>

     </li>

     </div>
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
      animalToCaretakersFrom.caretakers = animalToCaretakersFrom.caretakers + 1;
    }
  }

  caretakersAlert(currentAnimal) {
    if (currentAnimal.caretakers <= 10) {
      return "bg-info";
    }
  }
  onChange(optionFromMenu) {
  this.filterByAge = optionFromMenu;
}


}

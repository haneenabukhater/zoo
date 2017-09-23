import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
    <h1>Zoo Animals</h1>
    <h3>{{currentFocus}}</h3>
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    <edit-animal [childSelectedAnimal] = "selectedAnimal" (editButtonClickedSender) = "finishedEditing()"></edit-animal>
    <animal-list [childAnimalList] = "masterAnimals" (clickSender)="editButtonClicked($event)"></animal-list>
  </div>
  `

})
export class AppComponent{
   currentFocus: string = 'Our Animals';
   selectedAnimal = null;
   masterAnimals: Animal[] = [
    ];

  addAnimal(newAnimalFromChild: Animal){
    this.masterAnimals.push(newAnimalFromChild);
  }
  editButtonClicked(clickedAnimal){
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

}

import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <form>
      <div>
       <label>Enter Name:</label>
       <input #name>
      </div>
      <div>
        <label>Enter Species:</label>
        <input #species>
      </div>
      <div>
        <label>Enter Age:</label>
        <input #age type="number" >
      </div>
      <div>
        <label>Enter Diet Content:</label>
        <input #diet>
      </div>
      <p>Select the sex</p>
        <select #sex (change)="onChange($event.target.value)">
           <option value="female" selected="selected">Female</option>
           <option value="male">Male</option>
           <option value="other">Other</option>
        </select>
        <div>
          <label>Enter Location:</label>
          <input #zooLocation>
        </div>
      <hr>
    <button (click)="submitForm(name.value, species.value, age.value, diet.value, sex.value)">Create Animal!</button>
  </form>
  `
})


  export class newAnimalComponent {
    @Output() newAnimalSender = new EventEmitter();

    submitForm(name: string, species: string, age: number, diet: number, sex: string, zooLocation: string){
      var newAnimalToAdd: Animal = new Animal (name, species, age, diet, sex, zooLocation);
      this.newAnimalSender.emit(newAnimalToAdd);
    }
  }

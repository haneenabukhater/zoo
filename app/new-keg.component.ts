import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'new-keg',
  template: `
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
    <p>Select the style</p>
      <select #style (change)="onChange($event.target.value)">
         <option value="IPA" selected="selected">IPA</option>
         <option value="porter">Porter</option>
         <option value="session">Session</option>
      </select>
  
    <button (click)="submitForm(name.value, brand.value, price.value, alcohol.value, style.value)">Create Keg!</button>
  </form>
  `
})


  export class newKegComponent {
    @Output() newKegSender = new EventEmitter();

    submitForm(name: string, brand: string, price: number, alcohol: number, style: string){
      var newKegToAdd: Keg = new Keg (name, brand, price, alcohol, style);
      this.newKegSender.emit(newKegToAdd);
    }
  }

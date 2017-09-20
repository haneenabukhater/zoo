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
    <button (click)="submitForm(name.value, brand.value, price.value, alcohol.value)">Create Keg!</button>
  </form>
  `
})


  export class newKegComponent {
    @Output() newKegSender = new EventEmitter();

    submitForm(name: string, brand: string, price: number, alcohol: number){
      var newKegToAdd: Keg = new Keg (name, brand, price, alcohol);
      this.newKegSender.emit(newKegToAdd);
    }
  }

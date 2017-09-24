export class Animal {
  canbeseen: boolean = false;
  caretakers: number = 1;
  constructor(public name: string, public species: string, public age: number, public diet: number, public sex: string, public zooLocation: string){ }
}

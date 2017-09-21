export class Keg {
  canbeseen: boolean = false;
  pints: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcohol: number, public style: string){ }
}

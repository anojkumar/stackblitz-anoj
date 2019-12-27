import { Component } from '@angular/core';
import { Iitem } from './shopitem';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {
  name = 'test';
  orderlist : Iitem[] = [
    { itemname : 'rice', price: 56 , isAvailable: true },
    { itemname : 'sugar', price: 50 , isAvailable: false },
    { itemname : 'biscuit', price: 20 , isAvailable: true },
  ]
}

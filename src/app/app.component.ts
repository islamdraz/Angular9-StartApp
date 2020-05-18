import { Component } from '@angular/core';

@Component({
  selector:'pm-root',
  template:`
  <div> <h1>{{title}}</h1>
       <pm-products></pm-products>
  </div>
  `
})
export class AppComponent{
  title:string="Product managment "
}
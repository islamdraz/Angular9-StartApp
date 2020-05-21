import { Component } from '@angular/core';

@Component({
  selector:'pm-root',
  template:`
  <nav class="navbar bavbar-expand navbar-light bg-light">
    <a class="navbar-brand">{{title}}</a>
    <ul class="nav nav-pills">
      <li> <a class="nav-link" [routerLink]="['/welcome']">Home</a> </li>
      <li> <a class="nav-link" [routerLink]="['/products']">Prodcuts List</a> </li>
    </ul>  
  </nav>

  <router-outlet></router-outlet>
  `
})
export class AppComponent{
  title:string="Product managment "
}
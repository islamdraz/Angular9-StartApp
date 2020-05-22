import { BrowserModule } from '@angular/platform-browser';
import { NgModule  } from '@angular/core';
import {RouterModule} from '@angular/router'
import { HttpClientModule  } from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';

import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './product/product.module';
import { NotFountComponent } from './not-fount/not-fount.component';


@NgModule({
  declarations: [
    AppComponent,  
    WelcomeComponent, NotFountComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'welcome',component:WelcomeComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
       {path:'**',component:NotFountComponent},
    ]),
    ProductModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

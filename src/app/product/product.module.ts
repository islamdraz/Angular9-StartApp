import { NgModule } from '@angular/core';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './productList.component';

import { ConvertToSpacePipe } from '../shared/convert-to-space-pipe';

import { RouterModule } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ConvertToSpacePipe
  ],
  imports: [
  
    RouterModule.forChild([
      {path:'products',component:ProductListComponent},
      {
        path:'product/:id',
        component:ProductDetailComponent,
        canActivate:[ProductDetailGuard]
      },
    ]),
    SharedModule
  ]
})
export class ProductModule { }

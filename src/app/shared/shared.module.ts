import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { A1DynamicTabelComponent } from './a1-dynamic-tabel/a1-dynamic-tabel.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StarComponent,
    A1DynamicTabelComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[StarComponent,CommonModule,FormsModule,A1DynamicTabelComponent]
})
export class SharedModule { }

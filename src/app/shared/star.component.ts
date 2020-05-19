import { Component, OnChanges, Input } from '@angular/core';

@Component({
    selector:'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
   
   
    ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
       this.starWidth=this.rating*75/5;
    }

   @Input() rating:number;
    starWidth:number;


}
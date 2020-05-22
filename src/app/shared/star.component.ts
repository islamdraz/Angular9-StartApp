import { Component, OnChanges, Input, EventEmitter, Output } from '@angular/core';


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
    
    @Output() ratingEventClicked:EventEmitter<string>=new EventEmitter<string>();
    onClick():void{
        console.log(`the rating is ${this.rating}` )

        this.ratingEventClicked.emit(`the rating is ${this.rating}`)
    }

}
import { Component, OnInit } from '@angular/core';
import {IProduct} from './product'
import { ProductService } from './product.service';
@Component({
    
    templateUrl:'./product.list.component.html',
    styleUrls:['./product.list.component.css']
})
export class ProductListComponent implements OnInit{
   
  productColumns:any=[
    {displayName:'image',columName:'',isSortable:true},
    {displayName:'Product',columName:'',isSortable:true},
    {displayName:'Code',columName:'',isSortable:true},
    {displayName:'Avaible',columName:'',isSortable:true},
    {displayName:'Price',columName:'',isSortable:true},
    {displayName:'5 star Rating',columName:'',isSortable:true}
  
   ]

    title:string ='product list!';
    imageWidth:number=50;
    imageMargine:number=2;
    showImage=false;
    _listFilter:string;
    set listFilter(value:string){
      this._listFilter=value;

      this.filterProducts=this._listFilter?this.performFilter(this._listFilter):this.products;
    }
    get listFilter():string{
      return this._listFilter;
      
    }
    filterProducts:IProduct[];
    products:IProduct[];

    constructor(private productService:ProductService){     
    }


    onRatingClicked(rateMessage:string):void{
      this.title="product list "+rateMessage;
    }

    performFilter(filter:string):IProduct[]{
      filter=filter.toLocaleLowerCase();
      return this.products.filter((item:IProduct)=>
        item.productName.toLocaleLowerCase().indexOf(filter)!==-1 );
    }

    toggleImage():void{
      this.showImage=!this.showImage;
    }
    ngOnInit(): void {
     
       this.productService.getProducts().subscribe({
          next:products=>{this.products=products;
            this.filterProducts=this.products;
          },
          error:err=>console.log(err)
      });

    
      
    }
}
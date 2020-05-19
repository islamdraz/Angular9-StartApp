import { Component, OnInit } from '@angular/core';
import {IProduct} from './product'
@Component({
    selector:'pm-products',
    templateUrl:'./product.list.component.html',
    styleUrls:['./product.list.component.css']
})
export class ProductListComponent implements OnInit{
   
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
    products:IProduct[]=[
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2019",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "assets/images/leaf_rake.png"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2019",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
          }
    ]

    constructor(){
      this.filterProducts=this.products;
      this._listFilter='cart';
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
      console.log("in oninit")
    }
}
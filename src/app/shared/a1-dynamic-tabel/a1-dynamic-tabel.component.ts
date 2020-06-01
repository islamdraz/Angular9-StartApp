import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from 'src/app/product/product';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'a1-dynamic-tabel',
  templateUrl: './a1-dynamic-tabel.component.html',
  styleUrls: ['./a1-dynamic-tabel.component.css']
})
export class A1DynamicTabelComponent implements OnInit {

 @Input() columns:any;
     

  


  
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
    //this.title="product list "+rateMessage;
    console.log(rateMessage)
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

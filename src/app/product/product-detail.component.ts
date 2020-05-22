import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  title:string="product details";
  id:number=0;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=+this.route.snapshot.paramMap.get('id')

  }

  onBack():void{
    this.router.navigate(["/products"]);
  }

}

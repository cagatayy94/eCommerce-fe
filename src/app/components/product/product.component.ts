import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:any = [
    {
      productId:1,
      productName:'product name1',
      categoryId:1,
      unitPrice:4
    },
    {
      productId:2,
      productName:'product name2',
      categoryId:1,
      unitPrice:4
    },
    {
      productId:3,
      productName:'product name3',
      categoryId:1,
      unitPrice:4
    },
    {
      productId:4,
      productName:'product name4',
      categoryId:1,
      unitPrice:4
    },
    {
      productId:5,
      productName:'product name5',
      categoryId:1,
      unitPrice:4
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

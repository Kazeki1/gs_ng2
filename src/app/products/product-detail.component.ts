import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  // selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor(private _route: ActivatedRoute,
              private _router: Router) {
              console.log('ID: ' + this._route.snapshot.paramMap.get('id'));
              }
  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id'); /*using const instead of let*/
    this.pageTitle += `: ${id}`;
    this.product = {
      'productId': id,
      'productName': 'Buffalo Blue Cheese',
      'productQuantity': '20',
      'productCode': 'GDN-0021',
      'releaseDate': 'March 11, 2017',
      'receiveDate': '170421',
      'expDate': '171211',
      'onShelfDate': '170501',
      'doSign': 'Wm',
      'description': '8 oz glass bottle',
      'price': 6.99,
      'starRating': 3.2,
      'imageUrl': '../assets/images/Kaz_DipMix/BuffaloBlueCheese.jpg'
    };
  }
    onBack(): void {
      this._router.navigate(['/products']);
    }
}

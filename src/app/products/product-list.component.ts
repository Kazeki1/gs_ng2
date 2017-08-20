import { Component } from '@angular/core';
import {IProduct} from './product';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title: string = 'Product List';
  imageWidth: number = 100;
  imageMargin: number = 2;
  showImage: boolean = false;
  listFilter: string = 'cheese';
  products: IProduct[]= [
    {
      'productId': 1,
      'productName': 'Buffalo Blue Cheese: ',
      'productQuantity': '20',
      'productCode': '00471-43050',
      'releaseDate': 'March 1, 2017',
      'receiveDate': '170425',
      'expDate': '171215',
      'onShelfDate': '170508',
      'doSign': 'Wm',
      'description': '8 oz glass bottle',
      'price': 6.99,
      'starRating': 3.2,
      'imageUrl': './assets/images/Kaz_DipMix/BuffaloBlueCheese.jpg'
    },
    {
      'productId': 2,
      'productName': 'Chipotle Cheddar',
      'productQuantity': '20',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2016',
      'receiveDate': '170325',
      'expDate': '171115',
      'onShelfDate': '170510',
      'doSign': 'WmJ',
      'description': '8 oz glass bottle',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': './assets/images/Kaz_DipMix/ChipotleCheddar.jpg'

    }
  ];
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
}

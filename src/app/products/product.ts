export interface IProduct {
  productId: number;
  productName: string;
  productQuantity: string;
  productCode: string;
  releaseDate: string;
  receiveDate: string;
  expDate: string;
  onShelfDate: string;
  doSign: string;
  description: string;
  price: number;
  starRating: number;
  imageUrl: string;
}

// export class Product implements IProduct {
//
//     constructor(public productID: number,
//                 public productName: string,
//                 public productQuantity: string,
//                 public productCode: string,
//                 public releaseDate: string,
//                 public receiveDate: string,
//                 public onShelfDate: string,
//                 public expDate: string,
//                 public doSign: string,
//                 public description: string,
//                 public price: number,
//                 public starRating: number,
//                 public imageUrl: string,
// )
//   calculateDiscount(percent: number): number {
//       return this.price - (this.price * percent/100);
//   }
// }

Steps to create an Angular application:
1) Create and application folder
2) Add package definition and configuration files
3) Install the packages
4) Create the app's Angular Module
5) Create the main.ts file
6) Create the host Web page (index.html)

**Setting up an Angular Application**
Use Deborah Kurata Angular: Getting Started
https://github.com/DeborahK/Angular-GettingStarted
Use starter files in folder: APM-Start
create and application folder: path/to/yourfolder
in terminal: git clone https://github.com/DeborahK/Angular-GettingStarted.git
from download select the APM-Start folder files and paste into yourfolder
open intellij and open this project folder
**Installing an Angular Application Library files**
in IJ see file structure: src/app 
note the package.json file with the list of dependencies and devDependencies
note the scripts at the top of the package.json file.
in terminal run> npm install     //sets up node_modules folder
**Running an Angular Application**
in terminal VCode: ng start
in terminal IntelliJ: ng serve -o
------------------------------------------
**Modified editor settings**
to restart app in browser at Save only:
Settings>Appearance & Behavior>System Settings>Synchronization
unchecked: Save files on frame deactivation 

to visually mark dirty files:
Settings>Editor>General>Editor Tab
checked: Mark Modified tabs with Asterisk
-------------------------------------------

**rebuild the root app component (app.component.ts)**
import { Component } from '@angular/core';

@Component({			//meta-data
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular: Getting Started';
}

**modify (app.module.ts)**
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }

**Building the Component**
Three steps to building a new component:
1) create the html (product-list.component.html)
**create ./src/app/products folder**
**create ./src/app/products/product-list.component.html file**
--Note: Adding Logic with Directives: ngIf
 line 105 *ngIf="products && products.length"--
product-list.component.html
<div class="panel panel-primary">
  <div class="panel-heading">
    {{title}}
  </div>
  <div class="panel-body">
       <div class="row">
         <div class="col-md-2">Filter by:</div>
         <div class="col-md-4">
           <input type="text" />
         </div>
       </div>
        <div class="row">
          <div class="col-md-6">
            <h3>Filtered by:</h3>
          </div>
        </div>
        <div class="table-responsive">
          <table class="table" *ngIf="products && products.length"  >
            <thead>
              <tr>
                <th>
                  <button class="btn btn-primary">
                    Show Image
                  </button>
                </th>
                <th>Product Name</th>
                <th>Product ID</th>
                <th>Quantity</th>
                <th>Order Date</th>
                <th>Receive Date</th>
                <th>On The Shelf Date</th>
                <th>Expiration Date</th>
                <th>Signature</th>
                <th>Description</th>
                <th>Price</th>
                <th>Star Rating</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let product of products">
                <td></td>
                <td>{{product.productName}}</td>
                <td>{{product.productCode}}</td>
                <td>{{product.productQuantity}}</td>
                <td>{{product.releaseDate}}</td>
                <td>{{product.receiveDate}}</td>
                <td>{{product.onShelfDate}}</td>
                <td>{{product.expDate}}</td>
                <td>{{product.doSign}}</td>
                <td>{{product.description}}</td>
                <td>{{product.price}}</td>
                <td>{{product.starRating}}</td>
              </tr>

            </tbody>
          </table>
        </div>
  </div>
</div>

2) create the component (product-list.component.ts)
add this code to product-list.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent {
  title: string = 'Product List';
  products: any[]= [
    {
      'productId': 1,
      'productName': 'Buffalo Blue Cheese',
      'productQuantity': '20',
      'productCode': '00471-43050',
      'releaseDate': 'March 1, 2017',
      'receiveDate': '170425',
      'expDate': '171215',
      'onShelfDate': '170508',
      'signature': 'Wm',
      'description': '8 oz glass bottle',
      'price': 6.99,
      'starRating': 3.2,
      'imageUrl': './app/assets/images/Kaz_DipMix/BuffaloBlueCheese.jpg'
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
      'signature': 'WmJ',
      'description': '8 oz glass bottle',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': './app/assets/images/Kaz_DipMix/ChipotleCheddar.jpg'

    }
  ];
}


3)create ./src/app/app.module.ts file
app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ProductListComponent} from './products/product-list.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ProductListComponent ],
  bootstrap: [AppComponent, ProductListComponent ]
})
export class AppModule { }

-------------------------

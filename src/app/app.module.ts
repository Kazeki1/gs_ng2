import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
import { ProductGuardService } from './products/product-guard.service';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpClientModule, RouterModule.forRoot([
    { path: 'products', component: ProductListComponent },
    { path: 'products/:id',
      canActivate: [ ProductGuardService ],
      component: ProductDetailComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  ]) ],
  declarations: [ AppComponent, ProductListComponent, ConvertToSpacesPipe, StarComponent, ProductDetailComponent, WelcomeComponent ],
  bootstrap: [ AppComponent, ProductListComponent ],
  providers: [ ProductService, ProductGuardService ]

})
export class AppModule { }

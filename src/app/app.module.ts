import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { ProductListComponent } from './products/product-list.component';
// import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
// import { StarComponent } from './shared/star.component';
// import { ProductService } from './products/product.service';
import { HttpClientModule } from '@angular/common/http';
// import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule } from '@angular/router';
// import { ProductGuardService } from './products/product-guard.service';
import { ProductModule } from './products/product.module';

@NgModule({
  imports: [ BrowserModule, HttpClientModule, RouterModule.forRoot([
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full'}
  ]), ProductModule ],
  declarations: [ AppComponent, WelcomeComponent ],
  bootstrap: [ AppComponent]
})
export class AppModule { }

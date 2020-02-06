import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCreateEditComponent } from './products/product-create-edit/product-create-edit.component';
import { ProductDeleteComponent } from './products/product-delete/product-delete.component';
import { routes } from './app.routes';
import { ProductsService } from './products/shared/index';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ ProductsService ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCreateEditComponent,
    ProductDeleteComponent
  ],
  bootstrap: [
      AppComponent
    ]
})
export class AppModule { }

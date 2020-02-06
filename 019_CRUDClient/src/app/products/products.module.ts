import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from "./index";

@NgModule({
    declarations: [
        ProductListComponent,
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class ProductsModule {}

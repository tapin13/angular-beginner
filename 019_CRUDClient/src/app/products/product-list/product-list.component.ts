import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService, Product } from '../shared/index';

@Component({
    selector: 'product-list',
    templateUrl: 'product-list.component.html'
})
export class ProductListComponent implements OnInit {
    products: Product[] = [];
    errorMessage: string;

    constructor(private service: ProductsService,
        private router: Router) { }

    ngOnInit() {
        this.getProducts();
    }

    refresh() {
        this.getProducts();
    }

    public getProducts() {
        this.service.getProducts().subscribe(
            (data) => {
                this.products = data;
            },
            err => {
                console.log(err);
                this.errorMessage = err;
            }
        );
    }

    public editProduct(product: Product) {
        this.router.navigate(['products', 'edit', product.id ]);
    }

    public deleteProduct(product: Product) {
        this.router.navigate(['products', 'delete', product.id ]);
    }

    public createProduct() {
        this.router.navigate(['products', 'create']);
    }
}

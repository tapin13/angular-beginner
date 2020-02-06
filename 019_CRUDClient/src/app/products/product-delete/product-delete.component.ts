import { Component, OnInit } from '@angular/core';
import { Product, ProductsService } from '../shared/index';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'product-delete',
    templateUrl: 'product-delete.component.html'
})
export class ProductDeleteComponent implements OnInit {
    public currentProduct: Product;
    public errorMessage: string;

    constructor(private service: ProductsService,
        private router: Router,
        private activeRoute: ActivatedRoute
    ) { }

    public ngOnInit() {
        this.getProductFromSnapshot();
    }

    private getProductFromSnapshot() {
        let id = this.activeRoute.snapshot.params['id'];
        
        if(id) {
            this.service.getProduct(id).subscribe(product => {
                this.currentProduct = product;
            },
            error => this.errorMessage = error
            );
        } else {
            this.errorMessage = 'Product not found';
        }
    }

    public deleteProduct() {
        this.service.deleteProduct(this.currentProduct)
            .subscribe(
                () => this.goBack(),
                error => this.errorMessage = error
            );
    }

    public goBack() {
        this.router.navigate(['/product-list']);
    }
}

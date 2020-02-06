import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Product, ProductsService } from '../shared/index';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { error } from 'protractor';

@Component({
    selector: 'product-create-edit',
    templateUrl: 'product-create-edit.component.html'
})
export class ProductCreateEditComponent implements OnInit {
    currentProduct: Product;
    productForm: FormGroup;
    errorMessage: string;

    constructor(private service: ProductsService,
        private activeRoute: ActivatedRoute,
        private formBuilder: FormBuilder,
        private router: Router
        ) { }

    ngOnInit() {
        this.buildForm();
        this.getProductFromRoute();
    }

    private buildForm() {
        this.productForm = this.formBuilder.group({
            name: ['', Validators.required],
            price: ['', Validators.required]
        });
    }

    private getProductFromRoute() {
        this.activeRoute.params.forEach((params: Params) => {
            let id = params['id'];

            if(id) {
                this.service.getProduct(id).subscribe(product => {
                    this.currentProduct = product;
                    this.productForm.patchValue(this.currentProduct);
                },
                error => this.errorMessage = error
                );
            } else {
                this.currentProduct = new Product(null, null, null);
                this.productForm.patchValue(this.currentProduct);
            }
        });
    }

    public checkError(element: string, errorType: string) {
        return this.productForm.get(element).hasError(errorType)
            && this.productForm.get(element).touched;
    }

    public onSubmit(productForm: FormGroup) {
        this.currentProduct.name = productForm.value.name;
        this.currentProduct.price = productForm.value.price;

        if(this.currentProduct.id) {
            this.service.updateProduct(this.currentProduct)
                .subscribe(
                    () => this.goBack(),
                    error => this.errorMessage = error
                );
        } else {
            this.service.addProduct(this.currentProduct)
                .subscribe(
                    () => this.goBack(),
                    error => this.errorMessage = error
                );
        }
    }

    public goBack() {
        this.router.navigate(['/product-list']);
    }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

import { map, catchError } from 'rxjs/operators';

import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {
    private productsUrl = 'http://angular.local/items';

    constructor(private http: HttpClient) {}

    public getProducts(): Promise<Product[]> {
        let products = this.http.get(this.productsUrl).
            toPromise()
            .then(this.extractProducts)
            .catch(this.handleError);

        return products;
    }

    public getProduct(id: string): Promise<Product> {
        let product = this.http.get(this.productsUrl + '/' + id)
            .toPromise()
            .then(this.extractProduct)
            .catch(this.handleError);

        return product;
    }

    public addProduct(product: Product): Promise<Product> {
        return this.http.post(this.productsUrl, product)
            .toPromise()
            .catch(this.handleError);
    }
    public updateProduct(product: Product): Promise<Product> {
        return this.http.put(this.productsUrl, product)
            .toPromise()
            .catch(this.handleError);
    }
    public deleteProduct(product: Product): Promise<Product> {
        return this.http.delete(this.productsUrl + '/' + product.id)
            .toPromise()
            .catch(this.handleError);
    }

    private extractProducts(data) {
        let products: Product[] = [];

        for(let i = 0; i < data.length; i++) {
            products.push(new Product(data[i].id, data[i].name, data[i].price));
        }

        return products;
    }

    private extractProduct(data) {
        let product: Product;
        product = new Product(data.id, data.name, data.price);
        return product;
    }

    private handleError(error: any): any {
        console.log(`handleError`, error);
    }
}

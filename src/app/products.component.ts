import { Component} from '@angular/core'
import { ProductsService } from './products.service';

@Component({
    selector: 'Products',
    template: `
        <h2>{{getTitle()}}</h2>
        <ul>
            <li *ngFor="let product of products">
                {{product}}
            </li>
        </ul>
    `
})
export class ProductsComponent{
    title = "Product list"
    products;

    constructor(productsService : ProductsService) {
        this.products = productsService.getProducts();
    }

    getTitle(){
        return this.title;
    }
}
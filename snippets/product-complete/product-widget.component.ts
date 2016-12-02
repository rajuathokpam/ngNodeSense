import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: 'product-widget',
    template: `
            <p>Name: {{product?.name | uppercase}}</p>
            <p>Price {{ 20 | currency}}</p>
            <p>Year: {{product?.year}}</p>
            <p>Weight: {{product?.weight}}</p>

            <button (click)="addToCartClicked()">Add To Cart</button>

            <a routerLink="/products/edit/{{product.id}}" class="button">
            Edit
            </a>
    `
})
export class ProductWidgetComponent {
    @Input("productInfo")
    product: any;

    @Output()
    addToShoppingCart:EventEmitter<any> = new EventEmitter<any>();

    addToCartClicked() {
        console.log("Add to cart clicked");
        this.addToShoppingCart.emit(this.product);
    }
}
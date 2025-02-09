import { Component, inject, input } from '@angular/core';
import { Product } from '../../../models/products.model';
import { PrimaryBtnComponent } from '../../../components/primary-btn/primary-btn.component';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-product-card',
  imports: [PrimaryBtnComponent],
  template: `
    <div
      class="bg-white shadow-md border border-white rounded-xl p-6 flex flex-col gap-6 relative"
    >
      <div class="mx-auto">
        <img class="w-[200px] h-[100px]" [src]="product().image" alt="" />
        <div class="flex flex-col mt-2">
          <span class="text-md font-bold">{{ product().title }}</span>
          <span class="text-md font-bold">{{ '$' + product().price }}</span>
          <app-primary-btn
            label="Add to cart"
            svgIcon="svgscart.svg"
            (btnClicked)="cartService.addToCart(product())"
          />
        </div>
        <span
          class="absolute top-2 right-3 text-sm font-bold"
          [class]="product().rating.count ? 'text-green-500' : 'text-red-500'"
        >
          @if (product().rating.count) {
          {{ product().rating.count }} left }@else { Out of rating.count }
        </span>
      </div>
    </div>
  `,
  styles: ``,
})
export class ProductCardComponent {
  cartService = inject(CartService);
  product = input.required<Product>();
}

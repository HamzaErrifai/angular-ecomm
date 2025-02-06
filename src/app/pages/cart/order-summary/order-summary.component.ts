import { Component, computed, inject } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { PrimaryBtnComponent } from '../../../components/primary-btn/primary-btn.component';

@Component({
  selector: 'app-order-summary',
  imports: [PrimaryBtnComponent],
  template: `
    <div class="bg-slate-100 p-6 rounded-xl shadow-xl border">
      <h2 class="text-lg font-bold mb-4">Order Summary</h2>
      <p class="text-sm text-gray-600 mb-4">Your order summary is below</p>
      <div class="flex gap-4">
        <span class="text-lg font-bold">Total : $ {{ total() }}</span>
      </div>
      <app-primary-btn label="Proceed to checkout" />
    </div>
  `,
  styles: ``,
})
export class OrderSummaryComponent {
  cartService = inject(CartService);
  total = computed(() => {
    let total = 0;
    for (const item of this.cartService.cart()) {
      total += item.price;
    }
    return total;
  });
}

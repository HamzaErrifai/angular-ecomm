import { Component, inject, signal } from '@angular/core';

import { PrimaryBtnComponent } from '../primary-btn/primary-btn.component';
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [PrimaryBtnComponent, RouterLink],
  template: `
    <div
      class="bg-slate-100 px-4 py-3 shadow-md flex justify-between items-center"
    >
      <span class="text-xl font-bold cursor-pointer" routerLink="/"
        >My Store</span
      >
      <app-primary-btn
        [label]="'(' + cartService.cart().length + ')'"
        svgIconSrc="/svgs/cart.svg"
        routerLink="/cart"
      />
    </div>
  `,
  styles: ``,
})
export class HeaderComponent {
  cartService = inject(CartService);
}

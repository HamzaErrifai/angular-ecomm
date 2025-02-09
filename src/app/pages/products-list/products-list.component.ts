import { Component, signal } from '@angular/core';
import { Product } from '../../models/products.model';
import { ProductCardComponent } from './product-card/product-card.component';
import { GroupBtnItemComponent } from '../../components/group-btn-item/group-btn-item.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent, GroupBtnItemComponent],
  template: `
    <div class="mt-3 flex justify-center">
      <div class="inline-flex rounded-md shadow-xs">
        <app-group-btn-item
          label="All"
          (onClickHandler)="filterProducts('All')"
        />
        @for(cat of categories(); track $index){
        <app-group-btn-item
          (onClickHandler)="filterProducts(cat)"
          [label]="cat"
        />

        }
      </div>
    </div>
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product"></app-product-card>
      }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  async ngOnInit() {
    const resP = await fetch('https://fakestoreapi.com/products');

    const dataP = await resP.json();
    this.products.set(dataP);

    const resCat = await fetch('https://fakestoreapi.com/products/categories');
    const dataCat = await resCat.json();
    this.categories.set(dataCat);
  }

  categories = signal('');
  products = signal<Product[]>([]);
  AllProducts = [...this.products()];
  clicked = 0;

  filterProducts(cat: string) {
    if (this.clicked === 0) {
      this.AllProducts = [...this.products()];
      this.clicked = 1;
    }

    if (cat !== 'All') {
      this.products.set(
        this.AllProducts.filter((product) => product.category == cat)
      );
    }else {
      this.products.set(this.AllProducts);
    }
  }
}

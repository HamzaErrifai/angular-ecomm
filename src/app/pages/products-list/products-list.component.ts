import { Component, signal } from '@angular/core';
import { Product } from '../../components/header/products.model';
import { ProductCardComponent } from './product-card/product-card.component';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent],
  template: `
    <div class="p-8 grid grid-cols-2 gap-4">
      @for (product of products(); track product.id) {
      <app-product-card [product]="product"></app-product-card>
      }
    </div>
  `,
  styles: ``,
})
export class ProductsListComponent {
  products = signal<Product[]>([
    {
      id: 1,
      title: 'Product 1',
      image:
        'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg',
      price: 10,
      stock: 50,
    },
    {
      id: 2,
      title: 'Product 2',
      image:
        'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg',
      price: 4,
      stock: 10,
    },
    {
      id: 3,
      title: 'Product 3',
      image:
        'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg',
      price: 62,
      stock: 0,
    },
    {
      id: 4,
      title: 'Product 4',
      image:
        'https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg',
      price: 22,
      stock: 5,
    },
  ]);
}

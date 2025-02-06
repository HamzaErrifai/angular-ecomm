import { Injectable, signal } from '@angular/core';
import { Product } from '../components/header/products.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart = signal<Product[]>([
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
  addToCart(product: Product) {
    this.cart.set([...this.cart(), product]);
  }
  removeFromCart(id: number) {
    this.cart.set(this.cart().filter((p) => p.id !== id));
  }

  constructor() {}
}

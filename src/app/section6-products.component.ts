import { Component, computed, effect, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

interface Product {
  id: number;
  name: string;
  category: string;
}

const MOCK_PRODUCTS: Product[] = [
  { id: 1, name: 'Laptop', category: 'electronics' },
  { id: 2, name: 'Headphones', category: 'electronics' },
  { id: 3, name: 'Coffee mug', category: 'kitchen' },
  { id: 4, name: 'Notebook', category: 'office' },
];

@Component({
  selector: 'app-section6-products',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <h2>6. Conclusion – starter pattern with signals</h2>

    <section>
      <h3>Products list with local UI state</h3>

      <label>
        Filter by category:
        <input
          type="text"
          [value]="categoryFilter()"
          (input)="categoryFilter.set(($any($event.target)).value)"
        />
      </label>

      <p *ngIf="loading()">Loading products...</p>

      <ul *ngIf="!loading()">
        <li *ngFor="let product of filteredProducts()">
          {{ product.name }} ({{ product.category }})
        </li>
      </ul>
    </section>
  `
})
export class Section6ProductsComponent {
  readonly loading = signal(true);
  readonly products = signal<Product[]>([]);
  readonly categoryFilter = signal('');

  readonly filteredProducts = computed(() => {
    const term = this.categoryFilter().toLowerCase();
    return this.products().filter(p =>
      p.category.toLowerCase().includes(term)
    );
  });

  private readonly loadEffect = effect(() => {
    if (this.loading()) {
      // Simulate async loading from an API
      setTimeout(() => {
        this.products.set(MOCK_PRODUCTS);
        this.loading.set(false);
      }, 800);
    }
  });
}

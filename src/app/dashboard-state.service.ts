import { Injectable, computed, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DashboardState {
  private readonly rawSales = signal([100, 200, 300]);

  readonly sales = computed(() => this.rawSales());
  readonly totalSales = computed(
    () => this.rawSales().reduce((sum, value) => sum + value, 0)
  );

  addSale(amount: number) {
    this.rawSales.update(list => [...list, amount]);
  }
}

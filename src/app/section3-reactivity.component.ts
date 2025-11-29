import { Component, inject } from '@angular/core';
import { NgFor } from '@angular/common';
import { DashboardState } from './dashboard-state.service';

@Component({
  selector: 'app-section3-reactivity',
  standalone: true,
  imports: [NgFor],
  template: `
    <h2>3. Reactivity in the application and change detection</h2>

    <section>
      <h3>Total sales component (depends on signals)</h3>
      <p>Total sales: {{ state.totalSales() }} €</p>
      <button (click)="addRandomSale()">Add random sale</button>
    </section>

    <section>
      <h3>Sales list (reads the same signals)</h3>
      <ul>
        <li *ngFor="let sale of state.sales(); let i = index">
          Sale #{{ i + 1 }}: {{ sale }} €
        </li>
      </ul>
    </section>

    <section>
      <h3>Static component (no dependence on sales signals)</h3>
      <p>
        Imagine another component in the page that does not read any of the
        sales signals — it is not checked when the sales change.
      </p>
    </section>
  `
})
export class Section3ReactivityComponent {
  readonly state = inject(DashboardState);

  addRandomSale() {
    const amount = Math.round(Math.random() * 100);
    this.state.addSale(amount);
  }
}

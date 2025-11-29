import { Component, computed, signal } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-section2-signals',
  standalone: true,
  imports: [NgIf],
  template: `
    <h2>2. What is a Signal — the core concept</h2>

    <section>
      <h3>2.1 Writable signal (user name)</h3>
      <p>Current user: {{ userName() }}</p>
      <button (click)="loginAs('Irene')">Login as Irene</button>
      <button (click)="loginAs('Guest')">Reset to Guest</button>
    </section>

    <hr />

    <section>
      <h3>2.2 Writable vs read-only (derived) signals</h3>
      <p>Base price: {{ basePrice() }} €</p>
      <p>Tax (21%): {{ tax() }} €</p>
      <p><strong>Total: {{ total() }} €</strong></p>
      <button (click)="increase()">Add 10 €</button>
    </section>
  `
})
export class Section2SignalsComponent {
  // Writable signal
  readonly userName = signal('Guest');

  // Writable + derived signals
  readonly basePrice = signal(100);
  readonly tax = computed(() => this.basePrice() * 0.21);
  readonly total = computed(() => this.basePrice() + this.tax());

  loginAs(name: string) {
    this.userName.set(name);
  }

  increase() {
    this.basePrice.update(price => price + 10);
  }
}

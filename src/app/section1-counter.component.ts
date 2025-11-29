import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-section1-counter',
  standalone: true,
  template: `
    <h2>1. Introduction – why we talk about Signals</h2>
    <p>
      This simple counter shows a writable signal. When you click the button,
      only the places that depend on the <code>count()</code> signal update.
    </p>
    <p>Count: {{ count() }}</p>
    <button (click)="increment()">Increment</button>
  `
})
export class Section1CounterComponent {
  readonly count = signal(0);

  increment() {
    this.count.update(value => value + 1);
  }
}

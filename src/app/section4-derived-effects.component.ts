import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-section4-derived-effects',
  standalone: true,
  template: `
    <h2>4. Derived state and side-effects: computed values and effects</h2>

    <section>
      <h3>4.1 Derived state with computed</h3>
      <p>First name: {{ firstName() }}</p>
      <p>Last name: {{ lastName() }}</p>
      <p>Full name (computed): {{ fullName() }}</p>
      <button (click)="rename()">Change name</button>
    </section>

    <hr />

    <section>
      <h3>4.2 Side-effects with effect</h3>
      <p>Theme preference: {{ theme() }}</p>
      <button (click)="toggle()">Toggle theme</button>
      <p>
        Open the browser console to see the logs when the theme changes.
        The effect also updates <code>document.body.dataset.theme</code>.
      </p>
    </section>
  `
})
export class Section4DerivedEffectsComponent {
  readonly firstName = signal('Irene');
  readonly lastName = signal('García');

  readonly fullName = computed(
    () => `${this.firstName()} ${this.lastName()}`
  );

  readonly theme = signal<'light' | 'dark'>('light');

  private readonly syncEffect = effect(() => {
    const current = this.theme();
    console.log('Theme changed to:', current);
    document.body.dataset['theme'] = current;
  });

  rename() {
    this.firstName.set('María');
    this.lastName.set('López');
  }

  toggle() {
    this.theme.update(current => (current === 'light' ? 'dark' : 'light'));
  }
}

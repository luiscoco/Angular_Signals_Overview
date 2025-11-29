import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <h1>Angular Signals - Demo</h1>
    <nav>
      <a routerLink="/section1">1. Intro / Counter</a>
      <a routerLink="/section2">2. What is a Signal</a>
      <a routerLink="/section3">3. Reactivity & Change Detection</a>
      <a routerLink="/section4">4. Derived & Effects</a>
      <a routerLink="/section5">5. Benefits & Trade-offs</a>
      <a routerLink="/section6">6. Conclusion / Starter Pattern</a>
    </nav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent {}

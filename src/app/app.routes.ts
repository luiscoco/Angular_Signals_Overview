import { Routes } from '@angular/router';
import { Section1CounterComponent } from './section1-counter.component';
import { Section2SignalsComponent } from './section2-signals.component';
import { Section3ReactivityComponent } from './section3-reactivity.component';
import { Section4DerivedEffectsComponent } from './section4-derived-effects.component';
import { Section5TasksComponent } from './section5-tasks.component';
import { Section6ProductsComponent } from './section6-products.component';

export const routes: Routes = [
  { path: '', redirectTo: 'section1', pathMatch: 'full' },
  { path: 'section1', component: Section1CounterComponent },
  { path: 'section2', component: Section2SignalsComponent },
  { path: 'section3', component: Section3ReactivityComponent },
  { path: 'section4', component: Section4DerivedEffectsComponent },
  { path: 'section5', component: Section5TasksComponent },
  { path: 'section6', component: Section6ProductsComponent },
  { path: '**', redirectTo: 'section1' }
];

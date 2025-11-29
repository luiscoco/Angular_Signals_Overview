import { Component, inject } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { TasksStore } from './tasks.store';

@Component({
  selector: 'app-section5-tasks',
  standalone: true,
  imports: [NgFor, NgIf],
  template: `
    <h2>5. When Signals shine — benefits and trade-offs</h2>

    <section>
      <h3>Tasks (signal-based store)</h3>
      <p>Open tasks: {{ store.openCount() }}</p>

      <div>
        <button (click)="store.setFilter('all')">All</button>
        <button (click)="store.setFilter('open')">Open</button>
        <button (click)="store.setFilter('done')">Done</button>
      </div>

      <ul>
        <li *ngFor="let task of store.visibleTasks()">
          <label>
            <input
              type="checkbox"
              [checked]="task.done"
              (change)="store.toggleTask(task.id)"
            />
            {{ task.title }}
          </label>
        </li>
      </ul>

      <p *ngIf="store.visibleTasks().length === 0">
        No tasks for this filter.
      </p>
    </section>
  `
})
export class Section5TasksComponent {
  readonly store = inject(TasksStore);
}

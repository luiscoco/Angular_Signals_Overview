import { Injectable, computed, signal } from '@angular/core';

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

@Injectable({ providedIn: 'root' })
export class TasksStore {
  private readonly tasks = signal<Task[]>([
    { id: 1, title: 'Prepare slides', done: false },
    { id: 2, title: 'Record demo', done: false },
  ]);

  private readonly filter = signal<'all' | 'open' | 'done'>('all');

  readonly visibleTasks = computed(() => {
    const currentFilter = this.filter();
    const allTasks = this.tasks();

    if (currentFilter === 'open') {
      return allTasks.filter(t => !t.done);
    }

    if (currentFilter === 'done') {
      return allTasks.filter(t => t.done);
    }

    return allTasks;
  });

  readonly openCount = computed(
    () => this.tasks().filter(t => !t.done).length
  );

  setFilter(filter: 'all' | 'open' | 'done') {
    this.filter.set(filter);
  }

  toggleTask(id: number) {
    this.tasks.update(list =>
      list.map(task =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  }
}

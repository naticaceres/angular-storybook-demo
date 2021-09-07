import { EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { Component } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-pure-task-list',
  templateUrl: './pure-task-list.component.html',
  styleUrls: ['./pure-task-list.component.css'],
})
export class PureTaskListComponent {
  @Input() tasks: Task[] = [];

  /** Checks if it's in loading state */
  @Input() loading = false;

  /** Event to change the task to pinned */
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onPinTask = new EventEmitter<Event>();

  /** Event to change the task to archived */
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onArchiveTask = new EventEmitter<Event>();

  tasksInOrder: Task[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.tasks?.currentValue != changes.tasks?.previousValue) {
      this.tasksInOrder = changes.tasks.currentValue.sort((a, b) =>
        a.state === 'TASK_PINNED' ? -1 : b.state === 'TASK_PINNED' ? 1 : 0
      );
    }
  }
}

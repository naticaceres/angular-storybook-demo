import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnChanges {
  @Input() tasks: Task[] = [];

  /** Checks if it's in loading state */
  @Input() loading = false;

  /** Event to change the task to pinned */
  // tslint:disable-next-line: no-output-on-prefix
  @Output()  onPinTask = new EventEmitter<Event>();

  /** Event to change the task to archived */
  // tslint:disable-next-line: no-output-on-prefix
  @Output()  onArchiveTask = new EventEmitter<Event>();

  tasksInOrder: Task[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if(changes.tasks?.currentValue != changes.tasks?.previousValue){
      this.tasksInOrder = changes.tasks.currentValue.sort((a, b) => a.state === "TASK_PINNED" ? -1 : b.state === "TASK_PINNED" ? 1 : 0)
    }
  }
}

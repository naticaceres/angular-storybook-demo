import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  @Input() task: any;

  @Output()  onPinTask = new EventEmitter<Event>();

  @Output()  onArchiveTask = new EventEmitter<Event>();

}

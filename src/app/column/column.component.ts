import { Component, Input, OnInit } from '@angular/core';

import { TaskComplete } from '../task-complete';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
  @Input() day: string;
  taskComplete: any;
  @Input() tasks: any;

  constructor() { }

  ngOnInit() {
    this.taskComplete = TaskComplete;
  }

}

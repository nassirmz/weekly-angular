import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/index';

import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ComponentInteractionService {

  private draggedTaskData = new Subject<Task>();
  private addedTaskData = new Subject<Task[]>();

  draggedTaskData$ = this.draggedTaskData.asObservable();
  addedTaskData$ = this.addedTaskData.asObservable();

  serveDraggedTaskData(taskData: Task) {
    this.draggedTaskData.next(taskData);
  }

  serveAddedTaskData(tasksData: Task[]) {
    this.addedTaskData.next(tasksData);
  }

  constructor() { }
}
